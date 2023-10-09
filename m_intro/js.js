// declaring saveEl to get id save-ent from html document
let saveEL= document.getElementById("save-ent");
let countEl = document.getElementById("count-el");
let count = 0;
// fucntion for increment button 
function increment() {
    count += 1;
    countEl.innerText = count;
}
// fucntion for save button 
function save() {
    let countStr= " " + count + " - ";
    saveEL.textContent += countStr;
    countEl.innerText = 0;
    count = 0;
}
