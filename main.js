import '@fontsource-variable/josefin-sans';
import './style.css';
// Supports weights 100-700
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'

const emailRegex = `^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$`

const emailInput = document.getElementById("email")
const submitBtn = document.querySelector(".form-btn")
const errorIcon = document.querySelector(".form-error")
const errorText = document.querySelector(".form-error-text")

submitBtn.addEventListener("click", validate)

function validate(e){
    e.preventDefault()
    const email = document.getElementById('email').value
    const regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    if(regex.test(email)) {
      console.log("Valid email!")
      errorIcon.classList.add("hidden")
      errorText.classList.add("hidden")
      emailInput.value = '';
    } else {
      console.log("Invalid email!")
        errorIcon.classList.remove("hidden")
        errorText.classList.remove("hidden")
    }
  }

