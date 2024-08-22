/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //creando los arrays

  let culpable = [
    "Un ciclista",
    "Un perro",
    "Un vendedor",
    "Una viejita",
    "Un policía"
  ];
  let hizo = ["se cruzó", "me detuvo", "se cayó", "me retrasó", "me paró"];
  let objeto = [
    "el auto",
    "mi ruta",
    "mi camino",
    "mi bicicleta",
    "el traslado"
  ];
  let cuando = [
    "hace un momento",
    "hace unos minutos",
    "hace un rato",
    "en un instante",
    "hace un par de horas"
  ];
  //creando los aleatorios

  let rdm1 = Math.floor(Math.random() * culpable.length);
  let rdm2 = Math.floor(Math.random() * hizo.length);
  let rdm3 = Math.floor(Math.random() * objeto.length);
  let rdm4 = Math.floor(Math.random() * cuando.length);

  //generando la excusa

  document.querySelector("#excuse").innerHTML =
    culpable[rdm1] + " " + hizo[rdm2] + " " + objeto[rdm3] + " " + cuando[rdm4];
};
