namespace Winterwonderland {
    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;

    interface PosValue {
        x: number;
        y: number; 
    }


    function handleLoad(): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        let posMountains: PosValue = { x: 0, y: 375};

        drawBackground(); 
        drawSun({x: 50, y: 50}); 
        drawCloud({x: 250, y: 110}, {x: 90, y: 60}); 
        drawMountains(posMountains, 60, 150);
        drawForest({x: 0, y: 450}); 
    }

    function drawBackground(): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(0.6, "white");
        gradient.addColorStop(1, "white");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    function drawSun(_position: PosValue): void {
            let r1: number = 40;
            let r2: number = 80;
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
    
            gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
            gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
    
            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.fillStyle = gradient;
            crc2.arc(0, 0, r2, 0, 2 * Math.PI); 
            crc2.fill();
            crc2.restore();
        }

    function drawCloud(_position: PosValue, _size: PosValue): void {
        let numParticles: number = 50;
        let radParticle: number = 20;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radParticle);

        particle.arc(0, 0, radParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0.2)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;

        for (let index: number = 0; index < numParticles; index++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }

    function drawMountains(_position: PosValue, _min: number, _max: number): void {
        let stepMin: number = 20;
        let stepMax: number = 100;
        let x: number = 0;

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -_min - Math.random() * (_max - _min);

            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.2)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0.7)");

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();
    }

    function drawForest(_posStart: PosValue): void {
            let numBranches: number = 10;
            let maxRadius: number = 30;
            let branch: Path2D = new Path2D();
            branch.arc(0, 0, maxRadius, 0, 2 * Math.PI);

            crc2.save(); 
            crc2.translate(_posStart.x, _posStart.y); 
            crc2.fillStyle = "hsl(0, 37%, 16%)";

            let counterX: number = 0;
            let counterY: number = 0; 

            for (let index: number = 0; index < numBranches; index++) {
                let x: number = 40; 
                if (counterY == -10) {
                    counterY = 0; 
                }
                else {
                    counterY = counterY - 10; 
                }
                crc2.fillRect(counterX, counterY, 20, 40);
                counterX = counterX + x;
                console.log(counterX); 
            } 
            crc2.restore(); 
            drawTree({x: 10, y: 440}); 
        } 
   
    function drawTree(_posStart: PosValue): void {

            let x: number = _posStart.x;
            let y: number = _posStart.y; 
            let lengthLineTotal: number = 30;
            let numTrees: number = 10; 

            for (let index: number = 0; index < numTrees; index++) { 
                if (index == 1 || index == 3 || index == 5 || index == 7 || index == 9)  {
                    y = y + 10; 
                }
                for (let index2: number = 0; index2 < 3;  index2++) {
                    crc2.save(); 
                    crc2.translate(x, y); 
                    crc2.beginPath();
                    crc2.moveTo(0, 0);
                    crc2.lineTo(-lengthLineTotal, 0);
                    crc2.lineTo(0, -20); 
                    crc2.closePath();
                    crc2.lineWidth = 2;
                    crc2.strokeStyle = "green";
                    crc2.stroke();
                    crc2.fillStyle = "green";
                    crc2.fill();
                    crc2.restore();
                    y = y - 20;        
            } 
                y = 440; 
                if (index == 1 || index == 3 || index == 5 || index == 7 || index == 9)  {
                    y = y + 10; 
                }
                lengthLineTotal = 30;
                for (let index3: number = 0; index3 < 3;  index3++) {
                    crc2.save(); 
                    crc2.translate(x, y); 
                    crc2.beginPath();
                    crc2.moveTo(0, 0);
                    crc2.lineTo(lengthLineTotal, 0);
                    crc2.lineTo(0, -20); 
                    crc2.closePath();
                    crc2.lineWidth = 2;
                    crc2.strokeStyle = "green";
                    crc2.stroke();
                    crc2.fillStyle = "green";
                    crc2.fill();
                    crc2.restore(); 
        
                    y = y - 20;    
                          
            } 
                x = x + 40; 
                y = 440; 
                console.log(y); 
            }
               }


    function randomNumber(_min: number, _max: number): number {
        return Math.floor(Math.random() * _max) + _min;
            }
        }

