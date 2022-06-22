"use strict";

import {mostraDatos} from "./mostrarDatosHtml.js"

const urlPrecioLuz =
  "https://api.allorigins.win/get?url=https://api.preciodelaluz.org/v1/prices/all?zone=PCB";

const fecha = +new Date();

async function getPrice(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    const precios = [];
    const horas = JSON.parse(data.contents);

    for (const element in horas) {
      precios.push(horas[element].price);
    }
    window.localStorage.setItem("Precios", JSON.stringify(precios));
    return precios;
  } catch (error) {
    console.error("Tenemos un error", error.message);
    return []
  }
}

function max(prices) {
  let max = 0;
  let index = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] > max) {
      max = prices[i];
    }
  }
  index = prices.indexOf(max);
  let horaMaximoValor = [max, index];
  window.localStorage.setItem("maximoValor", JSON.stringify(horaMaximoValor));
  return horaMaximoValor;
}

function min(prices) {
  let min = prices[0];
  let index = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    }
  }
  index = prices.indexOf(min);
  let horaMinimoValor = [min, index];
  window.localStorage.setItem("minimoValor", JSON.stringify(horaMinimoValor));
  return horaMinimoValor;
}

async function main(){
  let fechaUltimoAcceso = localStorage.getItem("FechaUltimoAcceso")

  console.log("fechaUltimoAcceso", fechaUltimoAcceso )
  
  if (fechaUltimoAcceso !== null){
    fechaUltimoAcceso = +fechaUltimoAcceso
  }

  if(fechaUltimoAcceso === null || fechaUltimoAcceso + 300000 < fecha){
    window.localStorage.setItem("FechaUltimoAcceso", JSON.stringify(fecha));
    let precios = await getPrice(urlPrecioLuz);
    console.log("precios>>>", precios)
    max(precios);
    min(precios);
  }
  
  mostraDatos();
}

main()
