function esPar(num) {
  // Retorna true si "num" es par.
  // De lo contrario, retorna false.
  /* si un numero es divisible por % 2 y no deja resto es par */
  // Tu código:
  if(num % 2 == 0){
    return true;
  } else{
    return false;
  }

}

module.exports = esPar;
