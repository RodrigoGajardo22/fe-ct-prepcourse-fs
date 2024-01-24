function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:

  var num1, num2;
  var arreglo = array;

  for (var i = array.length; i > 0; i--) {
    for (j = 0; j < i; j++) {
      if (j + 1 < i) {
        num1 = arreglo[j];
        num2 = arreglo[j + 1];
        invertir(arreglo, num1, num2, j);
      }
    }
  }

  return arreglo;
}

function invertir(arr, x, y, pos) {
  if (x > y) {
    arr[pos] = y;
    arr[pos + 1] = x;
  }
}

module.exports = ordenarArray;
