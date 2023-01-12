var Polymorphism;
(function (Polymorphism) {
    class Snowflake extends Polymorphism.Moveable {
        size;
        snowflake;
        gradient;
        create(_xStep) {
            this.snowflake = new Path2D();
            this.gradient = Polymorphism.crc2.createRadialGradient(0, 0, 0, 0, 0, 10);
            this.snowflake.arc(0, 0, 10, 0, 2 * Math.PI);
            this.gradient.addColorStop(0, "hsla(0, 100%, 100%, 1)");
            this.gradient.addColorStop(1, "hsla(0, 100%, 100%, 0)");
            Polymorphism.crc2.fillStyle = this.gradient;
            if (_xStep) {
                this.position.x = this.position.x + _xStep;
            }
        }
    }
    Polymorphism.Snowflake = Snowflake;
})(Polymorphism || (Polymorphism = {}));
//# sourceMappingURL=Snowflake.js.map