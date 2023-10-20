document.getElementById("search-input").addEventListener("keyup", function() {
    let searchquery = event.target.value.toLowerCase();

    let allnames = document.getElementsByClassName("name");
    for (let counter =0; counter < allnames.length; counter++) {
        const currentname = allnames[counter].textContent.toLowerCase();
        
        if (currentname.includes(searchquery)) {
            allnames[counter].style.display = "block";
        }
        else {
            allnames[counter].style.display = "none";
        }
    }
})

