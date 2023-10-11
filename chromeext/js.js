let myleads = [];
const inputEl = document.getElementById("input-el");
const btn = document.querySelector("#input-btn");
const ulEl = document.getElementById ("ul-el");
const delBtn = document.getElementById("del-btn");
const tabBtn = document.getElementById("save-btn")
const getleads = JSON.parse(localStorage.getItem("myleads"));
if (getleads) {
    myleads = getleads;
    renderlist(myleads)
}
function renderlist(leads) {
    let listitem = "";
    for (let i =0; i < leads.length; i++){
        // listitem += "<li> <a target ='_blank' href='" + myleads[i] +"'>" + myleads[i] +"</a></li>"
        // used templates litterals instead
        listitem += `
        <li> 
        <a target='_blank' href='${leads[i]}'>
        ${leads[i]}
        </a>
        <li>
        `
    }
    ulEl.innerHTML = listitem
}
tabBtn.addEventListener("click", function() {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, 
    function (tabs) {
        myleads.push(tabs[0].url)
        localStorage.setItem("myleads", JSON.stringify(myleads));
        renderlist(myleads)
    })
    // console.log(tabs[0].url);
})
delBtn.addEventListener("click", function(){
    localStorage.clear();
    myleads = [];
    renderlist(myleads);
})
btn.addEventListener ("click", function () {
    myleads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myleads", JSON.stringify(myleads));
    renderlist(myleads)
})


