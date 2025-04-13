function toggleSearchBar() {
    const searchBar = document.getElementById("search-bar");
    searchBar.classList.toggle("active");
}

function toggleMenu() {
    const menuIcon = document.getElementById("menu-icon");
    const menuButton = document.getElementById("menu-button");
    const body = document.body;

    menuIcon.classList.toggle("active"); 
    menuButton.classList.toggle("active");
    
    if (menuButton.classList.contains("active")) {
        body.classList.add("noscroll");
    } else {
        body.classList.remove("noscroll");
    }
}

const learnMoreP = document.getElementById("learn-more-p");
const learnMore = document.getElementById("learn-more");

function toggleLearnMore() {
    learnMoreP.classList.add("active");
    learnMoreP.style.cursor = "pointer";
    learnMore.classList.add("active");
    learnMore.style.transition = "opacity 0s ease-in-out";
    learnMore.style.opacity = 0 ;
}

learnMoreP.addEventListener("click", () => {
    learnMore.style.opacity = 1;
    learnMoreP.classList.remove("active");
    learnMore.classList.remove("active");
})

function closeMenuOnClick() {
    const menuIcon = document.getElementById("menu-icon");
    const menuButton = document.getElementById("menu-button");
    const body = document.body;

    menuIcon.addEventListener("click", function () {
        if (menuIcon.classList.contains("active")) {
            menuIcon.classList.remove("active"); 
            menuButton.classList.remove("active");
            body.classList.remove("noscroll");
        }
    });
}

closeMenuOnClick();

window.addEventListener("scroll", function () {
    console.log("window.scroll");
    let nav = document.getElementById("nav");
    let logo = document.getElementById("logo");
    if (window.scrollY > 50) {
        nav.style.backgroundColor = "black"; 
        nav.style.height = "8.5vh";
        logo.style.height = "8.5vh";
    } else {
        nav.style.backgroundColor = "transparent"; 
        nav.style.height = "10vh";
        logo.style.height = "10vh";
    }
});
