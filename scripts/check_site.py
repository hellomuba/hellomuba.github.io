"""Dependency-free checks for local pages, fragments, images, and scripts."""
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
import subprocess
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]

class Page(HTMLParser):
    def __init__(self, text):
        super().__init__()
        self.ids, self.refs, self.errors = [], [], []
        self.h1 = 0
        self.feed(text)

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if 'id' in a:
            self.ids.append(a['id'])
        if tag == 'h1':
            self.h1 += 1
        if tag == 'img' and not a.get('alt'):
            self.errors.append('Image needs descriptive alt text')
        for attr in ('src', 'href'):
            if a.get(attr):
                self.refs.append(a[attr])

paths = [ROOT / 'index.html', *sorted((ROOT / 'projects').glob('*.html')),
         *sorted((ROOT / 'blog').glob('*.html')), *sorted((ROOT / 'labs').glob('*.html'))]
pages = {p.resolve(): Page(p.read_text()) for p in paths}
errors = []
for path, page in pages.items():
    if page.h1 != 1:
        page.errors.append(f'Expected one h1, found {page.h1}')
    page.errors += [f'Duplicate id: {key}' for key, count in Counter(page.ids).items() if count > 1]
    for ref in page.refs:
        url = urlsplit(ref)
        if url.scheme or url.netloc:
            continue
        target = (ROOT / unquote(url.path).lstrip('/') if url.path.startswith('/')
                  else path.parent / unquote(url.path)) if url.path else path
        if target.is_dir():
            target /= 'index.html'
        target = target.resolve()
        if not target.exists():
            page.errors.append(f'Missing local target: {ref}')
        elif url.fragment and target in pages and unquote(url.fragment) not in pages[target].ids:
            page.errors.append(f'Missing fragment: {ref}')
    errors += [f'{path.relative_to(ROOT)}: {error}' for error in page.errors]
for path in (ROOT / 'assets').glob('*.svg'):
    ET.parse(path)
for pattern in ('*.js', 'assets/*.js', 'blog/*.js', 'labs/*.js'):
    for path in ROOT.glob(pattern):
        subprocess.run(['node', '--check', str(path)], check=True)
if errors:
    raise SystemExit('\n'.join(errors))
print(f'PASS: {len(pages)} HTML pages, local links/fragments, image alt text, SVG XML, JavaScript syntax')
