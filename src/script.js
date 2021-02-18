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
        let dish = $(this).data(name[i]);
        let dishName = dish.name;
        let dishPrice = dish.price;
        foodItems.forEach(food => {
            if (food === dishName) {
                alert("Item already added!")
                foodCart(this).closest("li").remove();
                return;
            }
        })
        foodItems.push(dish.name);
        addFood(dish);
        quantityByItem += 1;
        total += dishPrice;
        updateQuantity(dish);
    });


    function updateQuantity(dish) {
        total = Math.round(total * 100) / 100
        $('.basketQty').text(`${quantityByItem}`);
        $('.cart-total-price').text(`£${total}`);
    }

    // remove item 
    $foodCart.delegate('.removeFood', 'click', function (i) {
        let dish = $(this).data('name');
        let dishPrice = dish.price;

        $(this).closest("div.basket").remove();
        total -= dishPrice;
        foodItems.pop()
        updateQuantity(dish)
    });

    // purchase 
    $('.purchase').click(function () {
        if (total === 0) {
            alert('You can not checkout without purchasing an item.')
        } else {
            $(".popup-overlay, .popup-content").addClass("active");
        }
    })

    $(".submit").click(function (event) {
        if ($("#amount").first().val() === `${total}`) {
            alert("Thank you for your purchase")
            location.reload(true);
            return
        }
        event.preventDefault;
        alert('Please insert correct amount')

    });


    // Add Food
    $foodCart.delegate('.addFood', 'click', '.qty-per-item', function (i) {
        var $el = $(this);
        var count = $el.data('count') || 1; 
        $el.find('.qty-per-item').text(count);
        $el.data('count', ++count);
    });
    
}) 