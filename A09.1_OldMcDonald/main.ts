namespace OldMcDonald {
    window.addEventListener("load", handleLoad); 
    let interval: number; 
    let index: number = 1; 
    let animals: Animal[] = []; 

    function handleLoad(): void {
        let foodHay: Food = new Food("Hay", 100); 
        let cow: Animal = new Animal("Tom the Cow", "Cow", foodHay, 10, "Moo");
        animals.push(cow); 

        let foodDog: Food = new Food("Dog Food", 50); 
        let dog: Animal = new Animal("Billy the Dog", "Dog", foodDog, 2, "Woof");
        animals.push(dog); 

        let sheep: Animal = new Animal("Gerlinda the Sheep", "Sheep", foodHay, 5, "Mööh");
        animals.push(sheep); 

        let goat: Animal = new Animal("Arielle the Goat", "Goat", foodHay, 5, "Bääh");
        animals.push(goat); 

        let foodPig: Food = new Food("grains", 75); 
        let pig: Animal = new Animal("Tristan the Pig", "Pig", foodPig, 5, "Oink");
        animals.push(pig);

        startSing(); 
    }
    
    function startSing(): void {
        animals[0].sing();
        animals[0].eat();
        console.log(animals); 

        interval = setInterval(makeLyrics, 10000);
    }

    function makeLyrics(): void {
        animals[index].sing();
        animals[index].eat();
        index++; 
        if (index == 5) {
            clearInterval(interval);
            roleAgain(); 

        }
    }

    function roleAgain(): void {
        let div: HTMLElement = document.querySelector("div"); 
        let againButton: HTMLElement = document.createElement("button");
        againButton.setAttribute("type", "button"); 
        againButton.setAttribute("margin", "auto"); 
        againButton.innerHTML = "Next Day"; 
        div.appendChild(againButton); 

        index = 1; 
        againButton.addEventListener("click", restart); 
    }

    function restart(): void {
        let div: HTMLElement = document.querySelector("div"); 
        let againButton: HTMLElement = document.querySelector("button");
        div.removeChild(againButton); 
        startSing(); 
    }
}