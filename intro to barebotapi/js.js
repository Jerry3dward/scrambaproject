document.getElementById('click').addEventListener('click', function() {
    fetch ('https://apis.scrimba.com/bored/api/activity')  
    // we can also write this in one line as .then (response => response.json())    
    .then(function (response) {
        return response.json()
    })
    .then(data => {
        document.getElementById('activity').textContent = data.activity
        document.getElementById('title').textContent = " Happy bot "
        document.body.classList.add('fun')
    })
})

