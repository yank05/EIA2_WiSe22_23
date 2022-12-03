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
        drawForest();
    }
    function drawBackground() {
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(0.6, "white");
        gradient.addColorStop(1, "white");
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
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.2)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0.7)");
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }
    function drawForest() {
        let numBranches = 10;
        let maxRadius = 30;
        let branch = new Path2D();
        branch.arc(0, 0, maxRadius, 0, 2 * Math.PI);
        crc2.save();
        crc2.translate(0, 450);
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
        drawTree();
    }
    function drawTree() {
        let middleBranch;
        let height;
        let x = 10;
        let y = 440;
        let lengthLineTotal = 30;
        let numTrees = 10;
        for (let index = 0; index < numTrees; index++) {
            if (index == 1 || index == 3 || index == 5 || index == 7 || index == 9) {
                y = y + 10;
                console.log("Hallo2");
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
                lengthLineTotal--;
                y = y - 20;
            }
            y = 440;
            if (index == 1 || index == 3 || index == 5 || index == 7 || index == 9) {
                y = y + 10;
                console.log("Hallo2");
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
                lengthLineTotal--;
                y = y - 20;
            }
            x = x + 40;
            y = 440;
            console.log(y);
        }
    }
    function randomNumber(_min, _max) {
        return Math.floor(Math.random() * _max) + _min;
    }
})(Winterwonderland || (Winterwonderland = {}));
//# sourceMappingURL=winterwonderland.js.map