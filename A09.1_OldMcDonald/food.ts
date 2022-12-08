namespace OldMcDonald {
    export class Food {
        type: string;
        total: number; 

        constructor(_type: string, _total: number) {
            this.type = _type;
            this.total = _total; 
        }

        eat(_foodAmount: number): void {
           let newTotal: number = this.total - _foodAmount;
           this.total = newTotal; 
           console.log(this.total); 
        }
    }
}