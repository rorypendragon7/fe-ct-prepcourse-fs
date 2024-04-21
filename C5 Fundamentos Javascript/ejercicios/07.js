function esTipoDato(valor) {
  // La función recibe un argumento "valor".
  // Retorna el tipo de dato de este valor.
  // Por ejemplo: "string", "number", "boolean", "object", etc.
  // Tu código:
  /* la razon porque este resultado es correcto es debido a la llamda a "VALOR" es debido a que es una varible y 
  typeof retorna todos los posibles valores de una variable pero en formma de string */
  let esTipoDato = typeof valor;
  return esTipoDato;
}
module.exports = esTipoDato;