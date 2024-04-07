function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Si el usuario ingresa un string de más de un caracter, debes retornar el mensaje: "Dato incorrecto".
  // Si no es vocal, tambien debe retornar "Dato incorrecto".
  // Tu código:
  /* en esta ocasión el string tiene que ser de un solo caracter por lo que se le aplica la propíedad .length y una ccomparacion de tipo de datos y valora !== 1 para saber si es de un solo caracter */
  /*aparte se agrego un array con las vocales lueego se aplica el metodo .includes para saber si es vocal dentro de este mismo se agrego el .toLowerCase para que no distinga entre mayúsculas y minúsculas */
  if (letra.length !== 1) {
    return "Dato incorrecto";
  }
  let vocales = ["a", "e", "i", "o", "u"];
  if (vocales.includes(letra.toLowerCase())) {
    return "Es vocal";
  } else {
    return "Dato incorrecto";
  }
}

module.exports = esVocal;
