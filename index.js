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

const desencriptar = (text) => {
  let texto = text.toLowerCase().trim();
  let texto_modificado = texto.match("enter");
  return texto_modificado;
};

console.log(desencriptar("hoberlai cobermober enterstais"));
