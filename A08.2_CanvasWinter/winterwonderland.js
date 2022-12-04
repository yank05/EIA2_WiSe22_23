/*
Aufgabe: Birds_L08.2
Name: Yannik König
Matrikel: 271124
Datum: 04.12.2022
Quellen: drawBirdsSky insipiert von Jonas Atzenhofer
*/
var Winterwonderland;
(function (Winterwonderland) {
    window.addEventListener("load", handleLoad);
    let crc2;
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        let posMountains = { x: 0, y: 375 };
        drawBackground();
        drawSun({ x: 50, y: 50 });
        drawCloud({ x: 250, y: 110 }, { x: 90, y: 60 });
        drawMountains(posMountains, 60, 150);
        drawForest({ x: 0, y: 450 });
        drawSnowman({ x: 100, y: 620 });
        drawBirdHouse({ x: 280, y: 667 });
        drawBirdsSky();
    }
    function drawBackground() {
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "darkblue");
        gradient.addColorStop(0.6, "white");
        gradient.addColorStop(1, "lightblue");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawSun(_position) {
        let r1 = 40;
        let r2 = 80;
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    function drawCloud(_position, _size) {
        let numParticles = 50;
        let radParticle = 20;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radParticle);
        particle.arc(0, 0, radParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0.2)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let index = 0; index < numParticles; index++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawMountains(_position, _min, _max) {
        let stepMin = 20;
        let stepMax = 100;
        let x = 0;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
        crc2.lineTo(x, 0);
        crc2.closePath();
        let gradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, "HSLA(199, 10%, 50%, 0.4)");
        gradient.addColorStop(1, "HSLA(199, 10%, 100%, 1)");
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }
    function drawForest(_posStart) {
        let numBranches = 10;
        let maxRadius = 30;
        let branch = new Path2D();
        branch.arc(0, 0, maxRadius, 0, 2 * Math.PI);
        crc2.save();
        crc2.translate(_posStart.x, _posStart.y);
        crc2.fillStyle = "hsl(0, 37%, 16%)";
        let counterX = 0;
        let counterY = 0;
        for (let index = 0; index < numBranches; index++) {
            let x = 40;
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
        drawTree({ x: 10, y: 440 });
    }
    function drawTree(_posStart) {
        let x = _posStart.x;
        let y = _posStart.y;
        let lengthLineTotal = 30;
        let numTrees = 10;
        for (let index = 0; index < numTrees; index++) {
            if (index == 1 || index == 3 || index == 5 || index == 7 || index == 9) {
                y = y + 10;
            }
            for (let index2 = 0; index2 < 3; index2++) {
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
            if (index == 1 || index == 3 || index == 5 || index == 7 || index == 9) {
                y = y + 10;
            }
            lengthLineTotal = 30;
            for (let index3 = 0; index3 < 3; index3++) {
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
    function drawSnowman(_position) {
        let facePosition = { x: _position.x, y: _position.y - 125 };
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
    function drawBirdHouse(_position) {
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
        crc2.lineTo(-60, -150);
        crc2.lineWidth = 5;
        crc2.stroke();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(0, -220);
        crc2.lineTo(60, -150);
        crc2.lineWidth = 5;
        crc2.stroke();
        crc2.closePath();
        crc2.restore();
    }
    function drawBirdsSky() {
        for (let index = 0; index < randomNumber(8, 20); index++) {
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
    function randomNumber(_min, _max) {
        return Math.floor(Math.random() * _max) + _min;
    }
})(Winterwonderland || (Winterwonderland = {}));
//# sourceMappingURL=winterwonderland.js.map