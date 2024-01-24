function diasEnMes(mes) {
  // La función recibe un mes(número) por argumento.
  // Determine cúantos días tiene el mes correspondiente a ese número.
  // PISTA: Usa un bucle do-while para validar que el mes ingresado sea válido.
  // Tu código:  
    if (mes < 1 || mes > 12) {
      return 0;
    }
  
    var anio = new Date();
    var ultimoDiaDelMes = new Date(anio.getFullYear(), mes, 0).getDate();
  
    return ultimoDiaDelMes;
  
}
  

module.exports = diasEnMes;
