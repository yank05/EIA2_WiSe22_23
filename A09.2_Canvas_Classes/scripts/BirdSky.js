var WWL_Classes;
(function (WWL_Classes) {
    class BirdSky {
        position;
        velocity;
        constructor(_size) {
            this.position = new WWL_Classes.PosValue(160, 200);
            this.velocity = new WWL_Classes.PosValue(0, 0);
            this.velocity.random(100, 250);
        }
        move(_step) {
            let offset = new WWL_Classes.PosValue(this.velocity.x, this.velocity.y);
            offset.scale(_step);
            this.position.add(offset);
            console.log(this.position.x, this.position.y);
            if (this.position.x < 0)
                this.position.x += WWL_Classes.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += WWL_Classes.crc2.canvas.height;
            if (this.position.y > 380)
                this.position.y = 0;
            this.draw();
        }
        draw() {
            // Save the current drawing state
            WWL_Classes.crc2.save();
            // Translate the canvas origin to the new position of the bird
            WWL_Classes.crc2.translate(this.position.x, this.position.y);
            // Draw the bird
            WWL_Classes.crc2.beginPath();
            WWL_Classes.crc2.moveTo(0, 0);
            WWL_Classes.crc2.bezierCurveTo(0, -10, -10, -10, -20, 0);
            WWL_Classes.crc2.moveTo(0, 0);
            WWL_Classes.crc2.strokeStyle = "black";
            WWL_Classes.crc2.stroke();
            WWL_Classes.crc2.closePath();
            WWL_Classes.crc2.beginPath();
            WWL_Classes.crc2.moveTo(0, 0);
            WWL_Classes.crc2.bezierCurveTo(0, -10, 10, -10, 20, 0);
            WWL_Classes.crc2.moveTo(0, 0);
            WWL_Classes.crc2.strokeStyle = "black";
            WWL_Classes.crc2.stroke();
            WWL_Classes.crc2.closePath();
            // Restore the previous drawing state
            WWL_Classes.crc2.restore();
        }
    }
    WWL_Classes.BirdSky = BirdSky;
})(WWL_Classes || (WWL_Classes = {}));
//# sourceMappingURL=BirdSky.js.map