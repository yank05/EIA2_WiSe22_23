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
        }
    }
    OldMcDonald.Food = Food;
})(OldMcDonald || (OldMcDonald = {}));
//# sourceMappingURL=food.js.map