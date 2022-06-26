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
        console.log(op);
        document.getElementById("img").src = src;
        break;
      case "Nev":
        console.log(op);
        document.getElementById("img").src = src;
        break;
      case "Lav":
        console.log(op);
        document.getElementById("img").src = src;
        break;
      case "Vit":
        console.log(op);
        document.getElementById("img").src = src;
        break;
      case "Vaj":
        console.log(op);
        document.getElementById("img").src = src;
        break;
      case "Caf":
        console.log(op);
        document.getElementById("img").src = src;
        break;
      case "TV":
        console.log(op);
        document.getElementById("img").src = src;
        break;
      case "PC":
        console.log(op);
        document.getElementById("img").src = src;
        break;
      case "SisSon":
        console.log(op);
        document.getElementById("img").src = src;
        break;
      case "Carg":
        console.log(op);
        document.getElementById("img").src = src;
        break;
      case "Asp":
        console.log(op);
        document.getElementById("img").src = src;
        break;
      case "Pla":
        console.log(op);
        document.getElementById("img").src = src;
        break;
      case "Otr":
        console.log(op);
        document.getElementById("img").src = src;
        break;
    }
  });
}

export {selBoxGestion};
