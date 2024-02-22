let menuClass = document.querySelector(".menuClass");
let menu0ne = document.querySelector(".menu1")
let cancelButton = document.querySelector("#cancelButton");
let main = document.querySelector("main")
let hide = document.querySelectorAll(".hide")

function displayMenu(){
    menu0ne.style.display = "block"
    menuClass.style.visibility = "hidden";
    cancelButton.style.display = "block";
    main.style.display = "none";
    hide.forEach(element => {
        element.style.display = "none"
    });
}

function cancel(){
    cancelButton.style.display = "none";
    menu0ne.style.display = "none";
    menuClass.style.visibility = "visible"
    main.style.display = "flex";
    hide.forEach(element => {
        element.style.display = "block"
    });

}
