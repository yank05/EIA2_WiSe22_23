var L09_Classes;
(function (L09_Classes) {
    class Vector {
        x = 0;
        y = 0;
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
    }
    let v1 = new Vector(10, 5);
    v1.set(5, 5);
    v1.scale(2);
    console.log(v1);
})(L09_Classes || (L09_Classes = {}));
//# sourceMappingURL=script.js.map