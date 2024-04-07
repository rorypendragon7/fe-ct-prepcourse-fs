function esPositivo(num) {
  // La función recibe un entero. Devuelve como resultado un string que indica si el número
  // es positivo o negativo.
  // Si el número es positivo ---> "Es positivo".
  // Si el número es negativo ---> "Es negativo".
  // Si el número es 0, devuelve false.
  /* Math.sign ayuda a saber y retornar si un numero es psitivo negativo o de valor cero */
  // Tu código:
  if(num === 0) {
    return false;
  } else if(num > 0) {
    return "Es positivo";
} else if(num < 0) {
    return "Es negativo";
}
}

module.exports = esPositivo;