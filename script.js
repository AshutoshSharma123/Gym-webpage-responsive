var take = document.querySelectorAll("#btn3");
take.addEventListener("click", function () {
    take.innerHTML = "chosen";
    take.style.backgroundColor = "Green"
})



let cur = document.querySelector(".cursor")
let main = document.querySelector("body")



main.addEventListener("mousemove", function (details) {

    console.log(details)

})