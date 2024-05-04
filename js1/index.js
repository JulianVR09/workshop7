class Usuario {
    constructor(nombre, email, puntosAcumulados, clave){
        this.nombre = nombre;
        this.email = email;
        this.puntosAcumulados = puntosAcumulados;
        this.clave = clave;
    };

    acumularPuntos(){

    };

    canjearPuntos(){

    };
};

class ProductoFisico {
    constructor(nombre, puntosNecesarios, cantidadDisponible, precio, stock){
        this.nombre = nombre;
        this.puntosNecesarios = puntosNecesarios;
        this.cantidadDisponible = cantidadDisponible;
        this.precio = precio;
        this.stock = stock;
    }

    actualizarStock(){

    }

    obtenerInfo(){

    }

    enviarProducto(){

    }
}

class ProductoDigital {
    constructor(nombre, puntosNecesarios, URL, cantidadDisponible, stock){
        this.nombre = nombre;
        this.puntosNecesarios = puntosNecesarios;
        this.URL = URL;
        this.cantidadDisponible = cantidadDisponible;
        this.stock = stock;
    }

    obtenerInfo(){

    }
    
    descargar(){

    }
    
    obtenerProductoEmail(){

    };
};

class Actividad {
    constructor(tipo, puntosOtorgados){
        this.tipo = tipo;
        this.puntosOtorgados = puntosOtorgados;
    }

    completarActividad(){

    }
}

class CategoriaProducto {
    constructor(nombre, descripción){
        this.nombre = nombre;
        this.descripción = descripción;
    }

    listarProductos(){

    };
};

class OrdenCanje {
    constructor(usuario, producto, fecha){
        this.usuario = usuario;
        this.producto = producto;
        this.fecha = fecha;
    }

    confirmarOrden(){

    }

    cancelarOrden(){

    }
}

class Administrador {
    constructor(nombre, email, clave){
        this.nombre = nombre;
        this.email = email;
        this.calve = clave;
    }

    agregarProducto(){

    }

    modificarProducto(){

    }

    eliminarUsuario(){
        
    }
}