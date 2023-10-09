// document.getElementById("count-el").innerText = 5
let saveEL= document.getElementById("save-ent");
let countEl = document.getElementById("count-el");
let count = 0;
function increment() {
    count += 1;
    countEl.innerText = count;
}
function save() {
    let countStr= " " + count + " - ";
    saveEL.textContent += countStr;
}
