
// 1.- Dado el siguiente arreglo [1,2,1,5,4,67,3,6,6,1,2,10,13,22] elabora una función que recibiendo como parámetro un array nos devuelva otro array sin elementos repetidos.

const arreglo = [1,2,1,5,4,67,3,6,6,1,2,10,1,13,22];

const ejercicio1 = (array) =>{
    let num = 0
    let array2 = []
    array.forEach(element => {
        array2.forEach(element2 =>{
            element === element2 && num++
        })
        num < 1  && array2.push(element)
        num = 0
    })
   return array2
}
console.log("Ejercicio 1")
console.log(ejercicio1(arreglo))

export { ejercicio1 }
