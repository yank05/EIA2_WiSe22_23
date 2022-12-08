namespace OldMcDonald {
    window.addEventListener("load", handleLoad); 
    
   
    


    export function handleLoad(): void {
        let animals: Animal[];
        let foodCow: Food = new Food("Hay", 100); 
        let cow: Animal = new Animal("Tom the Cow", "Cow", foodCow, 10, "Moo");
        animals.push(cow); 

        let foodDog: Food = new Food("Dog Food", 50); 
        let dog: Animal = new Animal("Billy the Dog", "Dog", foodDog, 2, "Woof");
        animals.push(dog); 

        let foodSheep: Food = new Food("Hay", foodCow.total); 
        let sheep: Animal = new Animal("Gerlinda the Sheep", "Sheep", foodSheep, 5, "Mööh");
        animals.push(sheep); 

        let foodGoat: Food = new Food("Hay", foodSheep.total); 
        let goat: Animal = new Animal("Arielle the Goat", "Goat", foodGoat, 5, "Bääh");
        animals.push(goat);

        let foodPig: Food = new Food("grains", 75); 
        let pig: Animal = new Animal("Tristan the Pig", "Pig", foodPig, 5, "Oink");
        animals.push(pig); 

        
        for (let index = 0; index < animals.length; index++) {
            
        }
        cow.sing(); 
        cow.eat();
    }
}