namespace WWL_Classes {
    export class BirdSky {
        position: PosValue; 
        velocity: PosValue;
      
        constructor() {
        this.position = new PosValue(160, 200);
        this.velocity = new PosValue(0, 0);
        this.velocity.random(100, 250);
        }
      
        move(_step: number): void {
            let offset: PosValue = new PosValue(this.velocity.x, this.velocity.y);
            offset.scale(_step);
            this.position.add(offset); 

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.y > 380) 
                this.position.y = 0; 
            this.draw(); 
        }
        draw(): void {
        // Save the current drawing state
        crc2.save();
    
        // Translate the canvas origin to the new position of the bird
        crc2.translate(this.position.x, this.position.y);
    
        // Draw the bird
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.bezierCurveTo(0, -10, -10, -10, -20, 0);
        crc2.moveTo(0, 0);
        crc2.strokeStyle = "black";
        crc2.stroke();
        crc2.closePath();
    
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.bezierCurveTo(0, -10, 10, -10, 20, 0);
        crc2.moveTo(0, 0);
        crc2.strokeStyle = "black";
        crc2.stroke();
        crc2.closePath();
    
        // Restore the previous drawing state
        crc2.restore();
        }
      }
    }
