/** registrador de tickets de eventos
 * Debe contar con un metodo "agregarUsuario" el cual recibira:
 * -id del evento (debe existir, agregar validaciones)
 * -id del usuarios
 * 
 * El metodo debe evaluar que el evento exista que el usuario no
 * haya estado registrado previamente (validacion de fecha y capacidad se evitara)
 * Si todo esta en orden , debe agregar el id del usuario en el arreglo 'participantes'
 * de ese evento
 * 
 * Debe contar con un metodo "ponerEventoEnGira" el cual recibira
 * -id del evento
 * -nueva localidad
 * -nueva fecha
 * 
 * el metodo debe copiar el evento existente con una nueva localiad, nueva fecha, nuevo id y 
 * sus participante vacios (usar spread operator para el resto de las propiedades)
 * 
 * 
 * -DEFINIR CLASE TicketManager
 * -dentro un array vacio y una variable privada "precioBaseDeGanancia"
 */

class TicketManager{
    //#precioBaseDeGanancia = 10;
    //eventos = [];
    constructor(){
        this.eventos = [];//array de eventos vacio
        this.precioBaseDeGanancia = 10;
    }
    
    getEventos(){
        console.log(this.eventos)
    }
    
    agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = new Date()){      
    const id = this.eventos.length + 1; //para darle el id recorremos el array con el metodo legth que te devuelve cuantos eventos hay ya creados y le sumamos 1, este sera el id.
    
    const evento = {
        id,
        nombre,
        lugar,
        precio: precio * 1.15 + this.precioBaseDeGanancia,
        capacidad,
        fecha,
        participantes : []
    }

    this.eventos.push(evento)
    console.log(`evento ${nombre} en ${lugar} agregado con exito`);
    }
    
    agregarUsuario(eventoId, usuarioId){
        const evento = this.eventos.find( e => e.id === eventoId);//buscamos en el array eventos id del evento ( validaciones) 
        if( !evento){
            console.log(`evento con id ${eventoId} no existe`)
            return
        }
        if (evento.participantes.includes(usuarioId)){
            console.log(`el usuaruario con id ${usuarioId} ya esta registrado en el evento`);
        }else{

            //si no cumple con ninguno de los condicionales agrega  el id del usuario a participantes
            evento.participantes.push(usuarioId)
            console.log(`usuario con id ${usuarioId} agregado con exito a evento ${evento.nombre}`);
        }
    }
    ponerEventoEnGira(eventoId, nuevaLocalidad, nuevaFecha, nuevaCapacidad){
        const evento = this.eventos.find( e => e.id === eventoId);//buscamos en el array eventos id del evento ( validaciones) 
        if( !evento){
            console.log(`evento con id ${eventoId} no existe`)
            return
        }

        const nuevoId = this.eventos.length ++;
        const nuevoEvento = {
            id: nuevoId,
            nombre: evento.nombre,
            lugar: nuevaLocalidad,
            precio: evento.precio,
            capacidad: nuevaCapacidad,
            fecha: nuevaFecha,
            participantes : []
        };
        this.eventos.push(nuevoEvento)
        console.log(`evento ${evento.nombre} puesto en gira correctamente`);
    }
    }

    //ejemplo de uso

    const ticketManager = new TicketManager();

    ticketManager.agregarEvento("Duki New Album", "Estadio José Amalfitani", 5000,49540);
    ticketManager.getEventos();
    ticketManager.agregarUsuario(1,'Leandro Franco');
    ticketManager.agregarUsuario(1,'Nicole Franco');
    ticketManager.agregarUsuario(1,'Ludmila Sabatini');
    ticketManager.ponerEventoEnGira(1,"LollaPalloza",new Date("2023-04-15"),100000);
    ticketManager.getEventos();


