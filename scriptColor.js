
var buttonChangeStyle = document.getElementById("secretButton");

buttonChangeStyle.addEventListener("click", function(){

    var baliseLink = document.getElementById("linkcss");
    var etat = baliseLink.href.endsWith("style.css");
 
    if (etat == true) {
        baliseLink.setAttribute("href", "style2.css");
    } else {
        baliseLink.setAttribute("href", "style.css");
    }

    

})
