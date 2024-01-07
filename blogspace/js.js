let postArray = [

]
const titleinput = document.getElementById('post-title')
const titlebody = document.getElementById('post-body')
const form = document.getElementById('new-post')
function renderPost() {
    let html = " "
    for (let post of postArray) {
        html += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <hr />
        `
    }
    document.getElementById('blog-list').innerHTML = html
}

fetch ('https://apis.scrimba.com/jsonplaceholder/posts', {method: "GET"})
    .then (Response => Response.json())
    .then (data => {
        postArray = data.slice(0, 5)
        renderPost()
    })
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const postTitle = titleinput.value
    const postBody = titlebody.value
    const data = {
        title: postTitle,
        body:  postBody
    }
    fetch ('https://apis.scrimba.com/jsonplaceholder/posts',
        {
            method : "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }

    )
    .then(res => res.json())
    .then(post => {
        // document.getElementById('blog-list').innerHTML = `
        // <h3>${post.title}</h3>
        // <p>${post.body}</p>
        // <hr />
        // ${document.getElementById('blog-list').innerHTML}
        // `
        postArray.unshift(post)
        renderPost()
        titleinput.value = ""
        titlebody.value = ""
        form.reset
    })
})






