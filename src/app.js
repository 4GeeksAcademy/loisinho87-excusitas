/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("La página se ha cargado correctamente.");
  let Quien = [
    "O can",
    "Miña avoa",
    "A miña tortuga",
    "O meu sapoconcho",
    "O meu neto"
  ];
  let Accion = ["comeuse", "aplastouse", "roubou", "rompeu", "ensuciou"];
  let Que = [
    "a miña tarefa",
    "o meu almuerzo",
    "o meu mobil",
    "o meu portatil",
    "a cociña"
  ];
  let Cuando = [
    "antes das clases",
    "xusto cando terminei",
    "mentras almorzaba",
    "mentras durmía"
  ];

  function generarExcusita() {
    let randomQuien = Quien[Math.floor(Math.random() * Quien.length)];
    let randomAccion = Accion[Math.floor(Math.random() * Accion.length)];
    let randomQue = Que[Math.floor(Math.random() * Que.length)];
    let randomCuando = Cuando[Math.floor(Math.random() * Cuando.length)];
    return `${randomQuien} ${randomAccion} ${randomQue} ${randomCuando}`;
  }
  console.log(generarExcusita());

  let excusita = document.querySelector("#excusita");
  let novaExcusa = generarExcusita();
  excusita.innerText = novaExcusa;
};
