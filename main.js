var  ham=document.querySelector('.ham');
var menu=document.querySelector('.menu');
 ham.addEventListener('click', ()=>{
menu.classList.toggle("spread");
 })
 window.addEventListener('click', e=>{
  if (menu.classList.contains('spread')
  &&e.target !=menu && e.target !=ham) {
    
    menu.classList.toggle('spread')
  }
 })
 