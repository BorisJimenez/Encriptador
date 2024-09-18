const $textarea = document.querySelector(".form-textarea").value;

const $button_encriptar = document.querySelector("button");

console.log($textarea);
console.log($button_encriptar);

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
const encriptar = (text) => {
  let texto = text.toLowerCase().trim();
  let texto_separado = texto.split("");
  let texto_nuevo = texto_separado.map(encriptador);
  let texto_ultimo = texto_nuevo.join("");
  return texto_ultimo;
};

console.log(encriptar("hola como esTas "));

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
    let letra_u = letra_o.replaceAll("utaf", "u");
    return letra_u;
  }
}
const desencriptar = (text) => {
  let texto = text.toLowerCase().trim();
  let texto_modificado = texto.split(" ");
  let texto_nuevo = texto_modificado.map(desencriptador);
  let texto_ultimo = texto_nuevo.join(" ");

  return texto_ultimo;
};

console.log(desencriptar("hoberlai cobermober enterstais"));
