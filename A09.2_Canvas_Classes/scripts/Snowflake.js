var WWL_Classes;
(function (WWL_Classes) {
    class Snowflake {
        position;
        velocity;
        size;
        snowflake;
        gradient;
        constructor(_size, _position) {
            if (_position)
                this.position = _position;
            else
                this.position = new WWL_Classes.PosValue(0, 0);
            this.velocity = new WWL_Classes.PosValue(0, 0);
            this.velocity.random(50, 150);
            this.size = _size;
        }
        form() {
            let form = new Path2D();
            this.gradient = WWL_Classes.crc2.createRadialGradient(0, 0, 0, 0, 0, 10);
            form.arc(0, 0, 10, 0, 2 * Math.PI);
            this.gradient.addColorStop(0, "hsla(0, 100%, 100%, 1)");
            this.gradient.addColorStop(1, "hsla(0, 100%, 100%, 0)");
            this.snowflake = form;
            // this.draw(); 
        }
        draw() {
            WWL_Classes.crc2.fillStyle = this.gradient;
            WWL_Classes.crc2.save();
            WWL_Classes.crc2.translate(this.position.x, this.position.y);
            WWL_Classes.crc2.scale(this.size, this.size);
            WWL_Classes.crc2.stroke(this.snowflake);
            WWL_Classes.crc2.restore();
        }
        move(_step) {
            let offset = new WWL_Classes.PosValue(0, this.velocity.y);
            offset.scale(_step);
            this.position.add(offset);
            if (this.position.y < 0)
                this.position.y += WWL_Classes.crc2.canvas.height;
            console.log(this.position.y);
            if (this.position.y > WWL_Classes.crc2.canvas.height)
                this.position.y -= WWL_Classes.crc2.canvas.height;
            console.log(this.position.y);
        }
    }
    WWL_Classes.Snowflake = Snowflake;
})(WWL_Classes || (WWL_Classes = {}));
//# sourceMappingURL=Snowflake.js.map