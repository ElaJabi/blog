

let hamburger = document.querySelector("#hamburger")
let navbar = document.querySelector("#navbar")

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active")
    hamburger.classList.toggle("active")
})



