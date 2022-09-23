// 4.- Elabora un programa que dado una cadena de caracteres, nos devuelva cuantas veces se repite una palabra en dicha cadena. (No existe restricción alguna, sea cual sea el caso si la palabra se repite tiene que contarla)

const ejercicio4 = (cadena, palabra) =>{
    let count = 0
    // Recibir la cadena y palabra en minusculas
   cadena = cadena.toLowerCase()
   palabra = palabra.toLowerCase()

   // Convertir la cadena a array separando con un espacio
   let arrayCadena = cadena.split(" ")
   
   // Recorrer el array comparando palabras
   arrayCadena.forEach(element => {
    element === palabra && count++
   });

   // Retornar las veces que se repite la palabra
   return count
}
console.log("Ejercicio 4")
console.log(ejercicio4("Anaita ana 123 x lava ANA la tina ana", "ana"))

export { ejercicio4 }
