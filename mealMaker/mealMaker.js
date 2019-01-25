// create an object which can automatically generate 3 dishes from 3 different courses.
const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: [],
    },
    get appetizers() {
    },
    set appetizers(appetizerIn) {
    },
    get mains() {
    },
    set mains(mainIn) {
    },
    get desserts() {
    },
    set desserts(dessertIn) {
    },
    get courses() {
        return {
            appetizers: this._courses.appetizers,
            mains: this._courses.mains,
            desserts: this._courses.desserts
        }
    },


    // function: add dishes to the given course
    addDishToCourse(courseName, dishName, dishPrice) {
        // create dish object with name, price properties
        const dish = {
            name: dishName,
            price: dishPrice
        };
        this._courses[courseName].push(dish) // .push() method add a item into the last position of the array
    },


    // function: get a random dish from the given course
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const index = Math.floor(Math.random() * dishes.length);
        return dishes[index]
    },


    // function: generate a meal including 3 dishes
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;
        return 'Dishes: ' + appetizer.name + ', ' + main.name + ', ' + dessert.name + '\nTotal price: ' + totalPrice;
    }
};


// add some dishes into menu
menu.addDishToCourse('appetizers', 'cookies', 5);
menu.addDishToCourse('appetizers', 'peanut', 5);
menu.addDishToCourse('mains', 'fish', 15);
menu.addDishToCourse('mains', 'beef', 20);
menu.addDishToCourse('desserts', 'cake', 5);
menu.addDishToCourse('desserts', 'apple', 3);

let meal = menu.generateRandomMeal();
console.log(meal);
