let emojiCont = document.getElementById("emoji-cont");
const emojiInput = document.getElementById("emoji-input");
let btnUnshift = document.getElementById("unshift-btn");
let btnPush = document.getElementById("push-btn");
let popBtn = document.getElementById("pop-btn");
let shiftBtn = document.getElementById("shift-btn");

const myEmoji = [];

function render() {
    emojiCont.innerHTML = "";
for (let i = 0; i < myEmoji.length; i++) {
    const emoji = document.createElement('span');
    emoji.textContent = myEmoji[i];
    emojiCont.append(emoji);
    console.log(myEmoji[i])
}
}

btnPush.addEventListener("click", function() {
    if (emojiInput.value){
        myEmoji.push(emojiInput.value);
        emojiInput.value = "";
        render()
    }
})

btnUnshift.addEventListener("click", function() {
    if (emojiInput.value){
        myEmoji.unshift(emojiInput.value);
        emojiInput.value = "";
        render()
    }
})
popBtn.addEventListener("click", function (){
    myEmoji.pop()
    render()
})
shiftBtn.addEventListener("click", function () {
    myEmoji.shift()
    render()
})