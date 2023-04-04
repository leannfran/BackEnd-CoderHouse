clase 4 manejo de archivos en javascript

fs = file sistem

los fs sincronos funcionan asi:

writeFillSync = sirve para escrivir contenido en un archivo si no encuentra el contenido lo crea, si lo encuentra lo sobre escribe

readFileSync = para obtener el contenido de un archivo 

appendFileSync = para anadir contenido a un archivo ( no se se sobre escribe)

unlinkSync = es el 'delete' de los archivos, eliminara todo, no solo el contenido

existSync = corrobora que un archivo exista
