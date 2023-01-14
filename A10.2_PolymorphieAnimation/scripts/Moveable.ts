namespace Polymorphism {
    export class Moveable {
        position: PosValue;
        velocity: PosValue;

        constructor(_position?: PosValue, _velocity?: PosValue) {
            this.position = _position.copy();
            if (_velocity) {
            this.velocity = _velocity.copy();
            }
            else
            this.velocity = new PosValue(0, 0);
        }
    }
}