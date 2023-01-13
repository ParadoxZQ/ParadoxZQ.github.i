 // JavaScript code goes here
        var mealSelector = document.getElementById("meal-selector");
        var ingredientList = document.getElementById("ingredient-list");
        var meals = {
          Homemade_Nuggets: "chicken breasts, \nbreadcrumbs, \nan egg, \nplain flour",
          Fajitas: "wraps,\nchicken breast or quorn pieces,\nsalsa,guac,\nsour cream ,\npeppers,\nbasmati rice,\ncheese,\nfajita spice mix,oil",
          McDonalds_Fakeaway: "burger rolls,\nchicken burgers,\nbeef burgers,\nveggie burgers,\npotatoes,\ngarlic granules ,\nmixed herbs,\nchicken breast,\nbread crumbs,\nan egg,\nplain flour,\nlettuce,\ntomatoes ,\nonion,\nketchup,\nMayo,\nBBQ sauce ,\ncheese slices,\noil",
          Cheesy_potato_bake_recipe: "2kg (4lb) maris piper potatoes, quartered,\n100g (3½oz) unsalted butter,\n3 red onions, finely sliced,\n3 garlic cloves, chopped,\n2 tbsp chopped thyme,n400g (13oz) Gruyère, grated"
        };
        mealSelector.onchange = function() {
          ingredientList.value = meals[this.value];
        };
