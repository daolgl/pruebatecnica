// 2.- Elabora un programa que nos regrese los números primos de un rango ingresado por el usuario.

const ejercicio2 = (numStart, numEnd) =>{
    let primos = []
    let div = 0

    for (let index = numStart; index <= numEnd; index++) {
        div = 0
        for (let index2 = numStart; index2 <= numEnd; index2++) {
            if((index % index2 === 0) & (index2 !=1)){
                div++
            }
        }
        if((div <= 1) & (index !=1)){
            primos.push(index)
        }
    }
    return primos
}
console.log("Ejercicio 2")
console.log(ejercicio2(1, 100))

export { ejercicio2 }
