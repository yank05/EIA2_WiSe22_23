var OldMcDonald;
(function (OldMcDonald) {
    window.addEventListener("load", handleLoad);
    let interval;
    let index = 1;
    let animals = [];
    function handleLoad() {
        let foodHay = new OldMcDonald.Food("Hay", 100);
        let cow = new OldMcDonald.Animal("Tom the Cow", "Cow", foodHay, 10, "Moo");
        animals.push(cow);
        let foodDog = new OldMcDonald.Food("Dog Food", 50);
        let dog = new OldMcDonald.Animal("Billy the Dog", "Dog", foodDog, 2, "Woof");
        animals.push(dog);
        let sheep = new OldMcDonald.Animal("Gerlinda the Sheep", "Sheep", foodHay, 5, "Mööh");
        animals.push(sheep);
        let goat = new OldMcDonald.Animal("Arielle the Goat", "Goat", foodHay, 5, "Bääh");
        animals.push(goat);
        let foodPig = new OldMcDonald.Food("grains", 75);
        let pig = new OldMcDonald.Animal("Tristan the Pig", "Pig", foodPig, 5, "Oink");
        animals.push(pig);
        startSing();
    }
    function startSing() {
        animals[0].sing();
        animals[0].eat();
        console.log(animals);
        interval = setInterval(makeLyrics, 10000);
    }
    function makeLyrics() {
        animals[index].sing();
        animals[index].eat();
        index++;
        if (index == 5) {
            clearInterval(interval);
            roleAgain();
        }
    }
    function roleAgain() {
        let div = document.querySelector("div");
        let againButton = document.createElement("button");
        againButton.setAttribute("type", "button");
        againButton.setAttribute("margin", "auto");
        againButton.innerHTML = "Next Day";
        div.appendChild(againButton);
        index = 1;
        againButton.addEventListener("click", restart);
    }
    function restart() {
        let div = document.querySelector("div");
        let againButton = document.querySelector("button");
        div.removeChild(againButton);
        startSing();
    }
})(OldMcDonald || (OldMcDonald = {}));
//# sourceMappingURL=main.js.map