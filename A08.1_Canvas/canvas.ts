/*
Aufgabe: Canvas_L08
Name: Yannik König
Matrikel: 271124
Datum: 22.11.2022
Quellen: insipiert bei Henning Reck
*/



namespace L08_Canvas {

    window.addEventListener("load", handleLoad);

    interface Vector {
        [key: string]: number;
    }

    let canvas: HTMLCanvasElement =<HTMLCanvasElement>document.querySelector("canvas");
    let crc2: CanvasRenderingContext2D =<CanvasRenderingContext2D>canvas.getContext("2d");
    let explosionPosition: number[] = []; 

    function handleLoad(_event: Event): void {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        createBackground();
        createExplosion();
        createBoxes();
    }

    function createBackground(): void {
        let canvas: HTMLCanvasElement = document.createElement("canvas");
        let elements: CanvasRenderingContext2D =<CanvasRenderingContext2D>canvas.getContext("2d");
        canvas.width = 200;
        canvas.height = window.innerHeight; 

        let color: string = "hsl(" + randomNumber(0, 360) + ", 100%, 50%)";
        let color2: string = "hsl(" + randomNumber(0, 360) + ", 100%, 50%)"; 
        

        let shade1: CanvasGradient = crc2.createRadialGradient(0, 0, randomNumber(30, 60), 0, 0, 900);
        shade1.addColorStop(0, color);
        shade1.addColorStop(1, color2);

        crc2.save();

        elements.fillStyle = shade1;
        elements.fillRect(0, 0, elements.canvas.width, elements.canvas.height);

        crc2.fillStyle = <CanvasPattern>crc2.createPattern(elements.canvas, "repeat-x");
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        crc2.restore();

    }

    function createExplosion(): void {
        let lines: number = 300;
        let x: number = randomNumber(1, 1300);
        let y: number = randomNumber(1, 600); 

        explosionPosition.push(x);
        explosionPosition.push(y); 

        let color: string = "hsl(" + randomNumber(0, 360) + ", 100%, 50%)"; 

        for (let index: number = 0; index < lines; index++) {
            crc2.beginPath();
            crc2.moveTo(x, y);
            crc2.lineTo(randomNumber(1, 2000), randomNumber(1, 1000));
            crc2.lineWidth = randomNumber(1, 3);
            crc2.strokeStyle = color;
            crc2.stroke();
        }
    }

    function createBoxes(): void {
        crc2.beginPath();

        let xTem: number = explosionPosition[0] - 50;
        let yTem: number = explosionPosition[1] - 50; 

        for (let i: number = 0; i < 50; i++) {
            let x: number = xTem + (Math.random() * 200);
            let y: number = yTem + (Math.random() * 200); 
            console.log(xTem, yTem, x, y);
            let width: number = randomNumber(5, 50);
            let height: number = randomNumber(5, 50);
            crc2.shadowColor = "white";
            crc2.shadowBlur = 5;
            let color: string = "hsl(" + randomNumber(0, 360) + ", 100%, 50%)";
            crc2.fillStyle = color;
            crc2.fillRect(x, y, width, height);
            crc2.closePath();
        }
    }

    function randomNumber(_min: number, _max: number): number {
        return Math.floor(Math.random() * _max) + _min;
    }
}