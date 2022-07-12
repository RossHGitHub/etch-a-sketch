let body = document.querySelector('body');
let container = document.getElementById('container');


function generate(userAns) {
    
container.style.gridTemplateRows = `repeat(${userAns}, 1fr)`;
container.style.gridTemplateColumns = `repeat(${userAns}, 1fr)`;

for (let i=0;i<(userAns*userAns); i++) {
    let boxes = document.createElement('div');
    boxes.classList='boxes';
    container.appendChild(boxes);
    boxes.addEventListener('mouseover', () =>{boxes.classList = 'boxHover'});
}
}

let button = document.getElementById('btn');

button.addEventListener('click', ()=>{
    let userAns = prompt('New grid size? (Max 100)');

    if(userAns>100){
        alert('Too high! MAX: 100.')
    } else{
generate(userAns);}})