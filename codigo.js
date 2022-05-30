(function()
{
  var actualizarHora = function()
  {
    var fecha = new Date(),    //truco de JS: puedes agregar mas variables agragando una coma ","
        horas = fecha.getHours(),
        ampm,
        minutos = fecha.getMinutes(),
        segundos = fecha.getSeconds(),
        diaSemana = fecha.getDay(),
        dia = fecha.getDate(),
        mes = fecha.getMonth(),
        year = fecha.getFullYear();

    var parrafoHoras = document.getElementById("horas"), //Accediendo a <p> y almacenando valor en variables
        parrafoAMPM = document.getElementById("ampm"),
        parrafoMinutos = document.getElementById("minutos"),
        parrafoSegundos = document.getElementById("segundos"),
        parrafoDiaSemana = document.getElementById("diaSemana"),
        parrafoDia = document.getElementById("dia"),
        parrafoMes = document.getElementById("mes"),
        parrafoYear = document.getElementById("year");

    var semana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]
        parrafoDiaSemana.textContent = semana[diaSemana];
        parrafoDia.textContent = dia;

    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    parrafoMes.textContent = meses[mes]
    parrafoYear.textContent = year

    if (horas >= 12)
    {
      horas = horas - 12;
      ampm = "PM";
    } else
    {
      ampm = "AM"
    }
    if (horas == 0)
    {
    horas = 12;
    }
    parrafoHoras.textContent = horas;
    parrafoAMPM.textContent = ampm;
    if (minutos < 10){minutos = "0" + minutos};
    if (segundos < 10){segundos = "0" + segundos};
    parrafoMinutos.textContent = minutos;
    parrafoSegundos.textContent = segundos;
  }

  actualizarHora();
  var intervalo = setInterval(actualizarHora, 1000);
}())
