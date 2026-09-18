//* popup
function openPopup(popupName) {
    let popupEle = document.querySelector(`[data-popup-name="${popupName}"]`)
    popupEle.classList.add("active");
    setTimeout(() => {
        popupEle.classList.add("show");
    }, 1);
};

function closePopup(popupName) {
    let popupEle = document.querySelector(`[data-popup-name="${popupName}"]`)
    popupEle.classList.remove("show");
    setTimeout(() => {
        popupEle.classList.remove("active");
    }, 500);
};

// * Links
function updateActive(linksArr) {
    linksArr.forEach(function (link) {
        link.addEventListener("click", function () {
            let currentLink = link.parentElement.querySelector(".active");
            console.log(link)
            currentLink.classList.remove("active");
            link.classList.add("active");
        })
    });
}

function updateActiveLinks(links, parent) {
    links.forEach(function (link) {
        let currentId = link.getAttribute("href"),
            currentSection = document.querySelector(currentId);

        if (!currentSection) return;

        let sectionTop = currentSection.offsetTop,
            sectionBottom = sectionTop + currentSection.clientHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            parent.querySelector(".links li.active")?.classList.remove("active");
            link.parentElement.classList.add("active");
        }
    });
}