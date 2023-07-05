const screen = document.querySelector(".screen p");
const buttons = document.querySelectorAll(".calc-button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.textContent;
    if (screen.textContent === "0") {
      screen.textContent = buttonText;
    } else if (buttonText === "Clear") {
      screen.textContent = "0";
    } else if (buttonText === "=") {
      const expression = screen.textContent;
      const result = eval(expression);
      screen.textContent = result;
    } else {
      screen.textContent += buttonText;
    }
  });
});