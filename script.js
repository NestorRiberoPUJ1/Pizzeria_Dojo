function pizzaOven(tipoCorteza,tipoSalsa,quesos, toppings)
{
    var pizza={};
    pizza.corteza=tipoCorteza;
    pizza.base=tipoSalsa;
    pizza.queso=quesos;
    pizza.toppings= toppings;
    console.log(pizza);
    return pizza;
}
function getRandomItem(list) 
{
    return list[Math.floor(Math.random() * (list.length))];
}

function randomPizza()
{
    pizzaOven(getRandomItem(pizzaOptions.corteza),getRandomItem(pizzaOptions.salsa),getRandomItem(pizzaOptions.quesos),getRandomItem(pizzaOptions.toppings))
}

var pizzaOptions={};
pizzaOptions.corteza=["Chicado Style","Thin","Traditional","Cheese Border"];
pizzaOptions.salsa=["Marinana","Traditional","Bechamel"];
pizzaOptions.quesos=["Burrata","Mozzarella","Parmesan"];
pizzaOptions.toppings=["Chicken","Salami","Mushrooms","Saussagge"];


pizzaOven("estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]);
pizzaOven("lanzada a mano" , "marinara" , ["mozzarella", "feta"],["champiñones", "aceitunas", "cebollas"]);
pizzaOven("Borde de queso" , "Bechamel" , ["mozzarella", "Burrata"],["champiñones", "Pollo", "Jamón"]);
pizzaOven("Borde delgado" , "marinara" , ["Parmesano"],["Anchoas", "Salami"]);

randomPizza();
randomPizza();