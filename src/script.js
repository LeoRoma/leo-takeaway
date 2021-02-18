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

    // trying refactoring
    // function iteration(foods) {
    //     console.log(foods)
    //     foods.forEach(food => {
    //         getFood(food);
    //     })
    // }
    // function getFood(food) {
    //     $showStarters.append(Mustache.render(startersTemplate, food));
    // };

    // function getFood(food) {
    //     $showPizzas.append(Mustache.render(pizzasTemplate, food));
    // };

    // function getFood(food) {
    //     $showSides.append(Mustache.render(sidesTemplate, food));
    // };

    // function getFood(food) {
    //     $showDesserts.append(Mustache.render(dessertsTemplate, food));
    // };

    // function getFood(food) {
    //     $showDrinks.append(Mustache.render(drinksTemplate, food));
    // };

    // function getFood(food) {
    //     $showAlcoholics.append(Mustache.render(alcoholicsTemplate, food));
    // };

    // iteration(starters);
    // iteration(pizzas);
    // iteration(sides);
    // iteration(desserts);
    // iteration(drinks);
    // iteration(alcoholics)
    // trying refactoring

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


    // $foodCart.delegate('.addFood', 'click', function (i) {
    //     let dish = $(this).data(name[i]);
    //     var el = parseInt($('.qty-per-item').text());
    //     console.log(el)
    //     $('.qty-per-item').text(el + 1);

    //     // let dish = $(this).data(name[i]);
    //     let dishPrice = dish.price
    //     total += dishPrice
    //     updateQuantity(dish);
    // });

    function updateQuantity(dish) {
        total = Math.round(total * 100) / 100
        $('.basketQty').text(`${quantityByItem}`);
        $('.cart-total-price').text(`£${total}`);
    }

    // remove item 
    $foodCart.delegate('.removeFood', 'click', function (i) {
        // console.log(i);
        let dish = $(this).data('name');
        let dishPrice = dish.price;
        console.log(dish)
        // console.log(quantity)
        // if (quantity > 0) {
        //     quantity -= 1

        //     total -= dishPrice;
        //     updateQuantity(dish);
        // }
        // if (quantity === 0) {
        $(this).closest("div.basket").remove();
        total -= dishPrice;
        foodItems.pop()
        updateQuantity(dish)
        // }
    });

    // purchase 
    $('.purchase').click(function () {
        if (total === 0) {
            alert('You can not checkout without purchasing an item.')
        } else {
            $(".popup-overlay, .popup-content").addClass("active");
            // $("#foodCart").clone().appendTo("#checkout");
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

    // test 

    // $('.basket').on('click', '.qty-per-item', function() {
    //     var $el = $(this);
    //     var count = $el.data('count') || 1;    
    //     $el.find('span').html(count);
    //     $el.data('count', ++count);
    // });

    $foodCart.delegate('.addFood', 'click', '.qty-per-item', function (i) {
        console.log('hello');
        var $el = $(this);
        var count = $el.data('count') || 1; 
        $el.find('.qty-per-item').text(count);
        $el.data('count', ++count);
        console.log(count)
        // let dish = $(this).data(name[i]);
        // var el = parseInt($('.qty-per-item').text());
        // console.log(el)
        // $('.qty-per-item').text(el + 1);

        // // let dish = $(this).data(name[i]);
        // let dishPrice = dish.price
        // total += dishPrice
        // updateQuantity(dish);
    });
    
}) 