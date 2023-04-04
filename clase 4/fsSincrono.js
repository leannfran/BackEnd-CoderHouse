const fs = require('fs'); //
const RUTA_ARCHIVO = './ejemplo.txt'

fs.writeFileSync(RUTA_ARCHIVO , "hola mundo ja")

if (fs.existsSync(RUTA_ARCHIVO)) {
    let contenido = fs.readFileSync(RUTA_ARCHIVO, 'utf-8' ,)
    console.log(contenido)
    fs.appendFileSync(RUTA_ARCHIVO, "me agregaron usando append filesync")
    contenido = fs.readFileSync(RUTA_ARCHIVO, 'utf-8')
    console.log(contenido)

}
//fs.unlinkSync('./ejemplo.txt')
//