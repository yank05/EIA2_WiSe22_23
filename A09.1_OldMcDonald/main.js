var OldMcDonald;
(function (OldMcDonald) {
    window.addEventListener("load", handleLoad);
    let interval;
    let index = 1;
    let animals = [];
    function handleLoad() {
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
        startSing();
    }
    function startSing() {
        animals[0].sing();
        animals[0].eat();
        interval = setInterval(makeLyrics, 10000);
    }
    function makeLyrics() {
        animals[index].sing();
        animals[index].eat();
        index++;
        if (index == 5) {
            clearInterval(interval);
        }
    }
})(OldMcDonald || (OldMcDonald = {}));
//# sourceMappingURL=main.js.map