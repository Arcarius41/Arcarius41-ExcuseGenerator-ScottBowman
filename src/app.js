/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  // eslint-disable-next-line no-console
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = ["jogger", "comedian", "alien", "walrus", "scientist","super villian"];
  let action = ["bit my", "threw my", "ate my", "cloned my", "took my", "exploded my"];
  let thing = ["foot", "homework", "phone", "car", "glider"];
  let where = ["in my house", "in the lab", "in my drivway", "at the park", "in Atlantis"];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let thingIndex = Math.floor(Math.random() * thing.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[pronounIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    thing[thingIndex] +
    " " +
    where[whereIndex]
  );
};
