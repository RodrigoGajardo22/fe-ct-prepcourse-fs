function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).

  if (a === 0 || b === 0) {
      return 0;
  }

  var aux = 1;
  for (var i = a; i <= b; i++) {   
    aux = aux*i;    
  }

 if (aux==-0)
  return 0;
else return aux;
}


module.exports = productoEntreNúmeros;