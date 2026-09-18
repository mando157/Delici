let
    // ^ Header Variables
    // *Buttons
    nextBtn = document.querySelector(".next"),
    prevBtn = document.querySelector(".prev"),

    // * Indicators
    indicators = document.querySelectorAll(".indicators span"),

    // * Navbar
    navBar = document.querySelector(".nav-bar"),
    navPopup = document.querySelector(".nav-popup"),
    lastScrollY = window.scrollY,
    navLinks = navBar.querySelectorAll("li a"),
    navPopupLinks = navPopup.querySelectorAll(".nav-popup-ele li a"),

    // * Popup Element
    popupEle = document.querySelectorAll(".popupEle"),

    // * Main Menu
    breakFastContainer = document.querySelector(".break-fast"),
    lunchContainer = document.querySelector(".lunch"),
    dinnerContainer = document.querySelector(".dinner"),
    drinksContainer = document.querySelector(".drinks"),

    // * Menu Buttons
    menuButtons = document.querySelectorAll("#Menu .buttons button"),
    navbarLinksArr = document.querySelectorAll(".nav-bar .links ul li"),
    navbarPopupLinksArr = document.querySelectorAll(".nav-popup .links ul li");

// * Navbar Section
window.addEventListener("scroll", function () {
    if (window.scrollY > 10) {
        navBar.classList.add("scrolled");
    } else {
        navBar.classList.remove("scrolled");
    }

    if (window.scrollY > lastScrollY) {
        navBar.classList.add("up");
    } else if (window.scrollY < lastScrollY) {
        navBar.classList.remove("up");
    }
    lastScrollY = window.scrollY;
});

//* Next & Prev Buttons
nextBtn.addEventListener("click", function () {
    let currentCarousal = document.querySelector(".carousel-content.active"),
        nextCarousal = currentCarousal.nextElementSibling ?? document.querySelector(".carousel-body").firstElementChild,
        activeIndicator = document.querySelector(`.indicators span.active`),
        nextCarousalIndex = nextCarousal.getAttribute("data-page-number");

    currentCarousal.classList.remove("active");
    nextCarousal.classList.add("active");


    indicators.forEach(function (indicator) {
        if (indicator.getAttribute("data-target") == nextCarousalIndex) {
            activeIndicator.classList.remove("active");
            indicator.classList.add("active");
        }
    });
});

prevBtn.addEventListener("click", function () {
    let currentCarousal = document.querySelector(".carousel-content.active"),
        prevCarousal = currentCarousal.previousElementSibling ?? document.querySelector(".carousel-body").lastElementChild,
        activeIndicator = document.querySelector(`.indicators span.active`),
        prevCarousalIndex = prevCarousal.getAttribute("data-page-number");

    currentCarousal.classList.remove("active");
    prevCarousal.classList.add("active");

    indicators.forEach(function (indicator) {
        if (indicator.getAttribute("data-target") == prevCarousalIndex) {
            activeIndicator.classList.remove("active");
            indicator.classList.add("active");
        }
    });
});

//* Indicators
for (let i = 1; i <= indicators.length; i++) {
    let indicatorTarget = document.querySelector(`span[data-target="${i}"]`),
        target = document.querySelector(`.carousel-content[data-page-number="${i}"]`);

    indicatorTarget.addEventListener("click", function () {
        let
            currentCarousal = document.querySelector(".carousel-content.active"),
            activeIndicator = document.querySelector(`.indicators span.active`);

        currentCarousal.classList.remove("active");
        activeIndicator.classList.remove("active");

        target.classList.add("active");
        indicatorTarget.classList.add("active");
    });
}

// * Popup Element
popupEle.forEach(function (element) {
    element.addEventListener("click", function (e) {
        e.stopPropagation();
    });
});

// * Breakfast Section
BreakFast.forEach(function (menuItem) {
    breakFastContainer.innerHTML += `
        <div class="item col-11 col-sm-9 col-md-6 col-lg-6 mx-auto row">
            <div class="frame col-5 col-lg-3">
                <div class="image">
                    <img src="./images/${menuItem.images}" alt="BreakFast">
                    <div class="layout">
                        <i class="fa-regular fa-square-plus"></i>
                    </div>
                </div>
            </div>
            <div class="text col-7 col-lg-9">
                <div class="header flex-column flex-sm-row">
                    <h5 class="main-color mb-0">${menuItem.name}</h5>
                    <span class="d-none d-sm-block my-auto"></span>
                    <h5 class="main-color mb-0">$${menuItem.price}</h5>
                </div>
                <div class="body">
                    <p>${menuItem.miniDescription}</p>
                </div>
            </div>
        </div>
    `
});
// * Lunch Section
Lunch.forEach(function (menuItem) {
    lunchContainer.innerHTML += `
        <div class="item col-11 col-sm-9 col-md-6 col-lg-6 mx-auto row">
            <div class="frame col-5 col-lg-3">
                <div class="image">
                    <img src="./images/${menuItem.images}" alt="BreakFast">
                    <div class="layout">
                        <i class="fa-regular fa-square-plus"></i>
                    </div>
                </div>
            </div>
            <div class="text col-7 col-lg-9">
                <div class="header flex-column flex-sm-row">
                    <h5 class="main-color mb-0">${menuItem.name}</h5>
                    <span class="d-none d-sm-block my-auto"></span>
                    <h5 class="main-color mb-0">$${menuItem.price}</h5>
                </div>
                <div class="body">
                    <p>${menuItem.miniDescription}</p>
                </div>
            </div>
        </div>
    `
});
// * Dinner Section
Dinner.forEach(function (menuItem) {
    dinnerContainer.innerHTML += `
        <div class="item col-11 col-sm-9 col-md-6 col-lg-6 mx-auto row">
            <div class="frame col-5 col-lg-3">
                <div class="image">
                    <img src="./images/${menuItem.images}" alt="BreakFast">
                    <div class="layout">
                        <i class="fa-regular fa-square-plus"></i>
                    </div>
                </div>
            </div>
            <div class="text col-7 col-lg-9">
                <div class="header flex-column flex-sm-row">
                    <h5 class="main-color mb-0">${menuItem.name}</h5>
                    <span class="d-none d-sm-block my-auto"></span>
                    <h5 class="main-color mb-0">$${menuItem.price}</h5>
                </div>
                <div class="body">
                    <p>${menuItem.miniDescription}</p>
                </div>
            </div>
        </div>
    `
});
// * Drinks Section
Drinks.forEach(function (menuItem) {
    drinksContainer.innerHTML += `
        <div class="item col-11 col-sm-9 col-md-6 col-lg-6 mx-auto row">
            <div class="frame col-5 col-lg-3">
                <div class="image">
                    <img src="./images/${menuItem.images}" alt="BreakFast">
                    <div class="layout">
                        <i class="fa-regular fa-square-plus"></i>
                    </div>
                </div>
            </div>
            <div class="text col-7 col-lg-9">
                <div class="header flex-column flex-sm-row">
                    <h5 class="main-color mb-0">${menuItem.name}</h5>
                    <span class="d-none d-sm-block my-auto"></span>
                    <h5 class="main-color mb-0">$${menuItem.price}</h5>
                </div>
                <div class="body">
                    <p>${menuItem.miniDescription}</p>
                </div>
            </div>
        </div>
    `
});

// * Menu Buttons
menuButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        let currentButton = document.querySelector("#Menu .buttons button.active"),
            currentEle = document.querySelector(`.main-menu.active`),
            targetEleId = button.getAttribute("data-target"),

            targetEle = document.querySelector(`.main-menu[id='${targetEleId}']`);

        if (currentEle != targetEle) {
            currentEle?.classList.remove("show");
            currentEle.classList.remove("active");
            targetEle.classList.add("active");
            setTimeout(function () {
                targetEle.classList.add("show");
            }, 200);
        }

        currentButton.classList.remove("active");
        button.classList.add("active");
    });
});

// * Navbar Links
updateActive(navbarLinksArr);
updateActive(navbarPopupLinksArr);

window.addEventListener("scroll", function () {
    updateActiveLinks(navLinks, navBar);
    updateActiveLinks(navPopupLinks, navPopup);
});

// * Loading Page
let loading = document.querySelector(".loading"),
    secondText = loading.querySelector(".second");

let letters = secondText.textContent.split("");

secondText.innerHTML = "";

letters.forEach((letter, index) => {
    let span = document.createElement("span");

    span.textContent = letter;
    span.style.setProperty("--i", index);

    secondText.append(span);
});

window.addEventListener("DOMContentLoaded" , function(){
    loading.classList.add("hide");
    setTimeout(function(){
        loading.classList.add("d-none");
    } , 500);
});
