/* Objelctive 1 */
addEventListener ("DOMContentLoaded", button);
function button() {
    let button = document.createElement("button");
    let buttonText = document.createTextNode("Click Me!");
    button.appendChild(buttonText);
    document.body.appendChild(button);
    addEventListener("click", click);
    function click() {
        alert("Hi! This is Juwan, Again.")
    }

/* Objective 2 */
let button = document.getElementById("button");
button.addEventListener("click", click);
function click() {
    let message = document.getElementById("textbox").value;
    alert(message)
}
/* Objective 3 */
let div = document.getElementById("div");
div.addEventListener("mouseenter", function() {
    div.style.backgroundColor = "black";
})

/* Objective 4 */
let p = document.createElement("p");
p.addEventListener("click", function(){
p.style.color = "red";
})


/* Objective 5 */
let button = document.getElementById("button");
let div = document.getElementById('div');
button.addEventListener("click", function() {
    let span = document.createElement("span");
    div.appendChild(span);
    let text = document.createTextNode("Juwan");
    span.appendChild(text);
})   
}
/* Objective 5 */
let friends= ["Charlee", "Grayson", "Devan", "John", "Joe", "Andre", "Grace", "Elijah", "Tranice", "Jackie"];
let button = document.getElementById("button");
let ul = document.getElementById("ul");
button.addEventListener("click", function (){
    for (let i = 0; i < friends.length; i++) {
        let li = document.createElement("li");
        let name = document.createTextNode(friends[i]);
        li.appendChild(name);
        ul.appendChild(li);

}
}
,)
