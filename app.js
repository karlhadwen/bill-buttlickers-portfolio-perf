function onClickNavHandler(){let start;setTimeout((_=>console.log(performance.now()-start)),0)
let p=Promise.resolve(1)
for(let i=150000;i;i--){p=p.then(_=>1);}
start=performance.now();for(const link of document.querySelectorAll("nav li a")){link.addEventListener('click',function(event){document.querySelectorAll("nav li a").forEach(el=>document.querySelector(`.${el.getAttribute('href').substring(1)}`).style.display='none');document.querySelectorAll("nav li a").forEach(el=>el.classList.remove('active'));document.querySelector(`.${event.currentTarget.getAttribute('href').substring(1)}`).style.display="flex";link.classList.add('active');})}}
onClickNavHandler();const delay=t=>new Promise(resolve=>setTimeout(resolve,t));delay(14000).then(()=>console.log('Hello'));
