// get stylelib elements
const input = document.getElementById("input");
const radio = document.getElementById("radio");
const button = document.getElementById("button");
const help = document.getElementById("help");
const main = document.querySelector("main");
const huidivider = document.getElementById("huidivider");
const hukdivider = document.getElementById("hukdivider");
const hukselect = document.getElementById("hukselect");

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
  long: "<h1>Begriffe mit mindestens drei Zeichen sind zum Beispiel:</h1><ul><li>Wolf</li><li>Lamm</li><li>Hurz</li></ul><p>Für Risiken und Nebenwirkungen fragen Sie Ihren Arzt oder Apotheker.</p>",
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

// huidivider.addEventListener("huiClick", () => {
//   console.log("huidivider clicked!!!");
// });
// console.log(huidivider);

// hukdivider.addEventListener("clicked", () => {
//   console.log("hukdivider clicked!!!");
// });

hukselect.withFilter = true;
hukselect.options = [
  { label: "Alfa-Romeo", value: 1 },
  { label: "Audi", value: 2 },
  { label: "BMW", value: 3 },
  { label: "Cadillac", value: 4 },
  { label: "Chevrolet", value: 5 },
  { label: "Citroen", value: 6 },
  { label: "Fiat", value: 7 },
  { label: "Ford", value: 8 },
  { label: "Honda", value: 9 },
  { label: "Hyundai", value: 10 },
  { label: "Jaguar", value: 11 },
  { label: "Kia", value: 12 },
  { label: "Lancia", value: 13 },
  { label: "Land Rover", value: 14 },
  { label: "Lexus", value: 15 },
  { label: "Mazda", value: 16 },
  { label: "Mercedes-Benz", value: 17 },
  { label: "Mini", value: 18 },
  { label: "Mitsubishi", value: 19 },
  { label: "Nissan", value: 20 },
  { label: "Opel", value: 21 },
];
