var Polymorphism;
(function (Polymorphism) {
    class BirdSky extends Polymorphism.Moveable {
        move(_step) {
            let offset = new Polymorphism.PosValue(this.velocity.x, this.velocity.y);
            offset.scale(_step);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += Polymorphism.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += Polymorphism.crc2.canvas.height;
            if (this.position.y > 380)
                this.position.y = 0;
            this.draw();
        }
        draw() {
            // Save the current drawing state
            Polymorphism.crc2.save();
            // Translate the canvas origin to the new position of the bird
            Polymorphism.crc2.translate(this.position.x, this.position.y);
            // Draw the bird
            Polymorphism.crc2.beginPath();
            Polymorphism.crc2.moveTo(0, 0);
            Polymorphism.crc2.bezierCurveTo(0, -10, -10, -10, -20, 0);
            Polymorphism.crc2.moveTo(0, 0);
            Polymorphism.crc2.strokeStyle = "black";
            Polymorphism.crc2.stroke();
            Polymorphism.crc2.closePath();
            Polymorphism.crc2.beginPath();
            Polymorphism.crc2.moveTo(0, 0);
            Polymorphism.crc2.bezierCurveTo(0, -10, 10, -10, 20, 0);
            Polymorphism.crc2.moveTo(0, 0);
            Polymorphism.crc2.strokeStyle = "black";
            Polymorphism.crc2.stroke();
            Polymorphism.crc2.closePath();
            // Restore the previous drawing state
            Polymorphism.crc2.restore();
        }
    }
    Polymorphism.BirdSky = BirdSky;
})(Polymorphism || (Polymorphism = {}));
//# sourceMappingURL=BirdSky.js.map