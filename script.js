const recoms = document.getElementsByClassName("recom");
const karts = document.getElementsByClassName("kart22");

function recom1 () {
    recoms[1].style["background-color"] = "#4FBFA5";
    recoms[2].style["background-color"] = "#4FBFA5";
    karts[0].style.display = "block";    
    karts[1].style.display = "none";
    karts[2].style.display = "none";      
    return recoms[0].style["background-color"] = "#00868A";
}

function recom2 () {
    recoms[0].style["background-color"] = "#4FBFA5";
    recoms[2].style["background-color"] = "#4FBFA5";
    karts[0].style.display = "none";
    karts[1].style.display = "block"; 
    karts[2].style.display = "none";        
    return recoms[1].style["background-color"] = "#00868A";
}

function recom3 () {
    recoms[0].style["background-color"] = "#4FBFA5";
    recoms[1].style["background-color"] = "#4FBFA5";
    karts[0].style.display = "none";
    karts[1].style.display = "none";
    karts[2].style.display = "block";         
    return recoms[2].style["background-color"] = "#00868A";
}






