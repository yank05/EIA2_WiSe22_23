namespace Polymorphism {
    export class Moveable {
        position: PosValue;
        velocity: PosValue;
        object: Path2D; 

        constructor(_position: PosValue, _velocity: PosValue) {
            this.position = _position;
            this.velocity = _velocity;
        }

         draw(_object: Path2D): void {
             crc2.save();
             crc2.translate(this.position.x, this.position.y);
             crc2.fill(_object);
             crc2.restore();
        }
    
        move(_step: number): void {
            let offset: PosValue = new PosValue(0, this.velocity.y);
            offset.scale(_step);
            this.position.add(offset);
            if (this.position.y > 677) {
                this.position.y = 0; 
            }
        }
    }
}
