function compra()
{
    
    var json = {"productos":[{name: "Champu",price: 1.30},{name: "Gel",price: 1.00},{name: "Pasta",price: 1.00},{name: "Perfume",price: 4.50},{name: "Detergente",price: 1.50},{name: "Lejia",price: 1.20}]};
    
    var suma = 0;
    
    for(var i = 0; i < json.productos.length; ++i)
    {
        console.log(json.productos[i].price);
        suma += json.productos[i].price;
    }
    
    suma = suma * 1.07;
    document.getElementById("generate").innerHTML = suma.toFixed(2) + " €";

}
