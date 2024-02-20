let menuClass = document.querySelector(".menuClass");
let menu0ne = document.querySelector(".menu1")
let cancelButton = document.querySelector("#cancelButton");
let hero = document.querySelector(".hero")
let main = document.querySelector("main")

function displayMenu(){
    menu0ne.style.display = "block"
    menuClass.style.visibility = "hidden";
    cancelButton.style.display = "block";
    hero.style.display = "none";
    main.style.display = "none";
}

function cancel(){
    cancelButton.style.display = "none";
    menu0ne.style.display = "none";
    menuClass.style.visibility = "visible"
    hero.style.display = "flex";
    main.style.display = "flex";
}
