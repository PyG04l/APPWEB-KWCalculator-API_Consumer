"use strict";

const mainElement = document.querySelector("#main");

let listaElectrodomesticos = [];

const formElement = document.forms.mother

const storedListaElectrodomesticos = window.localStorage.getItem("listaElectrodomesticos");
console.log(storedListaElectrodomesticos)
if (storedListaElectrodomesticos !== null) {
  listaElectrodomesticos = [...JSON.parse(storedListaElectrodomesticos)]
}

formElement.addEventListener("submit", allInLS )

function addItem() {
  const arrData = [];
  arrData.push(document.getElementById("selBox").value);
  arrData.push(document.getElementById("nombre").value);
  arrData.push(document.getElementById("wats").value);
  return arrData;
}

function allInLS(event) {
  event.preventDefault()
    listaElectrodomesticos.push(addItem());
    window.localStorage.setItem(
      "listaElectrodomesticos",
      JSON.stringify(listaElectrodomesticos)
    );
    drawItem();
    
  } 
  
function drawItem() {
  let cont = 0;
  const fragmentElement = document.createDocumentFragment();
  for(const element of listaElectrodomesticos){
    const sectionElement = document.createElement("section");
    sectionElement.setAttribute('id', cont++);
    const img = document.createElement('img');
    img.setAttribute('src', `/img/${element[0]}.png`);
    
    const pName = document.createElement("p");
    pName.textContent = element[1];
    const pPrecio = document.createElement("p");
    pPrecio.textContent = element[2];
    sectionElement.append(img);
    sectionElement.append(pName);
    sectionElement.append(pPrecio);

    fragmentElement.append(sectionElement);
  }
  mainElement.append(fragmentElement);
}

drawItem();

