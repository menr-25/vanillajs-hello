/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Button } from "bootstrap";

onclick = function() {
  function excuseGenerator() {
    let who = ["The dog", "My grandma", "The mailman", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "my phone", "the car"];
    let when = [
      "before the class",
      "when I was sleeping",
      "while I was exercising",
      "during my lunch",
      "while I was praying"
    ];

    function randomElement(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }

    let excuse = `${randomElement(who)} ${randomElement(
      action
    )} ${randomElement(what)} ${randomElement(when)}`;

    return excuse;
  }

  let paragraph = document.getElementById("excuse");

  paragraph.innerText = excuseGenerator();
};
