/*
Micro desafíos - Paso I
Levantar un servidor web con Express que responda al puerto 3030.
*/

const path = require("path");

const express = require("express");
const app = express();

// para usar middlewares - los archivos public esten disponibles en todas lkas rutas
// cual es la ruta donde tenemos los archivos estaticos app.use(express.stati

// const pathToPublic = path.join(__dirname, '../public');
// const static = express.static(pathToPublic); // requiere el path a public, donde estan los archivos estaticos
// app.use(static);

app.use(express.static(path.join(__dirname, "../public"))); //es lo mismo que las 3 lineas anteriores

app.listen(3030, () => {
  console.log("Servidor corriendo");
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "views/index.html"));
});
app.get("/lovelace", function (req, res) {
  res.sendFile(path.join(__dirname, "views/lovelace.html"));
});
app.get("/babbage", function (req, res) {
  res.sendFile(path.join(__dirname, "views/babbage.html"));
});
app.get("/hopper", function (req, res) {
  res.sendFile(path.join(__dirname, "views/hopper.html"));
});

/*
Paso II
Estructura de carpetas del proyecto.

(Se crean las carpetas indicadas)
*/

/*
Paso III

1. Ya estamos en condiciones de ubicar nuestros archivos .html en su lugar.
Son nuestras vistas. ¿Dónde los ubicamos?

2. Ahora, debemos volver a nuestro archivo app.js para introducir el código
necesario para vincular las URLs con los recursos que acabamos de ubicar.
Por ejemplo, debemos lograr que al introducir en el navegador
“localhost:3030/home” se dé acceso, o se devuelva, al archivo index.html. Lo
mismo deberá ocurrir con todos nuestros recursos conforme lo detallado en
el “objetivo” de esta ejercitación.
Nota : Se recomienda el uso de ‘path’ para el armado de las rutas.
*/
