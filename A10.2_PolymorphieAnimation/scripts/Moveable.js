var Polymorphism;
(function (Polymorphism) {
    class Moveable {
        position;
        velocity;
        constructor(_position, _velocity) {
            this.position = _position.copy();
            if (_velocity) {
                this.velocity = _velocity.copy();
            }
            else
                this.velocity = new Polymorphism.PosValue(0, 0);
        }
    }
    Polymorphism.Moveable = Moveable;
})(Polymorphism || (Polymorphism = {}));
//# sourceMappingURL=Moveable.js.map