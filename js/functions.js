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