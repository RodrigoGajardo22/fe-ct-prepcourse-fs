function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:

  for (var i = 1; i < numero; i++) {
    if (Math.pow(2, i) == numero) return true;
    if (Math.pow(2, i) > numero) return false;
  }
}

module.exports = esPotenciaDeDos;
