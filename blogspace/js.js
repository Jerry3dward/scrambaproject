fetch ('https://apis.scrimba.com/jsonplaceholder/posts', {method: "GET"})
    .then (Response => Response.json())
    .then (data => {
        const postarr = data.slice(0, 5)
        let html = " "
        for (let post of postarr) {
            html += `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr />
            `
        }
        document.getElementById('blog-list').innerHTML = html
        console.log(html)
    })
  