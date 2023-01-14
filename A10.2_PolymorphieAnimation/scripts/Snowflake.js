var Polymorphism;
(function (Polymorphism) {
    class Snowflake extends Polymorphism.Moveable {
        size;
        snowflake;
        gradient;
        constructor(_size, _position) {
            super(_position);
            if (_position)
                this.position = _position.copy();
            else
                this.position = new Polymorphism.PosValue(0, 0);
            this.velocity = new Polymorphism.PosValue(0, 0);
            this.velocity.random(50, 150);
            this.size = _size;
        }
        create(_xStep) {
            let start = Polymorphism.crc2.getTransform();
            this.snowflake = new Path2D();
            this.gradient = Polymorphism.crc2.createRadialGradient(0, 0, 0, 0, 0, 10);
            this.snowflake.arc(0, 0, 10, 0, 2 * Math.PI);
            this.gradient.addColorStop(0, "hsla(0, 100%, 100%, 1)");
            this.gradient.addColorStop(1, "hsla(0, 100%, 100%, 0)");
            Polymorphism.crc2.fillStyle = this.gradient;
            if (_xStep) {
                this.position.x = this.position.x + _xStep;
            }
            Polymorphism.crc2.save();
            Polymorphism.crc2.translate(this.position.x, this.position.y);
            Polymorphism.crc2.scale(this.size, this.size);
            Polymorphism.crc2.fill(this.snowflake);
            Polymorphism.crc2.restore();
            Polymorphism.crc2.setTransform(start);
        }
        move(_step) {
            let offset = new Polymorphism.PosValue(0, this.velocity.y);
            offset.scale(_step);
            this.position.add(offset);
            if (this.position.y > 677) {
                this.position.y = 0;
            }
            this.create();
        }
    }
    Polymorphism.Snowflake = Snowflake;
})(Polymorphism || (Polymorphism = {}));
//# sourceMappingURL=Snowflake.js.map