namespace Polymorphism {
    export class Snowflake extends Moveable {
        size: number;
        declare position: PosValue;
        declare velocity: PosValue;
        snowflake: Path2D;
        gradient: CanvasGradient;

        constructor(_size: number, _position?: PosValue) {
        super(_position);
        if (_position)
            this.position = _position.copy();
        else
            this.position = new PosValue(0, 0);
            
        this.velocity = new PosValue(0, 0);
        this.velocity.random(50, 150);
        this.size = _size;
    }

    create(_xStep?: number): void {
        let start: DOMMatrix = crc2.getTransform();

        this.snowflake = new Path2D();
        this.gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, 10);

        this.snowflake.arc(0, 0, 10, 0, 2 * Math.PI);
        this.gradient.addColorStop(0, "hsla(0, 100%, 100%, 1)");
        this.gradient.addColorStop(1, "hsla(0, 100%, 100%, 0)");
        crc2.fillStyle = this.gradient; 
        if (_xStep) {
            this.position.x = this.position.x + _xStep; 
        }

        crc2.save();
        crc2.translate(this.position.x, this.position.y);
        crc2.scale(this.size, this.size);
        crc2.fill(this.snowflake);
        crc2.restore();
        crc2.setTransform(start);
    }

        move(_step: number): void {
        let offset: PosValue = new PosValue(0, this.velocity.y);
        offset.scale(_step);
        this.position.add(offset);
        if (this.position.y > 677) {
            this.position.y = 0; 
        }
        this.create();
    }
    }
}
