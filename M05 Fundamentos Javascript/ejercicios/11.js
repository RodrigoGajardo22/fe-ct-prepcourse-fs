function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:

  var fechaHoy = new Date();
  var edad = fechaHoy.getFullYear() - fechaNacimiento.getFullYear();

  if(edad<18 )
    return false;
  if (edad === 18 & fechaHoy.getMonth()<= fechaNacimiento.getMonth() & fechaHoy.getDate()<fechaNacimiento.getDate())
    return false;
  return true;
} 

module.exports = esMayorDeEdad;