// function for bottom to top scroll
let button = document.getElementById("scrolltop")
let root = document.documentElement

function scroll() {
    root.scrollTo({
        top: 0,
        behaviour: "smooth"
    })
}


// Function for text typing
button.addEventListener("click", scroll)

var typing = new Typed(".text", {
    strings: ["Ruturaj Jadhav", "Web Devloper", "AI Expert"],
    typeSpeed: 100,
    backSpeed: 40,
    loop: true,
});

