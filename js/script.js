let events = document.querySelectorAll(".event");

let previewList = document.querySelectorAll(".preview-list a");
let mainPhoto = document.querySelector(".active-img");

for(let event of events){
    let moreButton = event.querySelector(".more");
    moreButton.onclick = function() {
        event.classList.remove("short");
    }
}

for (let previewPhoto of previewList) {
    previewPhoto.onclick = function(evt) {
        evt.preventDefault();

        mainPhoto.src = previewPhoto.href;
        let activeItem = document.querySelector(".active-item");
        activeItem.classList.remove("active-item");
        previewPhoto.classList.add("active-item");
    }
}
