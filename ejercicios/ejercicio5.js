// 5.- En el siguiente link  te dejo una carpeta con diferentes documentos. Tendrás que crear un programa que clasifique dichos documentos y los separe por carpetas de la siguiente forma : 

import fs from 'fs'

// Folder a separar
const rutaFolder = "../pruebatecnica/Documentos Pruebas Tecnicas"

// Clasificar por
const clasificar = ['AcuseIVA', 'REPSE', 'DeclaracionIVA', 'AcuseIMSS', 'Pago INFONAVIT']

const ejercicio5 = (clasificar, rutaFolder) =>{
    
    clasificar.forEach(carpeta => {
        // Crear carpetas si no existe
        if(!fs.existsSync(`./${carpeta}`)){
            fs.mkdirSync(`./${carpeta}`)
           }
        // Leer carpeta de documentos
        fs.readdir(rutaFolder, function (err, archivos) {
            if (err) {
            onError(err);
            return;
            }
            // Recorrer documentos para obtener el nombre y path
            archivos.forEach(file =>{
                let path = `${rutaFolder}/${file}`
    
                // Validar el nombre del archivo para saber a que carpeta va
                if(file.includes(carpeta)){
                    let newPath = `../pruebatecnica/${carpeta}/${file}`
                    fs.rename(path, newPath, function (err) {
                        if (err) throw err
                        console.log('Movido satisfactoriamente')
                    })
                }
            })
        });
    })
}

ejercicio5(clasificar, rutaFolder)

export { ejercicio5 }
