/* Objelctive 1 */
let $button = $("<button>Click Me!</button>");
$button.appendTo("body");
$button.click(function (){
    alert("Hi! My Name is Juwan!")
})

/* Objective 2 */
let $button = $("button");
$button.click( function() {
    let message = $("textbox").val();
    alert(message);
})
/* Objective 3 */
let $div = $("#div");
$div.hover(function(){
    $div.style.backgrounColor = "red";},
    function() {
        $div.style.backgrounColor = "black";
    }
,);

/* Objective 4 */
let $p = $("#p");
$p.click(function() {
    $p.style.color = "red";
})


/* Objective 5 */
let $button = $("button");
let $div = $("#div");
$button.click(function() {
    let $span = $("<span>Juwan</span");
    $($span).appendTo($div);
})

/* Objective 5 */
let $friends= ["Charlee", "Grayson", "Devan", "John", "Joe", "Andre", "Grace", "Elijah", "Tranice", "Jackie"];
let $button = $("#bbutton");
let $ul = $("#ul");
$($button).click(function() {
    for(let i = 0; i < $friends.length; i++){
        let $li = $("<li>" + ($friends[i]) + ",/li>");
        $($li).appendTo($ul);
        
    }
})


