const btn = document.getElementById('btn');
const text = document.getElementById('text');
const box = document.querySelector('.box');

let isRotating = false;

btn.addEventListener('mousedown' , ()=>{
    isRotating=true;
});
document.addEventListener('mouseup' , ()=>{
    isRotating=false;
});

box.addEventListener('mousemove',(e)=>{
    if(isRotating){
        const rect = box.getBoundingClientRect();
        const x = e.clientX - rect.left -rect.width /2;
        const y = e.clientY - rect.top - rect.height /2;
        const angle = Math.atan2(y,x)*(180/Math.PI);

        btn.style.transform =`rotate(${angle}deg) translate(250px) `;
        text.style.textShadow = `${x/10}px ${y/10}px 2px rgba(225,225,225,1),
        ${(x+15)/10}px ${(y+15)/10}px 0px rgba(0,0,0,0.15)`;
    }
});