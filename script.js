// Container
const container = document.querySelector("#container");
const buttonContainer = document.createElement('div');
const divContainer = document.createElement('div');

buttonContainer.setAttribute("id", "controllers");
divContainer.setAttribute("id", "color-container");

container.appendChild(buttonContainer);
container.appendChild(divContainer);

// buttons

// resize button
const resButton = document.createElement('button');

resButton.addEventListener("click", () => {
    let gsize = parseInt(prompt("Enter New Grid Size (less than 100)"));
    curSize = gsize;
    while(gsize > 100){
        gsize = parseInt(prompt("Enter New Grid Size (less than 100)"));
    }
    divDeleter();
    divCreator(gsize);
    
});
resButton.textContent = "Grid Size";
buttonContainer.appendChild(resButton);

// clear button
const clear = document.createElement('button');
clear.addEventListener("click", () =>{
    divDeleter();
    divCreator(curSize);
    eventmaker();
})
clear.textContent = "Clear";

buttonContainer.appendChild(clear);

// div creators



// creates a div grid of variable size
function divCreator(size){ 
    for(let i = 0; i < size; i++){
        for(let j = 0; j < size; j++){
            const div = document.createElement('div');
            div.setAttribute('class', 'colordiv');
            divContainer.appendChild(div);
        }
    }
    divArrayMaker();
    blockSize(size);
    eventmaker();
}

// sets a single block size
function blockSize(size){
    let width = 512/size;
    divArray.forEach((divs) => {
        divs.style["width"] = String(width) + 'px';
        divs.style["height"] = String(width) + 'px';
        })
}

// deletes current div boxes
function divDeleter(){
    divArray.forEach((divs) => {
        divs.remove();
      });
}

// adds event listner to every div; essential to reassign the newly created grid
function eventmaker(){
    divArray.forEach((divs) => {
        divs.addEventListener("mousemove", () => {
            divs.style["background-color"] = "purple";
        })
    });
}

// creates a new nodeList for new blocks
function divArrayMaker(){
    divArray = document.querySelectorAll(".colordiv");
}


// Normal Execution

let divArray = document.querySelectorAll(".colordiv");
divCreator(16);

eventmaker();
let curSize = 16;

