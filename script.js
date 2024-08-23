const container = document.querySelector("#container");
const buttonContainer = document.createElement('div');
const divContainer = document.createElement('div');

buttonContainer.setAttribute("id", "controllers");
divContainer.setAttribute("id", "color-container");

container.appendChild(buttonContainer);
container.appendChild(divContainer);

const resButton = document.createElement('button');
resButton.textContent = "Grid Size";
buttonContainer.appendChild(resButton);

resButton.addEventListener("click", () => {
    var gsize = parseInt(prompt("Enter New Grid Size (less than 100)"));
    curSize = gsize;
    while(gsize > 100){
        gsize = parseInt(prompt("Enter New Grid Size (less than 100)"));
    }
    divDeleter();
    divCreator(gsize);
    
});
function divDeleter(){
    divArray.forEach((divs) => {
        divs.remove();
      });
}

function blockSize(size){
    var width = 512/size;
    divArray.forEach((divs) => {
        divs.style["width"] = String(width) + 'px';
        divs.style["height"] = String(width) + 'px';
        })
}

function divCreator(size){
    for(var i = 0; i < size; i++){
        for(var j = 0; j < size; j++){
            const div = document.createElement('div');
            div.setAttribute('class', 'colordiv');
            divContainer.appendChild(div);
        }
    }
    divArrayMaker();
    blockSize(size);
    eventmaker();
}

let divArray = document.querySelectorAll(".colordiv");
function eventmaker(){
    divArray.forEach((divs) => {
        divs.addEventListener("mousemove", () => {
            divs.style["background-color"] = "purple";
        })
    });
}
function divArrayMaker(){
    divArray = document.querySelectorAll(".colordiv");
}


divCreator(16);
eventmaker();


const clear = document.createElement('button');
clear.addEventListener("click", () =>{
    divDeleter();
    divCreator(curSize);
    eventmaker();
})

var curSize = 16;
clear.textContent = "Clear";

buttonContainer.appendChild(clear);