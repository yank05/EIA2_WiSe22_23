var Polymorphism;
(function (Polymorphism) {
    class Moveable {
        position;
        velocity;
        object;
        constructor(_position, _velocity) {
            this.position = _position;
            this.velocity = _velocity;
        }
        draw(_object) {
            Polymorphism.crc2.save();
            Polymorphism.crc2.translate(this.position.x, this.position.y);
            Polymorphism.crc2.fill(_object);
            Polymorphism.crc2.restore();
        }
        move(_step) {
            let offset = new Polymorphism.PosValue(0, this.velocity.y);
            offset.scale(_step);
            this.position.add(offset);
            if (this.position.y > 677) {
                this.position.y = 0;
            }
        }
    }
    Polymorphism.Moveable = Moveable;
})(Polymorphism || (Polymorphism = {}));
//# sourceMappingURL=Moveable.js.map