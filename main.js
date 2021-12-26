const error = document.querySelector("small");
const emailBtn = document.querySelector(".btn");
const emailInput = document.querySelector("input");

emailBtn.addEventListener("click", (e) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)) {
    error.textContent = "";
    return true;
  } else {
    error.textContent = "Oops! Please enter a valid email address.";
  }
});
