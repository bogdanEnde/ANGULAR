var hola_angular = angular.module("hola_angular", []);

hola_angular.controller("controlador", function ($scope) {
    var lista = this;
    var n = 3;
    var nCar = 1;

    lista.productos = [
        { id: 1, nombre: "agua", precio: 10.0 },
        { id: 2, nombre: "cafe", precio: 15.0 },
        { id: 3, nombre: "pan", precio: 5.0 }
    ];
    lista.carrito = [];
    lista.addProducto = function () {
        var nombre = lista.nombre;
        var precio = lista.precio;

        if (nombre != "" && precio != "" && !isNaN(precio)) {
            n++;
            lista.productos.push({ id: n, nombre: nombre, precio: precio });

            lista.nombre = '';
            lista.precio = '';
        }
    }
    lista.addAlCarrito = function () {
        var id = lista.productoSeleccionado;
        var cantidad = lista.cantidad;
        var producto = lista.producto.find(function (obj) {//
            return obj.id == id;
        });
        if (producto != undefined && cantidad > 0) {
            lista.carrito.push({ id: nCar, nombre: producto.nombre, precio: producto.precio, cantidad: cantidad, total: cantidad * producto.precio });
            nCar++;
        }
    }
    lista.getTotalCarrito =function(){
        var total= 0;
        // element representa a cada elemnto que estoy agregando en el array de lista.carrito
        lista.carrito.forEach(element => {
            total+=element.total;
        });
    }
});