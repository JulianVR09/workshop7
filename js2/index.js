class Cliente {
    constructor(nombre, email, clave, dirección, teléfono){
        this.nombre = nombre;
        this.email = email;
        this.clave = clave;
        this.dirección = dirección;
    };

    realizarPedido(){

    }
    verHistorialPedidos(){

    }
    autenticacion(){

    }
};

class RestauranteDigital {
    constructor(nombre, menuQR){
        this.nombre = nombre;
        this.menuQR = menuQR;
    }

    agregarPlato(){

    }
    actualizarPlato(){

    }
}

class RestauranteFisico {
    constructor(nombre, dirección, menuFisico){
        this.nombre = nombre;
        this.dirección = dirección;
        this.menuFisico = menuFisico;
    }

    agregarPlato(){

    }
    actualizarPlato(){

    }
    eliminarPlato(){

    }
};

class Pedido {
    constructor(cliente, restaurante, detallesPedido, estadoPedido){
        this.cliente = cliente;
        this.restaurante = restaurante;
        this.detallesPedido = detallesPedido;
        this.estadoPedido = estadoPedido;
    }

    actualizarEstado(){

    }
    calcularTotal(){

    }
}

class Plato {
    constructor(nombre, precio, ingredientes){
        this.nombre = nombre;
        this.precio = precio;
        this.ingredientes = ingredientes;
    }

    obtenerInfo(){

    };
};

class MenuQR {
    constructor(plato, URL){
        this.plato = plato;
        this.URL = URL;
    }

    generarQR(){

    }
}

class MenuFisico {
    constructor(plato){
        this.plato = plato
    }

    impresion(){

    }
    visualizacion(){

    }
}

class Repartidor {
    constructor(nombre, email, clave, vehículo, disponibilidad){
        this.nombre = nombre;
        this.email = email;
        this.clave = clave;
        this.vehículo = vehículo;
        this.disponibilidad = disponibilidad;
    }

    aceptarEnvío(){

    }
    actualizarUbicación(){

    }
    completarEntrega(){

    }
    autenticacion(){

    }
    actualizarEstado(){

    }
}