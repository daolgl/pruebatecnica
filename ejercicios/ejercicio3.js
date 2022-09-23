// 3.- Elabora un programa dinámico que genere las tablas de multiplicar con el ciclo for, while y do-while tomando en cuenta los siguientes parámetros (numero, inicio, fin) un parámetro extra es el ciclo a utilizar para retornar el resultado quedando los parámetros de la siguiente manera: (numero, inicio, fin, [ciclo]).

const ejercicio3 = (numero, inicio, fin, ciclo) =>{
    let tabla = []
    switch (ciclo) {
        case 'for':
            for (let index = inicio; index <= fin; index++) {
                let resultado = numero * index 
                let tabNum = `${numero} * ${index} = ${resultado}`
                tabla.push(tabNum)
            }
            break;
        case 'while':
            while (inicio <= fin) {
                let resultado = numero * inicio 
                let tabNum = `${numero} * ${inicio} = ${resultado}`
                tabla.push(tabNum)
                inicio ++
            }
            break;
        case 'do-while':
            do {
                let resultado = numero * inicio 
                let tabNum = `${numero} * ${inicio} = ${resultado}`
                tabla.push(tabNum)
                inicio ++
            } while (inicio <= fin);
            break;
        default:
            break;
    }
    return tabla
}
console.log("Ejercicio 3")
console.log(ejercicio3(7, 1, 10, 'for'))

export { ejercicio3 }
