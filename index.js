const onKlikkHerKeyDown = (e) => {
  if (e) e.preventDefault();
  window.location.href = "https://mills.no/vita-hjertego/";
};
function onSliderInput() {
  const output = document.getElementById("mobilnummer-output");
  const slider = document.getElementById("myRange");

  output.innerHTML = slider.value;
}

// Update the current slider value (each time you drag the slider handle)

document.addEventListener(
  "keydown",
  (e) => {
    // get id of element
    const id = document.activeElement.id;
    if (e.keyCode === 9) {
      if (id === "myRange") {
        e.preventDefault();
        document.getElementById("fname").focus();
      }
    }
  },
  false
);

const onSendClick = () => {
  document.getElementById("error-warning").innerText = "Feil!";
  document.getElementById("email").classList.add("error");
};
