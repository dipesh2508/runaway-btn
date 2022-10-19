const button = document.getElementById("runaway");

button.addEventListener("mouseover", (event) =>{
    button.style.top = Math.round(Math.random() * 350) - 50 + 'px';
    button.style.left = Math.round(Math.random() * 250) - 100 + 'px';
})