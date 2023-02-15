const producots =[
    {nombre: "harina", precio: 50},
    {nombre: "galletitas", precio: 100},
    {nombre: "cerveza", precio: 150},
    {nombre: "leche", precio: 200},
    {nombre: "gaseosa", precio: 250},
];

let carrito = []


let seleccion = prompt(" hola desea comprar algun producto si o no ?")

while(seleccion != "si" && seleccion !="no" ){
    alert("por fabor ingresa si o no")
    seleccion = prompt (" hola desea comprar algun producto si o no ?")
}


/*primera parte: seleciones si no*/
if(seleccion == "si") {
    alert("a continuacion nuestra lista de productos ")
    // console.log(producots)
    // tengo que rrecorrer el array en este caso con el .map
    let todosLosProductos = producots.map((producots) => producots.nombre + " " + producots.precio + "$");

    alert(todosLosProductos.join(" - ")); /*.join recore todos los elementos de array pero separados por un simbolo EJ ("-")*/
 
    } else if (seleccion == "no"){
        alert(" gracias por venir hasta pronto ");
    }

 
    /*segunda parte: seleccion de items, si seleccion es distintyo de no... (si...) */
 
 while(seleccion != "no") {
    let producots = prompt(" por fabor para agregar un producto, escriva el nomren de porducto : harina , galletitas , cerveza , leche y gaseosa")
    let precio = 0


        /* si producrto es harina a X o producto igual a galletitas o ... etc */

        if(producots == "harina" || producots == "galletitas" || producots ==       "cerveza" || producots == "leche" || producots == "gaseosa" )
            { /* devo ver cada caso con case, para ir varaindo el precio */
                switch(producots){
                    case "harina":
                    precio = 50
                    break;

                    case "galletitas":
                    precio = 100
                    break;
                    
                    case "cerveza":
                    precio = 150
                    break;

                    case "leche":
                    precio = 200
                    break;

                    case "gaseosa":
                    precio = 250
                    break;

                    default :
                    break;
                }

                /* para pedirle una cantidad devo crear otra variable (let unidades), y puyear al carrito */

                let unidades = parseInt(prompt("cuantas unidades quieres llevar "))

                /*carrito.push({}) los va a crea en formato ojeto(array)*/

                carrito.push({producots, unidades, precio})
                console.log(carrito)
            
            } else { /*en caso que escriva culquier cosa*/
            alert("no tenemos ese producto")
                }

        /*una ves que elige un producto le pregunto si quiere  elegir otro */

        seleccion = prompt ( "desea seguir comprando , si o no  ??")
        

        /*mientras seleccion sea estrictamente igual a no*/
        while(seleccion === "no") {
            alert ("gracias por la compra, chau")
            /*le muestro su carrito con un ,forEach*/
            /* voy a concatenar con las `` para agregar logica tambien */
            carrito.forEach((carritoFinal) =>{ /*aca cree carritoFinal*/
                alert (`producto: ${carritoFinal.producots}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)

                
            })
            break;
        }

 }

 /* para tenre el monto final vamos a usar el metodo rediuse*/
 /*rediuse usa un acumulador (acc) el valor inicial (el)*/ 
/*al acumulador acc le sumo el precio por las unidades ... ,0 es el vslor inicial del acc */
 const total = carrito.reduce((acc, el)=> acc + el.precio * el.unidades, 0)
 alert (`el total a para es : ${total}`)


