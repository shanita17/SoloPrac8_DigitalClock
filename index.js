let fruits = ["berries", "grapes", "dates"];

fruits.forEach(capitalise);
fruits.forEach(display);


function capitalise(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1)
}

function display(element){
    document.getElementById("myP1").textContent += element += "\n"
}
