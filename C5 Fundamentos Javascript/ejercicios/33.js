function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  /*en el bucle for me aseguro que sea mayor que uno y menor que numero para que pare 
  el bucle luego se agrega una condicional en la cual verificamos que numero sea divisible
  por i y que de 0 de resultado de esta manera le podemos agregar el retorno false para 
  saber que todo numero primo que no tenga de resto 1 no es un numero primo ya que tanpoco
  es divisible por si mismo*/
  if (numero <= 1) {
    return false;
  }
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

module.exports = esNumeroPrimo;
