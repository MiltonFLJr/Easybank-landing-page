

function hidemodal(){

var modal = document.getElementById("modal");
var closeicon = document.getElementById("close");
modal.style.display="none";
closeicon.style.display="none";

}

function openmodal(){
    var modal = document.getElementById("modal");
    modal.style.display="block";
    var openicon = document.getElementById("open");
    openicon.style.display="none";
    var closeicon = document.getElementById("close");
    closeicon.style.display="block";
}

function closemodal(){
    var modal = document.getElementById("modal");
    modal.style.display="none";
    var close = document.getElementById("close");
    close.style.display="none";
    var open = document.getElementById("open");
    open.style.display="block";
}
