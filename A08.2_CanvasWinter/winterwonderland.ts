/*
Aufgabe: Birds_L08.2
Name: Yannik König
Matrikel: 271124
Datum: 04.12.2022
Quellen: drawBirdsSky insipiert von Jonas Atzenhofer, drawBirdsFront von Henning Reck
*/

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
        drawSnowman({x: 100, y: 620}); 
        drawBirdHouse({x: 280, y: 667}); 
        drawBirdsSky(); 
        drawBirdsFront(); 
        drawSnowflakes();
    }

    function drawBackground(): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "darkblue");
        gradient.addColorStop(0.6, "white");
        gradient.addColorStop(1, "lightblue");

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
        gradient.addColorStop(0, "HSLA(199, 10%, 50%, 0.4)");
        gradient.addColorStop(1, "HSLA(199, 10%, 100%, 1)");
       

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


    function drawSnowman(_position: PosValue): void {
        let facePosition: PosValue = {x: _position.x, y: _position.y - 125}; 
        crc2.save(); 
        crc2.translate(_position.x, _position.y);

        crc2.strokeStyle = "white";
        crc2.fillStyle = "white";
        crc2.lineWidth = 0;

        crc2.beginPath();
        crc2.arc(0, 0, 40, 0, 2 * Math.PI);
        crc2.fill();
        crc2.stroke();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(0, -70, 30, 0, 2 * Math.PI);
        crc2.fill();
        crc2.stroke();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(0, -125, 25, 0, 2 * Math.PI);
        crc2.fill();
        crc2.stroke();
        crc2.closePath();

        crc2.restore();

        crc2.save(); 
        
        crc2.translate(facePosition.x, facePosition.y); 

        crc2.fillStyle = "black";
        crc2.beginPath();
        crc2.arc(-10, -10, 5, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(10, -10, 5, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath(); 

        crc2.beginPath();
        crc2.lineWidth = 5;
        crc2.strokeStyle = "orange";
        crc2.moveTo(0, 0);
        crc2.lineTo(15, 10); 
        crc2.closePath(); 
        crc2.stroke(); 

        crc2.restore();
        }

    function drawBirdHouse(_position: PosValue): void {
        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.strokeStyle = "HSLA(30, 100%, 20%, 1)";
        crc2.beginPath();
        crc2.moveTo(20, 0);
        crc2.lineTo(20, -100);
        crc2.lineWidth = 10;
        crc2.stroke(); 
        crc2.closePath();

        crc2.beginPath();
        crc2.moveTo(-20, 0);
        crc2.lineTo(-20, -100);
        crc2.lineWidth = 10;
        crc2.stroke(); 
        crc2.closePath();

        crc2.beginPath();
        crc2.moveTo(-50, -100);
        crc2.lineTo(50, -100);
        crc2.lineWidth = 15;
        crc2.stroke();
        crc2.closePath(); 

        crc2.beginPath();
        crc2.moveTo(-40, -105);
        crc2.lineTo(-40, -170);
        crc2.lineTo(40, -105);
        crc2.moveTo(40, -170);
        crc2.lineTo(-40, -170); 
        crc2.lineTo(40, -105); 
        crc2.fillStyle = "hsla(34, 64%, 14%, 1)";
        crc2.fill();
        crc2.closePath(); 

        crc2.beginPath();
        crc2.moveTo(0, -220);
        crc2.lineTo(-60, - 150); 
        crc2.lineWidth = 5;
        crc2.stroke();
        crc2.closePath(); 

        crc2.beginPath();
        crc2.moveTo(0, -220);
        crc2.lineTo(60, - 150); 
        crc2.lineWidth = 5;
        crc2.stroke();
        crc2.closePath(); 

        crc2.restore(); 
    }

    function drawBirdsSky(): void {
    for (let index: number = 0; index < randomNumber(8, 20); index++) {
        crc2.save();
        crc2.translate(randomNumber(0, 375), randomNumber(0, 300));
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

        crc2.restore();
        }
    }

    function drawBirdsFront(): void {
         
            let birdsAmount: number = 10;
            let birdsColours: string[] = ["hsl(269, 100%, 50%)", "hsl(336, 100%, 50%)", "hsl(19, 100%, 50%)", 
            "hsla(344, 100%, 50%, 1)", "hsla(192, 100%, 50%, 1)", "hsla(58, 100%, 50%, 1)", "hsla(256, 22%, 50%, 1)", 
            "hsla(70, 22%, 50%, 1)", "hsla(7, 22%, 24%, 1)", "hsla(7, 22%, 100%, 1)"];
            let birdsSize: PosValue = { x: 375, y: 200 };
    
            let birdsDirection: number[] = [1, -1];
            crc2.save();  
            crc2.translate(200, 600);
    
            for (let index: number = 0; index < birdsAmount; index++) {
                let x: number = (Math.random() - 0.5) * birdsSize.x;
                let y: number = - (Math.random() * birdsSize.y);
                let randomScale: number = (Math.random() * .3) + 0.2;
                crc2.save();
                crc2.translate(x, y);
    
                crc2.scale(randomScale, randomScale);
                crc2.scale(birdsDirection[Math.floor(Math.random() * (3) - 1)], 1);
    
                // Körper
                crc2.beginPath();
                crc2.rotate((Math.PI / 180) * 30);
                crc2.arc(8, 12, 50, 0, 1 * Math.PI, false);
                crc2.fillStyle = birdsColours[index];
                crc2.lineWidth = 5;
                crc2.strokeStyle = "black";
                crc2.fill();
                crc2.stroke();
    
                // Schnabel
                crc2.beginPath();
                crc2.moveTo(-60, 25);
                crc2.lineTo(-80, 15);
                crc2.lineTo(-60, -5);
                crc2.fillStyle = "yellow";
                crc2.fill();
    
                crc2.closePath();
    
                // Kopf
                crc2.beginPath();
                crc2.arc(0 - 40, 0 + 8, 23, 0, 2 * Math.PI, false);
                crc2.fillStyle = birdsColours[index + 1];
                crc2.fill();
                crc2.stroke();
    
                // Bein links
                crc2.beginPath();
                crc2.moveTo(15, 60);
                crc2.lineTo(40, 100);
                crc2.lineWidth = 5;
                crc2.stroke();
    
                // Bein rechts
                crc2.beginPath();
                crc2.moveTo(30, 60);
                crc2.lineTo(55, 95);
                crc2.lineWidth = 5;
                crc2.stroke();
    
                crc2.restore();
            }
            crc2.restore();
        }

    function drawSnowflakes(): void {
        let snowflake: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, 10);

        snowflake.arc(0, 0, 10, 0, 2 * Math.PI);
        gradient.addColorStop(0, "hsla(0, 100%, 100%, 1)");
        gradient.addColorStop(1, "hsla(0, 100%, 100%, 0)");

        crc2.translate(320, 600);
        crc2.fillStyle = gradient;

        for (let index: number = 0; index < 50; index++) {
            let x: number = randomNumber(0, 375) * -1;
            let y: number = - randomNumber(0, 667);
            console.log(x,y); 
            crc2.save();
            crc2.translate(x, y);
            crc2.fill(snowflake);
            crc2.restore();
        }
        crc2.restore();
    }
    function randomNumber(_min: number, _max: number): number {
        return Math.floor(Math.random() * _max) + _min;
            }
        }

