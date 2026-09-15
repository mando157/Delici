let
    // ^ Header Variables
    // *Buttons
    nextBtn = document.querySelector(".next"),
    prevBtn = document.querySelector(".prev"),

    // * Indicators
    indicators = document.querySelectorAll(".indicators span"),

    // * Navbar
    navBar = document.querySelector(".nav-bar"),
    lastScrollY = window.scrollY,

    // * Popup Element
    popupEle = document.querySelector(".popupEle")
    ;

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
popupEle.addEventListener("click", function (e) {
    e.stopPropagation();
});