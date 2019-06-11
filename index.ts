import { echo } from "./helper";

function sayHi(): void {
    console.log("Hi");
    console.log(echo("bye"));
}

sayHi();
