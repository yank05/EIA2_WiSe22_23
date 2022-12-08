var OldMcDonald;
(function (OldMcDonald) {
    class Animal {
        name;
        species;
        food;
        foodAmount;
        sound;
        constructor(_name, _species, _food, _foodAmount, _sound) {
            this.name = _name;
            this.species = _species;
            this.food = _food;
            this.foodAmount = _foodAmount;
            this.sound = _sound;
        }
        eat() {
            console.log(this.name + "sings");
            this.food.eat(this.foodAmount);
        }
        sing() {
            let nameText = document.getElementById("name");
            nameText.innerHTML = this.name;
            let speciesText = document.getElementById("animal");
            speciesText.innerHTML = this.species + "s";
            for (let index = 0; index < 5; index++) {
                let sound = document.getElementById("sound" + index);
                console.log(sound);
                if (index == 0 || index == 1 || index == 4) {
                    sound.innerHTML = this.sound + " " + this.sound;
                }
                else {
                    sound.innerHTML = this.sound;
                }
            }
        }
    }
    OldMcDonald.Animal = Animal;
})(OldMcDonald || (OldMcDonald = {}));
//# sourceMappingURL=animal.js.map