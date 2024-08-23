const container = document.querySelector("#container");
for(var i = 0; i < 16; i++){
    for(var j = 0; j < 16; j++){
        const div = document.createElement('div');
        div.setAttribute('class', 'colordiv');
        container.appendChild(div);
    }
}
