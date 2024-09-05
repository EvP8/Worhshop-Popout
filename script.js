const btn = document.querySelector('#btn');
const modalContent = document.querySelector(".modalContent");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

btn.addEventListener("click", openModal);
close.addEventListener("click", closeModal);

function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modalContent.classList.add("slideUP")

    setTimeout(() => {
        modalContent.classList.remove("slideUP");
        modal.style.display = "none";
    }, 500);
}