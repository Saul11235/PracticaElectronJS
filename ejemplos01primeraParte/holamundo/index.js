"use strict"

/*NOTA
/*    son palabras reservadas   "app"
/*                              "BrowserWindow"   */

const {app,BrowserWindow} = require("electron")

console.log("alistando elementos")

/*cuando la app este lista declarar-----------------------------*/
app.on("ready", () => {

  /*creando nuevo objeto ventana -------------------------------*/
  let ventana = new BrowserWindow({
    width: 1000,
    height: 600,
    title: "Hola mundo desde electron",
    center: true,
    resizable: false,
    autoHideMenuBar: true,
  })
  /*------------------------------------------------------------*/
    console.log("nueva ventana creada")
  /*-------------------------------------------------------------*/
  ventana.once("ready-to-show",() => {
    ventana.show()
  })
  /*si se mueve-------------------------------------------------*/
  ventana.on("move",() => {
    console.log("auxilio que me muevo ")
  })
  /*creando evento que cuando se cierre la ventana la app cierre*/
  ventana.on( "closed", () => {
    console.log("Estoy saliendo")
    app.quit()
  })
  /*configurando URL sitio---------------------------------------*/
  ventana.loadFile("index.html")

})





