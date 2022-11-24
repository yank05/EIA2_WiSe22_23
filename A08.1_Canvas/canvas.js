/*
Aufgabe: Canvas_L08
Name: Yannik König
Matrikel: 271124
Datum: 22.11.2022
Quellen: insipiert bei Henning Reck
*/
var L08_Canvas;
(function (L08_Canvas) {
    window.addEventListener("load", handleLoad);
    let canvas = document.querySelector("canvas");
    let crc2 = canvas.getContext("2d");
    let explosionPosition = [];
    function handleLoad(_event) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        createBackground();
        createExplosion();
        createBoxes();
    }
    function createBackground() {
        let canvas = document.createElement("canvas");
        let elements = canvas.getContext("2d");
        canvas.width = 200;
        canvas.height = window.innerHeight;
        let color = "hsl(" + randomNumber(0, 360) + ", 100%, 50%)";
        let color2 = "hsl(" + randomNumber(0, 360) + ", 100%, 50%)";
        let shade1 = crc2.createRadialGradient(0, 0, randomNumber(30, 60), 0, 0, 900);
        shade1.addColorStop(0, color);
        shade1.addColorStop(1, color2);
        crc2.save();
        elements.fillStyle = shade1;
        elements.fillRect(0, 0, elements.canvas.width, elements.canvas.height);
        crc2.fillStyle = crc2.createPattern(elements.canvas, "repeat-x");
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.restore();
    }
    function createExplosion() {
        let lines = 300;
        let x = randomNumber(1, 1300);
        let y = randomNumber(1, 600);
        explosionPosition.push(x);
        explosionPosition.push(y);
        let color = "hsl(" + randomNumber(0, 360) + ", 100%, 50%)";
        for (let index = 0; index < lines; index++) {
            crc2.beginPath();
            crc2.moveTo(x, y);
            crc2.lineTo(randomNumber(1, 2000), randomNumber(1, 1000));
            crc2.lineWidth = randomNumber(1, 3);
            crc2.strokeStyle = color;
            crc2.stroke();
        }
    }
    function createBoxes() {
        crc2.beginPath();
        let xTem = explosionPosition[0] - 50;
        let yTem = explosionPosition[1] - 50;
        for (let i = 0; i < 50; i++) {
            let x = xTem + (Math.random() * 200);
            let y = yTem + (Math.random() * 200);
            console.log(xTem, yTem, x, y);
            let width = randomNumber(5, 50);
            let height = randomNumber(5, 50);
            crc2.shadowColor = "white";
            crc2.shadowBlur = 5;
            let color = "hsl(" + randomNumber(0, 360) + ", 100%, 50%)";
            crc2.fillStyle = color;
            crc2.fillRect(x, y, width, height);
            crc2.closePath();
        }
    }
    function randomNumber(_min, _max) {
        return Math.floor(Math.random() * _max) + _min;
    }
})(L08_Canvas || (L08_Canvas = {}));
//# sourceMappingURL=canvas.js.map