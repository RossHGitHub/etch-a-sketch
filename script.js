let body = document.querySelector('body');
let container = document.getElementById('container');
let boxes = document.createElement('div');

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
    if(userAns>100 || userAns <=0){
        alert('Between 1 and 100 please.')
    } else{

        while(container.firstChild) {
            container.removeChild(container.firstChild);
        }
generate(userAns);}})