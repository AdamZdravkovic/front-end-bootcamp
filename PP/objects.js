// Task 1


var coffee = {
    name: "Latte",
    flavor: "vanilla",
    milk: "oat",
    sugar: "brown",
};


// Task 2


var movie = {
    title: "Interstellar",
    actors: ["Matthew McConaughey", "Anne Hathaway"],
    director: "Christopher Nolan",
    genre: "science Fiction",
    popularity: 9.0,
};


// Task 3


function project (description, language, repo, status) {
    return {
        description: description,
        language: language,
        repo: repo,
        status: status,
        printRepo: function() {
            console.log(this.repo);
        },
        languageInfo: function() {
            if (this.language.toLowerCase() === "javascript") {
                return true;
            } else {
                return false;
            };
        },
        isInDevelopment: function() {
            return this.status;
        },
    };
};


// Task 4


function recipe (name, type, complexity, ingredients, time, instructions) {
    return {
        name: name,
        type: type,
        complexity: complexity,
        ingredients: ingredients,
        time: time,
        instructions: instructions,
        printIngredients: function() {
            console.log(ingredients);
        },
        mealUnder15: function() {
            if (time <= 15) {
                return true;
            } else {
                return false;
            }
        },
        changeType: function(newType) {
            this.type = newType;
        },
        deleteIngredient: function(ingredient) {
            let index = this.ingredient.indexOf(ingredient);
            if (index !== -1) {
                this.ingredients.splice(index, 1);
            };
        },
    };
};