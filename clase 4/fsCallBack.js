import * as fs from 'fs'

const RUTA_ARCHIVO = './info.txt'


fs.writeFile(RUTA_ARCHIVO, "holaa", (error) => {
    if (error) {
        return "Error en creacion de archivo"
    }
    fs.readFile(RUTA_ARCHIVO, 'utf-8', (error) => {
        if (error) {
            return "Error en lectura de archivo"
        }
        fs.appendFile(RUTA_ARCHIVO, `\nVivo en bsas \aprenndo programacion con Js`, (error) => {
            if (error) {
                return "Error en Escritura de archivo"
            }
           // fs.unlink(RUTA_ARCHIVO, (error) => {
               // if (error) {
                //    return "Error en eliminar archivo"
           //     }
            })
        })
    })
//})
