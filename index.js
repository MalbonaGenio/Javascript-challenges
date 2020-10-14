
document.getElementById("searchInput").addEventListener("keyup", function(event) {
    let searchQuery = event.target.value.toLowerCase()
    let allNamesDOMCollection = document.getElementsByClassName("name")
    for (let i = 0; i < allNamesDOMCollection.length; i++){
        const currentName = allNamesDOMCollection[i].textContent.toLowerCase()
        console.log(currentName)
    }
})