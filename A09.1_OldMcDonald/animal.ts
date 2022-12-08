namespace OldMcDonald {
    export class Animal {
        name: string;
        species: string;
        food: Food; 
        foodAmount: number;
        sound: string; 

        constructor(_name: string, _species: string, _food: Food, _foodAmount: number, _sound: string) {
            this.name = _name;
            this.species = _species;
            this.food = _food;
            this.foodAmount = _foodAmount;
            this.sound = _sound; 
        }
        
        public eat(): void {
            console.log(this.name + "sings");
            
            this.food.eat(this.foodAmount); 
            
        }

        public sing(): void {
        let nameText: HTMLElement = document.getElementById("name");
        nameText.innerHTML = this.name;
        
        let speciesText: HTMLElement = document.getElementById("animal");
        speciesText.innerHTML = this.species + "s"; 

        for (let index: number = 0; index < 5; index++) {
         let sound: HTMLElement = document.getElementById("sound" + index); 
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
}