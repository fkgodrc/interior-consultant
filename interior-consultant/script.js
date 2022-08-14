const navLogo = document.querySelector("#nav-logo")
const menuItems = document.querySelectorAll(".menu-items")

navLogo.addEventListener("click", () => {
    navLogo.classList.toggle("change")
})

menuItems.forEach(item => {
    item.addEventListener("mouseover", () => {
        item.classList.add("hover")
    })
    item.addEventListener("mouseout", () => {
        item.classList.remove("hover")
    })
})