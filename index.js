class Product{
    constructor (name, price){
        this.name = name;
        this.price = parseInt (price);

    }
}

const cpu = new Product("Procesador", 25000);
const motherboard = new Product("Placa madre", 22000);
const videocard = new Product("Placa de video", 50000);
const ram = new Product("Memoria ram", 5000);
const cases = new Product("Gabinete", 4000);
let totalProducts = 0
let carrito = [];
let shoppingList = [];

function add(numOne, numTwo) {
    let result = numOne + numTwo;
    return result;
}

function mult(numOne, numTwo) {
    let result = numOne * numTwo;
    return result;
}

function user(){
    userName = prompt("Ingrese su nombre por favor")
    while (userName === "") {
        userName = prompt("Ingrese su nombre por favor")
    }
}

function menu() {
    let option = 0;
    
    do{
        option = parseInt(prompt("Bienvenido " + userName + ", seleccione una opcion para continuar. (ESC para salir)\nEn el carrito hay actualmente " + carrito.length + " Productos.\n 1.Agregar productos al carrito\n 2.Pagar\n 3.Reiniciar el carrito\n 4.Mostrar productos dentro del carrito"));
    
    switch (option) {
        case 1:
            addProduct()
            return menu()
        case 2:
            paymentMethod()
            return showTotal(totalProducts)
        case 3:
            restartCarrito()
            return menu()
        case 4:
            checkCarrito()
            return menu()
        default: 
            alert("Seleccione una opcion valida, por favor")
            
        } 
    } while (option !== "") 
}

function addProduct() {
    let selectProduct = 0
    do {
        selectProduct = parseInt(prompt("Seleccione el producto que desea agregar al carrito.\n Su total hasta ahora es $" + totalProducts + "\n Actualmente hay " + carrito.length + " productos en el carrito.\n 1.Procesador $25000\n 2.Placa madre $22000\n 3.Placa de video $50000\n 4.Memoria ram $5000\n 5.Gabinete $4000\n 0.Volver al menu anterior." ));

        if (selectProduct === 1) {
            totalProducts = add(totalProducts, cpu.price)
            carrito.push ('Procesador $25000')
            shoppingList.push (cpu)
        }if (selectProduct === 2) {
            totalProducts = add(totalProducts, motherboard.price)
            carrito.push ('Placa madre $22000')
            shoppingList.push (motherboard)
        }if (selectProduct === 3) {
            totalProducts = add(totalProducts, videocard.price)
            carrito.push('Placa de video $50000')
            shoppingList.push (videocard)
        }if (selectProduct === 4) {
            totalProducts = add(totalProducts, ram.price)
            carrito.push ('Memoria RAM $5000')
            shoppingList.push (ram)
        }if (selectProduct === 5) {
            totalProducts = add(totalProducts, cases.price)
            carrito.push ('Gabinete $4000')
            shoppingList.push (cases)
        }if (selectProduct >= 6) {
            alert("Seleccione una opcion valida, por favor")
        }

    }while (selectProduct !== 0)

}

function showTotal(result) {
    alert("El total a pagar es: $" + result + "\n ¡Gracias por su compra!");
    
}

function paymentMethod() {
    let transfer = totalProducts
    let cash = totalProducts * 0.90
    let credit = totalProducts * 1.15
    let paymentMethod = 0

        paymentMethod = parseInt(prompt("El total en el carrito es de: $" + totalProducts + "\n¿Como desea pagarlo?\n 1.Efectivo\n 2.Transferencia\n 3.Tarjeta de credito"));
        if (paymentMethod === 1) {
            alert("Se ha aplicado un descuento del 10%");
            totalProducts = cash;

        }if (paymentMethod === 2) {
            totalProducts = transfer;

        }if (paymentMethod === 3) {
            alert("Se ha aplicado un recargo del 15%");
            totalProducts = credit;

        }if (paymentMethod >= 4) {
            alert("Seleccione una opcion valida")
            
        }
}
function restartCarrito() {
    alert("Se han eliminado todos los productos del carrito")
    totalProducts = multi(totalProducts, 0);
    carrito = []
}

function checkCarrito() {

    alert ("Los productos en su carrito son:\n" + carrito.join("\n") + "\n Total a pagar: $" + totalProducts)
}
function listFilter() {
    const expensive = shoppingList.filter((shoppingList) => shoppingList.price > 10000)
    const cheap = shoppingList.filter((shoppingList) => shoppingList.price <= 10000)
    console.log("Productos caros")
    console.log(expensive)
    console.log("Productos baratos")
    console.log(cheap)
}

user()
menu()
listFilter()