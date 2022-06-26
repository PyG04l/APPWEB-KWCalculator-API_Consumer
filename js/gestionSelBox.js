"use strict";

function selBoxGestion() {
  let electrodomesticos = [];
  const selectElement = document.querySelector("#selBox");

  let form = document.createElement("form");
  form.action = selectElement.addEventListener("change", (evento) => {  
    const op = evento.target.value;
    const src = `./img/${op}.png`;
    switch (op) {
      case "":
        document.getElementById("img").src = src;
        break;
      case "Nev":
        document.getElementById("img").src = src;
        break;
      case "Lav":
        document.getElementById("img").src = src;
        break;
      case "Vit":
        document.getElementById("img").src = src;
        break;
      case "Vaj":
        document.getElementById("img").src = src;
        break;
      case "Caf":
        document.getElementById("img").src = src;
        break;
      case "TV":
        document.getElementById("img").src = src;
        break;
      case "PC":
        document.getElementById("img").src = src;
        break;
      case "SisSon":
        document.getElementById("img").src = src;
        break;
      case "Carg":
        document.getElementById("img").src = src;
        break;
      case "Asp":
        document.getElementById("img").src = src;
        break;
      case "Pla":
        document.getElementById("img").src = src;
        break;
      case "Otr":
        document.getElementById("img").src = src;
        break;
    }
  });
}

export {selBoxGestion};
