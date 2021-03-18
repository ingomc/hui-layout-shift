// get stylelib elements
const input = document.getElementById("input");
const radio = document.getElementById("radio");
const button = document.getElementById("button");
const help = document.getElementById("help");
const main = document.querySelector("main");
const huidivider = document.getElementById("huidivider");
const hukdivider = document.getElementById("hukdivider");

// set radio select options
radio.options = [
  {
    label: "Ja",
    value: "ja",
  },
  {
    label: "Nein",
    value: "nein",
  },
];

// set text and overlay for help-button
help.helptext = {
  id: "1337",
  short: "Es gibt viele Worte mehr als 3 Zeichen.",
  long:
    "<h1>Begriffe mit mindestens drei Zeichen sind zum Beispiel:</h1><ul><li>Wolf</li><li>Lamm</li><li>Hurz</li></ul><p>Für Risiken und Nebenwirkungen fragen Sie Ihren Arzt oder Apotheker.</p>",
};

// input validation logic
const validateInput = () => {
  if (!!input.value && input.value.length >= 3) {
    input.validity = "valid";
    input.errorMessage = "";
  } else {
    input.validity = "invalid";
    input.errorMessage = "Ihr Begriff muss mindestens 3 Zeichen lang sein.";
  }
  validateForm();
};

// radio validation logic
const validateRadio = () => {
  if (!!radio.value && radio.value === "ja") {
    radio.validity = "valid";
    radio.errorMessage = "";
  } else {
    radio.validity = "invalid";
    radio.errorMessage = "Bitte empfehlen Sie uns weiter!";
  }
  validateForm();
};

// form validation logic
const validateForm = () => {
  if (radio.validity === "valid" && input.validity === "valid") {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
};

// form finishing move
const atomicLegDrop = () => {
  const message = document.createElement("huk-message");
  message.message = "Erfolgreich abgeschlossen!";
  main.insertBefore(message, main.firstChild);

  setTimeout(() => {
    location.reload();
  }, 1000);
};

// add event listeners for form validation
radio.addEventListener("valueChanged", () => {
  validateRadio();
});
input.addEventListener("valueChanged", () => {
  validateInput();
});
button.addEventListener("clicked", () => {
  button.loading = true;
  atomicLegDrop();
});


huidivider.addEventListener('huiClick', () => {
  console.log('huidivider clicked!!!');
});
console.log(huidivider);

hukdivider.addEventListener('clicked', () => {
  console.log('hukdivider clicked!!!');
});