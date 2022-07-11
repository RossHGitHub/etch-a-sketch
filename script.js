let body = document.querySelector('body');
let container = document.getElementById('container');

for (let i=0;i<256; i++){
    let boxes = document.createElement('div');
    boxes.classList='boxes';
    boxes.textContent='.';
    container.appendChild(boxes);
    
}