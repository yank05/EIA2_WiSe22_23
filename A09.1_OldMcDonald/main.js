var OldMcDonald;
(function (OldMcDonald) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let animals;
        let foodCow = new OldMcDonald.Food("Hay", 100);
        let cow = new OldMcDonald.Animal("Tom the Cow", "Cow", foodCow, 10, "Moo");
        animals.push(cow);
        let foodDog = new OldMcDonald.Food("Dog Food", 50);
        let dog = new OldMcDonald.Animal("Billy the Dog", "Dog", foodDog, 2, "Woof");
        animals.push(dog);
        let foodSheep = new OldMcDonald.Food("Hay", foodCow.total);
        let sheep = new OldMcDonald.Animal("Gerlinda the Sheep", "Sheep", foodSheep, 5, "Mööh");
        animals.push(sheep);
        let foodGoat = new OldMcDonald.Food("Hay", foodSheep.total);
        let goat = new OldMcDonald.Animal("Arielle the Goat", "Goat", foodGoat, 5, "Bääh");
        animals.push(goat);
        let foodPig = new OldMcDonald.Food("grains", 75);
        let pig = new OldMcDonald.Animal("Tristan the Pig", "Pig", foodPig, 5, "Oink");
        animals.push(pig);
        for (let index = 0; index < animals.length; index++) {
        }
        cow.sing();
        cow.eat();
    }
    OldMcDonald.handleLoad = handleLoad;
})(OldMcDonald || (OldMcDonald = {}));
//# sourceMappingURL=main.js.map