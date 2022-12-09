var OldMcDonald;
(function (OldMcDonald) {
    class Food {
        type;
        total;
        constructor(_type, _total) {
            this.type = _type;
            this.total = _total;
        }
        eat(_foodAmount) {
            let newTotal = this.total - _foodAmount;
            this.total = newTotal;
            console.log(this.total);
            this.print(_foodAmount);
        }
        ;
        print(_foodAmount) {
            let type = document.getElementById("type");
            type.innerHTML = this.type;
            let eaten = document.getElementById("eaten");
            eaten.innerHTML = _foodAmount.toString();
            let left = document.getElementById("left");
            left.innerHTML = this.total.toString();
        }
    }
    OldMcDonald.Food = Food;
})(OldMcDonald || (OldMcDonald = {}));
//# sourceMappingURL=food.js.map