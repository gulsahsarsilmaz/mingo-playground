import { checkHighGrades } from "./examples/student-homeworks/high-grades";
import "./style.css";

const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `<h1>Mingo Query Playground</h1>`;

console.log("Running Scripts:");
checkHighGrades();
