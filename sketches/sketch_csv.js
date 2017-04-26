var data;

function preload() {
   data = loadTable("https://raw.githubusercontent.com/profesorfaco/dno037-2017-07/gh-pages/data/titanic_passengers.csv", "true", "header");
}

function setup() {
   canvas = createCanvas(windowWidth, windowHeight * 0.8);
   canvas.parent('top');
   canvas.position(0, 0);
   canvas.style('z-index', '-1');
   noLoop();
   noStroke(); //es para que los circulos aparezcan si borde negro, que es lo que sale por defecto//
}

function windowResized() {
   resizeCanvas(windowWidth, windowHeight * 0.8);
}

function draw() {
   background(237, 34, 93);
   var total_primera = 0;
   var total_segunda = 0;
   var total_tercera = 0;
   var muertos_primera = 0;
   var muertos_segunda = 0;
   var muertos_tercera = 0;
   //con esto cuento el total de pasajeros por clase
   for (var a = 0; a < data.getRowCount(); a++) {
      if (data.get(a, 2) == 1) {
         total_primera++
      } else if (data.get(a, 2) == 2) {
         total_segunda++
      } else if (data.get(a, 2) == 3) {
         total_tercera++
      }
   }

   //con esto, que incluye una doble condición de muerto y clase, cuento los fallecidos por clase
   for (var b = 0; b < data.getRowCount(); b++) {
      if ((data.get(b, 1) == 0) && (data.get(b, 2) == 3)) {
         muertos_tercera++
      } else if ((data.get(b, 1) == 0) && (data.get(b, 2) == 2)) {
         muertos_segunda++
      } else if ((data.get(b, 1) == 0) && (data.get(b, 2) == 1)) {
         muertos_primera++
      }
}
//aaaa//
var muerto = 0;
var muerta = 0;
for (var c = 0; c < data.getRowCount (); c++) {
  if ((data.get(c, 1) == 0) && (data.get(c, 5) == "male")) {
    muerto++
  } else if ((data.get(c, 1) == 0) && (data.get(c, 5) == "female")) {muerta++
  }
}

var muertas_primera = 0
var muertas_segunda = 0
var muertas_tercera = 0
for (var d = 0; d < data.getRowCount(); d++) {
   if ((data.get(d, 1) == 0) && (data.get(d, 2) == 3) && (data.get(d, 5) == "female")) {
      muertas_tercera++
   } else if ((data.get(d, 1) == 0) && (data.get(d, 2) == 2) && (data.get(d, 5) == "female")) {
      muertas_segunda++
   } else if ((data.get(d, 1) == 0) && (data.get(d, 2) == 1) && (data.get(d, 5) == "female")) {
      muertas_primera++
   }
}

var muertos1_primera = 0
var muertos1_segunda = 0
var muertos1_tercera = 0
for (var e = 0; e < data.getRowCount(); e++) {
   if ((data.get(e, 1) == 0) && (data.get(e, 2) == 3) && (data.get(e, 5) == "male")) {
      muertos1_tercera++
   } else if ((data.get(e, 1) == 0) && (data.get(e, 2) == 2) && (data.get(e, 5) == "male")) {
      muertos1_segunda++
   } else if ((data.get(e, 1) == 0) && (data.get(e, 2) == 1) && (data.get(e, 5) == "male")) {
      muertos1_primera++
   }
}



   //todo esto se imprime en su consola de JavaScript
   print("En el Titanic viajaban " + data.getRowCount() + " pasajeros.")
   print("Eran " + total_primera + " pasajeros los que viajaban en la primera clase, de ellos fallecieron " + muertos_primera + ".");
   print("Eran " + total_segunda + " pasajeros los que viajaban en la segunda clase, de ellos fallecieron " + muertos_segunda + ".");
   print("Eran " + total_tercera + " pasajeros los que viajaban en la tercera clase, de ellos fallecieron " + muertos_tercera + ".");

   print("Murieron "+muerto+" hombres");
   print("Murieron "+muerta+" mujeres");

   //aaaaa//
   print("Eran " + muertas_primera + " mujeres las que fallecieron en primera clase.");
   print("Eran " + muertas_segunda + " mujeres las que fallecieron en segunda clase.");
   print("Eran " + muertas_tercera + " mujeres las que fallecieron en tercera clase.");
   //hombres//
   print("Eran " + muertos1_primera + " hombres los que fallecieron en primera clase.");
   print("Eran " + muertos1_segunda + " hombres los que fallecieron en segunda clase.");
   print("Eran " + muertos1_tercera + " hombres los que fallecieron en tercera clase.");
   //esto dibuja los círculos blancos, del total de pasajeros.
   fill(255);
   ellipse((width / 4), (height / 2), (total_primera / 3), (total_primera / 3));
   ellipse((width / 4 * 2), (height / 2), (total_segunda / 3), (total_segunda / 3));
   ellipse((width / 4 * 3), (height / 2), (total_tercera / 3), (total_tercera / 3));
   //estos dibuja los círculos negros, de total de facellecidos.
   fill(0);
   ellipse((width / 4), (height / 2), (muertos_primera / 3), (muertos_primera / 3));
   ellipse((width / 4 * 2), (height / 2), (muertos_segunda / 3), (muertos_segunda / 3));
   ellipse((width / 4 * 3), (height / 2), (muertos_tercera / 3), (muertos_tercera / 3));
}
