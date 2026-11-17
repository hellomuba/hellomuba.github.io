(() => {
  const answers=[
    {question:'What do you build?',answer:'I build production AI and backend systems, including agent workflows, retrieval-based applications, secure APIs, and commercial integrations.',label:'Explore selected projects',url:'#work'},
    {question:'What AI projects can I review?',answer:'AIRA demonstrates AI-assisted recruitment with structured evaluation; Spidify covers identity and compliance workflows; Diogenes documents lead-generation agents and CRM integrations.',label:'Read project case studies',url:'#work'},
    {question:'How do you approach security?',answer:'I use explicit workflow states, backend authorization, multi-tenant boundaries, PII safeguards, signed webhooks, and reviewable outputs where appropriate. The Spidify case study describes examples.',label:'Explore the Spidify case study',url:'projects/spidify.html'},
    {question:'What is your primary stack?',answer:'Python, FastAPI, PostgreSQL, Redis, Azure, AWS, Docker, LLM tools, retrieval systems, and TypeScript/React integrations are among my established engineering areas.',label:'Read engineering approach',url:'#approach'},
    {question:'Can I see public source code?',answer:'Employer and client implementations are not publicly linked. My independent OpenTrust AI repository is public but currently pre-prototype, with threat modeling and specifications available.',label:'Visit OpenTrust AI',url:'https://github.com/hellomuba/opentrust-ai'},
    {question:'Are you open to remote work?',answer:'I am based in Lagos, Nigeria, and am open to relevant international remote engineering roles, contracts, and technical collaborations.',label:'Contact me',url:'#contact'}
  ];
  const root=document.getElementById('recruiter-guide');
  if(!root)return;
  const container=root.querySelector('.guide-questions'),answer=root.querySelector('.guide-answer'),link=root.querySelector('.guide-answer-link');
  const buttons=answers.map((entry,index)=>{
    const button=document.createElement('button');button.type='button';button.className='guide-question';button.textContent=entry.question;button.setAttribute('aria-pressed',String(index===0));container.append(button);
    button.addEventListener('click',()=>{buttons.forEach(x=>x.setAttribute('aria-pressed',String(x===button)));answer.textContent=entry.answer;link.textContent=entry.label+' ↗';link.href=entry.url;link.target=entry.url.startsWith('https://')?'_blank':'_self';link.rel=entry.url.startsWith('https://')?'noopener':'';});
    return button;
  });
  answer.textContent=answers[0].answer;link.textContent=answers[0].label+' ↗';link.href=answers[0].url;
})();