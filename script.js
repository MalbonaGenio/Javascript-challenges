const overlayDisplay = document.getElementById("overlay")

const openModal = document.getElementById("open-modal")
openModal.addEventListener("click", function(){
    overlayDisplay.style.display = "block"
})

const closeModal = document.getElementById("close-modal")
closeModal.addEventListener("click", function(){
    overlayDisplay.style.display = "none"
})