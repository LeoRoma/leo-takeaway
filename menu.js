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
    "alcoholic": [
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
console.log(menu.starters[0].name);
var starters = menu.starters;
var pizzas = menu.pizzas;
var sides = menu.sides;
var desserts = menu.desserts;
var drinks = menu.drinks;
var alcoholic = menu.alcoholic;

$(document).ready(function () {
    var $showDish = $('#showDish');
    var $showPrice = $('#showPrice');
    var foodsTemplate = $('#foodsTemplate').html();
    var pricesTemplate = $('#pricesTemplate').html();

    function getStarter(starter) {
        $showDish.append(Mustache.render(foodsTemplate, starter))
    }
    // function getStarter(starter) {
    //     $showPrice.append(Mustache.render(pricesTemplate, starter))
    // }

    $.each(starters, function (i, starter) {
        getStarter(starter);
        console.log(starter.name);
    })
})





// for (i; i < starters.length; i++) {
//     console.log(starters[i].name)
// }


