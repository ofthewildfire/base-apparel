import '@fontsource-variable/josefin-sans';
import "./modernreset.css";
import './style.css';
// Supports weights 100-700
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'

const emailInput = document.querySelector("input[type='email']")
const btn = document.querySelector("")
if (!emailInput.value) {
    console.log("Invalid")
} else {
    console.log("Success!");
}