"use strict";

function selBoxGestion() {
  const selectElement = document.querySelector("#selBox");

  let form = document.createElement("form");
  form.action = selectElement.addEventListener("change", (evento) => {  
    const op = evento.target.value;
    const src = `./img/${op}.png`;    
    document.getElementById("img").src = src;
  });
}

export {selBoxGestion};
