const $textarea = document.querySelector(".form-textarea");

const $button_encriptar = document.getElementById("encriptar");

const $button_desencriptar = document.getElementById("desencriptar");

const $texto_desencriptado = document.querySelector(".texto-desencriptado");

const $button_copiar = document.getElementById("copiar");

const $card_whit_message = document.querySelector(".with-message");

const $card_no_message = document.querySelector(".no-message");

$button_encriptar.addEventListener("click", (event) => {
  event.preventDefault();
  let base = $textarea.value;
  let texto = base.toLowerCase().trim();
  let texto_separado = texto.split("");
  let texto_nuevo = texto_separado.map(encriptador);
  let texto_ultimo = texto_nuevo.join("");
  $card_no_message.style.display = "none";
  $card_whit_message.style.display = "flex";
  $texto_desencriptado.value = texto_ultimo;
});

$button_desencriptar.addEventListener("click", (event) => {
  event.preventDefault();
  let base = $textarea.value;
  let texto = base.toLowerCase().trim();
  let texto_modificado = texto.split(" ");
  let texto_nuevo = texto_modificado.map(desencriptador);
  let texto_ultimo = texto_nuevo.join(" ");
  $card_no_message.style.display = "none";
  $card_whit_message.style.display = "flex";
  $texto_desencriptado.value = texto_ultimo;
});

$button_copiar.addEventListener("click", (e) => {
  e = $texto_desencriptado.value;
  $textarea.value = e;
});

function encriptador(e) {
  if (e === "e") {
    return (e = "enter");
  } else if (e === "i") {
    return (e = "imes");
  } else if (e === "a") {
    return (e = "ai");
  } else if (e === "o") {
    return (e = "ober");
  } else if (e === "u") {
    return (e = "ufat");
  } else {
    return (e = e);
  }
}

function desencriptador(e) {
  if (
    e.includes("enter") === true ||
    e.includes("imes") === true ||
    e.includes("ai") === true ||
    e.includes("ober") === true ||
    e.includes("ufat") === true
  ) {
    let letra_e = e.replaceAll("enter", "e");
    let letra_i = letra_e.replaceAll("imes", "i");
    let letra_a = letra_i.replaceAll("ai", "a");
    let letra_o = letra_a.replaceAll("ober", "o");
    let letra_u = letra_o.replaceAll("ufat", "u");
    return letra_u;
  } else {
    return (e = e);
  }
}
