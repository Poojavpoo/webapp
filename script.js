const bar = doucment.getElementById('bar');
const close = doucment.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
     bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(close){
    bar.addEventListener('click', () => {
       nav.classList.remove('active');
   })
}
