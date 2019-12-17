var menu = {
    "starters": [
        {
            "name": "Arancini",
            "price": 1.50
        },
        {
            "name": "Bruschetta",
            "price": 2.50
        },
        {
            "name": "Fritto misto",
            "price": 10.50
        },
        {
            "name": "Crocchette",
            "price": 4.50
        },
        {
            "name": "Fiori di Zucca",
            "price": 3.50
        }
    ],
    "pizzas": [
        {
            "name": "Marinara",
            "price": 8.00
        },
        {
            "name": "Margherita",
            "price": 9.00
        },
        {
            "name": "4 Stagioni",
            "price": 12.00
        },
        {
            "name": "Capricciosa",
            "price": 13.00
        },
        {
            "name": "Boscaiola",
            "price": 11.00
        },
        {
            "name": "Diavola",
            "price": 11.00
        },
        {
            "name": "Rugola",
            "price": 10.00
        },
        {
            "name": "Parma",
            "price": 11.00
        },
        {
            "name": "Bufala",
            "price": 11.50
        },
        {
            "name": "4 Formaggi",
            "price": 10.50
        },
        {
            "name": "Patate",
            "price": 9.50
        },
        {
            "name": "Margherita",
            "price": 9.00
        }
    ],
    "sides": [
        {
            "name": "Insalata",
            "price": 3.50
        },
        {
            "name": "Olive all' Ascolana",
            "price": 2.50
        },
        {
            "name": "Friarelli",
            "price": 2.50
        },
        {
            "name": "Verdure Miste",
            "price": 6.50
        },
        {
            "name": "Patate",
            "price": 3.50
        }
    ],
    "desserts": [
        {
            "name": "Tiramisu",
            "price": 3.50
        },
        {
            "name": "Chocolate Cheesecake",
            "price": 2.50
        },
        {
            "name": "Vanilla Icecream",
            "price": 1.50
        },
        {
            "name": "Frutta Mista",
            "price": 4.50
        }
    ],
    "drinks": [
        {
            "name": "Sparkling Water",
            "price": 1.50
        },
        {
            "name": "Still Water",
            "price": 1.00
        },
        {
            "name": "Coca Cola",
            "price": 2.50
        },
        {
            "name": "Fanta",
            "price": 2.50
        },
        {
            "name": "Sprite",
            "price": 2.50
        }
    ],
    "alcoholics": [
        {
            "name": "Peroni",
            "price": 3.50
        },
        {
            "name": "Red Wine",
            "price": 5.50
        },
        {
            "name": "White Wine",
            "price": 4.50
        }
    ]
}

var starters = menu.starters;
var pizzas = menu.pizzas;
var sides = menu.sides;
var desserts = menu.desserts;
var drinks = menu.drinks;
var alcoholics = menu.alcoholics;

$(document).ready(function () {
    var $showStarters = $('#showStarters');
    var $showPizzas = $('#showPizzas');
    var $showSides = $('#showSides');
    var $showDesserts = $('#showDesserts');
    var $showDrinks = $('#showDrinks');
    var $showAlcoholics = $('#showAlcoholics');

    var $foodCart = $('#foodCart');

    var startersTemplate = $('#startersTemplate').html();
    var pizzasTemplate = $('#pizzasTemplate').html();
    var sidesTemplate = $('#sidesTemplate').html();
    var dessertsTemplate = $('#dessertsTemplate').html();
    var drinksTemplate = $('#drinksTemplate').html();
    var alcoholicsTemplate = $('#alcoholicsTemplate').html();

    var cartTemplate = $('#cartTemplate').html();

    function getStarters(starter) {
        $showStarters.append(Mustache.render(startersTemplate, starter))
    };

    function getPizzas(pizza) {
        $showPizzas.append(Mustache.render(pizzasTemplate, pizza))
    };

    function getSides(side) {
        $showSides.append(Mustache.render(sidesTemplate, side))
    };

    function getDesserts(dessert) {
        $showDesserts.append(Mustache.render(dessertsTemplate, dessert))
    };

    function getDrinks(drink) {
        $showDrinks.append(Mustache.render(drinksTemplate, drink))
    };

    function getAlcoholics(alcoholic) {
        $showAlcoholics.append(Mustache.render(alcoholicsTemplate, alcoholic))
    };

    $.each(starters, function (i, starter) {
        getStarters(starter);
    })

    $.each(pizzas, function (i, pizza) {
        getPizzas(pizza);
    })

    $.each(sides, function (i, side) {
        getSides(side);
    })

    $.each(desserts, function (i, dessert) {
        getDesserts(dessert);
    })

    $.each(drinks, function (i, drink) {
        getDrinks(drink);
    })

    $.each(alcoholics, function (i, alcoholic) {
        getAlcoholics(alcoholic);
    })

    // adding item 
    var foodItems = [];
    var quantity = 0;
    var quantityByItem = 0
    var total = 0;

    function addFood(dish) {
        $foodCart.append(Mustache.render(cartTemplate, dish));
    }

    $('.addFood').click(function (i) {
        var dish = $(this).data(name[i]);
        var dishName = dish.name;
        var dishPrice = dish.price
        foodItems.forEach(food => {
            if (food === dishName) {
                alert("Item already added!")
                foodCart(this).closest("li").remove();
                return
            }
        })
        foodItems.push(dish.name)
        addFood(dish)
        quantityByItem += 1;
        total += dishPrice;
        updateQuantity(dish)
    });

    $foodCart.delegate('.addFood', 'click', function (i) {
        console.log("hello")
        var dish = $(this).data(name[i]);
        var dishPrice = dish.price
        console.log(dishPrice)
        total += dishPrice;
        quantityByItem += 1;
        updateQuantity(dish);
    });

    function updateQuantity(dish) {
        total = Math.round(total * 100) / 100
        $('.basketQty').text(`${quantityByItem}`);
        $('.cart-total-price').text(`£${total}`);
    }

    // remove item 
    $foodCart.delegate('.removeFood', 'click', function (i) {
        var dish = $(this).data(name[i]);
        var dishPrice = dish.price
        var dishName = dish.name
        if (quantityByItem > 0) {
            quantityByItem -= 1;
            total -= dishPrice;
            updateQuantity(dish);
        }
        if (quantityByItem === 0) {
            $(this).closest("li").remove();
            foodItems.pop()
            updateQuantity(dish)
        }
    });
})

