let myleads = [];
const inputEl = document.getElementById("input-el");
const btn = document.querySelector("#input-btn");
const ulEl = document.getElementById ("ul-el")

btn.addEventListener ("click", function () {
    myleads.push(inputEl.value);
    renderlist()
    inputEl.value = "";
})
function renderlist() {
    let listitem = ""
    for (let i =0; i < myleads.length; i++){
        // listitem += "<li> <a target ='_blank' href='" + myleads[i] +"'>" + myleads[i] +"</a></li>"
        listitem += `
        <li> 
        <a target='_blank' href='${myleads[i]}'>
            ${myleads[i]}
        </a>
        <li>
        `
        console.log(listitem)
    }
    ulEl.innerHTML = listitem
}
