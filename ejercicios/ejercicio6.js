// 6.- Elabora una función que nos retorne el elemento más grande de un arreglo pasado como argumento. (Este solo puede ser recorrido una vez)

const ejercicio6 = (arreglo) =>{
    // Validar que nos envien un arreglo
    if(!arreglo[0]){
         return "Favor de ingresar un arreglo"
    }
    // Asignar el primer elemento como numero mayor
    let mayor = arreglo[0]

    // Recorrer para comparar si el siguiente numero es mayor o no
    for (let index = 1; index < arreglo.length; index++) {
        if(mayor < arreglo[index]){
            mayor = arreglo[index]
        }
    }

    // Retornar el numero mayor
    return mayor
}
console.log("Ejercicio 6")
console.log(ejercicio6([-2, 120, -1,20, 0, -7, 30 ,100, 2, 15]))

export { ejercicio6 }
