const http = new XMLHttpRequest();
const url = "localhost:3000";
const mainButton = document.getElementById("mainButton");

http.open("GET", url, true);
http.send();
mainButton.addEventListener("click", ()=>{
    alert("button has been clicked!");
    http.open("POST", url);
    http.send();
});