/*
Aufgabe: Polymorphie_L10.2
Name: Yannik König
Matrikel: 271124
Datum: 14.01.2023
Quellen: Jonas Atzenhofer
*/
var Polymorphism;
(function (Polymorphism) {
    window.addEventListener("load", handleLoad);
    let moveables = [];
    let background;
    let xStep = 0;
    function handleLoad() {
        Polymorphism.canvas = document.querySelector("canvas");
        if (!Polymorphism.canvas)
            return;
        Polymorphism.crc2 = Polymorphism.canvas.getContext("2d");
        drawBackground();
        createBirds();
        createSnowflakes();
        setInterval(update, 50);
    }
    // Start the animation
    function drawBackground() {
        let posMountains = new Polymorphism.PosValue(0, 375);
        let sunPos = new Polymorphism.PosValue(50, 50);
        let cloudPos = new Polymorphism.PosValue(250, 110);
        let cloudSize = new Polymorphism.PosValue(90, 60);
        let forestStart = new Polymorphism.PosValue(0, 450);
        let snowmanPos = new Polymorphism.PosValue(100, 620);
        let birdhousePos = new Polymorphism.PosValue(280, 667);
        drawGradient();
        drawSun(sunPos);
        drawCloud(cloudPos, cloudSize);
        drawMountains(posMountains, 60, 150);
        drawForest(forestStart);
        drawSnowman(snowmanPos);
        drawBirdHouse(birdhousePos);
        drawBirdsFront();
        background = Polymorphism.crc2.getImageData(0, 0, Polymorphism.crc2.canvas.width, Polymorphism.crc2.canvas.height);
    }
    function drawGradient() {
        let gradient = Polymorphism.crc2.createLinearGradient(0, 0, 0, Polymorphism.crc2.canvas.height);
        gradient.addColorStop(0, "darkblue");
        gradient.addColorStop(0.6, "white");
        gradient.addColorStop(1, "lightblue");
        Polymorphism.crc2.fillStyle = gradient;
        Polymorphism.crc2.fillRect(0, 0, Polymorphism.crc2.canvas.width, Polymorphism.crc2.canvas.height);
    }
    function drawSun(_position) {
        let r1 = 40;
        let r2 = 80;
        let gradient = Polymorphism.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        Polymorphism.crc2.save();
        Polymorphism.crc2.translate(_position.x, _position.y);
        Polymorphism.crc2.fillStyle = gradient;
        Polymorphism.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        Polymorphism.crc2.fill();
        Polymorphism.crc2.restore();
    }
    function drawCloud(_position, _size) {
        let numParticles = 50;
        let radParticle = 20;
        let particle = new Path2D();
        let gradient = Polymorphism.crc2.createRadialGradient(0, 0, 0, 0, 0, radParticle);
        particle.arc(0, 0, radParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0.2)");
        Polymorphism.crc2.save();
        Polymorphism.crc2.translate(_position.x, _position.y);
        Polymorphism.crc2.fillStyle = gradient;
        for (let index = 0; index < numParticles; index++) {
            Polymorphism.crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            Polymorphism.crc2.translate(x, y);
            Polymorphism.crc2.fill(particle);
            Polymorphism.crc2.restore();
        }
        Polymorphism.crc2.restore();
    }
    function drawMountains(_position, _min, _max) {
        let stepMin = 20;
        let stepMax = 100;
        let x = 0;
        Polymorphism.crc2.save();
        Polymorphism.crc2.translate(_position.x, _position.y);
        Polymorphism.crc2.beginPath();
        Polymorphism.crc2.moveTo(0, 0);
        Polymorphism.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            Polymorphism.crc2.lineTo(x, y);
        } while (x < Polymorphism.crc2.canvas.width);
        Polymorphism.crc2.lineTo(x, 0);
        Polymorphism.crc2.closePath();
        let gradient = Polymorphism.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, "HSLA(199, 10%, 50%, 0.4)");
        gradient.addColorStop(1, "HSLA(199, 10%, 100%, 1)");
        Polymorphism.crc2.fillStyle = gradient;
        Polymorphism.crc2.fill();
        Polymorphism.crc2.restore();
    }
    function drawForest(_posStart) {
        let numBranches = 10;
        let maxRadius = 30;
        let branch = new Path2D();
        branch.arc(0, 0, maxRadius, 0, 2 * Math.PI);
        Polymorphism.crc2.save();
        Polymorphism.crc2.translate(_posStart.x, _posStart.y);
        Polymorphism.crc2.fillStyle = "hsl(0, 37%, 16%)";
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
            Polymorphism.crc2.fillRect(counterX, counterY, 20, 40);
            counterX = counterX + x;
            console.log(counterX);
        }
        Polymorphism.crc2.restore();
        let treePos = new Polymorphism.PosValue(10, 440);
        drawTree(treePos);
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
                Polymorphism.crc2.save();
                Polymorphism.crc2.translate(x, y);
                Polymorphism.crc2.beginPath();
                Polymorphism.crc2.moveTo(0, 0);
                Polymorphism.crc2.lineTo(-lengthLineTotal, 0);
                Polymorphism.crc2.lineTo(0, -20);
                Polymorphism.crc2.closePath();
                Polymorphism.crc2.lineWidth = 2;
                Polymorphism.crc2.strokeStyle = "green";
                Polymorphism.crc2.stroke();
                Polymorphism.crc2.fillStyle = "green";
                Polymorphism.crc2.fill();
                Polymorphism.crc2.restore();
                y = y - 20;
            }
            y = 440;
            if (index == 1 || index == 3 || index == 5 || index == 7 || index == 9) {
                y = y + 10;
            }
            lengthLineTotal = 30;
            for (let index3 = 0; index3 < 3; index3++) {
                Polymorphism.crc2.save();
                Polymorphism.crc2.translate(x, y);
                Polymorphism.crc2.beginPath();
                Polymorphism.crc2.moveTo(0, 0);
                Polymorphism.crc2.lineTo(lengthLineTotal, 0);
                Polymorphism.crc2.lineTo(0, -20);
                Polymorphism.crc2.closePath();
                Polymorphism.crc2.lineWidth = 2;
                Polymorphism.crc2.strokeStyle = "green";
                Polymorphism.crc2.stroke();
                Polymorphism.crc2.fillStyle = "green";
                Polymorphism.crc2.fill();
                Polymorphism.crc2.restore();
                y = y - 20;
            }
            x = x + 40;
            y = 440;
            console.log(y);
        }
    }
    function drawSnowman(_position) {
        let x = _position.x;
        let y = _position.y - 125;
        let facePosition = new Polymorphism.PosValue(x, y);
        Polymorphism.crc2.save();
        Polymorphism.crc2.translate(_position.x, _position.y);
        Polymorphism.crc2.strokeStyle = "white";
        Polymorphism.crc2.fillStyle = "white";
        Polymorphism.crc2.lineWidth = 0;
        Polymorphism.crc2.beginPath();
        Polymorphism.crc2.arc(0, 0, 40, 0, 2 * Math.PI);
        Polymorphism.crc2.fill();
        Polymorphism.crc2.stroke();
        Polymorphism.crc2.closePath();
        Polymorphism.crc2.beginPath();
        Polymorphism.crc2.arc(0, -70, 30, 0, 2 * Math.PI);
        Polymorphism.crc2.fill();
        Polymorphism.crc2.stroke();
        Polymorphism.crc2.closePath();
        Polymorphism.crc2.beginPath();
        Polymorphism.crc2.arc(0, -125, 25, 0, 2 * Math.PI);
        Polymorphism.crc2.fill();
        Polymorphism.crc2.stroke();
        Polymorphism.crc2.closePath();
        Polymorphism.crc2.restore();
        Polymorphism.crc2.save();
        Polymorphism.crc2.translate(facePosition.x, facePosition.y);
        Polymorphism.crc2.fillStyle = "black";
        Polymorphism.crc2.beginPath();
        Polymorphism.crc2.arc(-10, -10, 5, 0, 2 * Math.PI);
        Polymorphism.crc2.fill();
        Polymorphism.crc2.closePath();
        Polymorphism.crc2.beginPath();
        Polymorphism.crc2.arc(10, -10, 5, 0, 2 * Math.PI);
        Polymorphism.crc2.fill();
        Polymorphism.crc2.closePath();
        Polymorphism.crc2.beginPath();
        Polymorphism.crc2.lineWidth = 5;
        Polymorphism.crc2.strokeStyle = "orange";
        Polymorphism.crc2.moveTo(0, 0);
        Polymorphism.crc2.lineTo(15, 10);
        Polymorphism.crc2.closePath();
        Polymorphism.crc2.stroke();
        Polymorphism.crc2.restore();
    }
    function drawBirdHouse(_position) {
        Polymorphism.crc2.save();
        Polymorphism.crc2.translate(_position.x, _position.y);
        Polymorphism.crc2.strokeStyle = "HSLA(30, 100%, 20%, 1)";
        Polymorphism.crc2.beginPath();
        Polymorphism.crc2.moveTo(20, 0);
        Polymorphism.crc2.lineTo(20, -100);
        Polymorphism.crc2.lineWidth = 10;
        Polymorphism.crc2.stroke();
        Polymorphism.crc2.closePath();
        Polymorphism.crc2.beginPath();
        Polymorphism.crc2.moveTo(-20, 0);
        Polymorphism.crc2.lineTo(-20, -100);
        Polymorphism.crc2.lineWidth = 10;
        Polymorphism.crc2.stroke();
        Polymorphism.crc2.closePath();
        Polymorphism.crc2.beginPath();
        Polymorphism.crc2.moveTo(-50, -100);
        Polymorphism.crc2.lineTo(50, -100);
        Polymorphism.crc2.lineWidth = 15;
        Polymorphism.crc2.stroke();
        Polymorphism.crc2.closePath();
        Polymorphism.crc2.beginPath();
        Polymorphism.crc2.moveTo(-40, -105);
        Polymorphism.crc2.lineTo(-40, -170);
        Polymorphism.crc2.lineTo(40, -105);
        Polymorphism.crc2.moveTo(40, -170);
        Polymorphism.crc2.lineTo(-40, -170);
        Polymorphism.crc2.lineTo(40, -105);
        Polymorphism.crc2.fillStyle = "hsla(34, 64%, 14%, 1)";
        Polymorphism.crc2.fill();
        Polymorphism.crc2.closePath();
        Polymorphism.crc2.beginPath();
        Polymorphism.crc2.moveTo(0, -220);
        Polymorphism.crc2.lineTo(-60, -150);
        Polymorphism.crc2.lineWidth = 5;
        Polymorphism.crc2.stroke();
        Polymorphism.crc2.closePath();
        Polymorphism.crc2.beginPath();
        Polymorphism.crc2.moveTo(0, -220);
        Polymorphism.crc2.lineTo(60, -150);
        Polymorphism.crc2.lineWidth = 5;
        Polymorphism.crc2.stroke();
        Polymorphism.crc2.closePath();
        Polymorphism.crc2.restore();
    }
    function drawBirdsFront() {
        let birdsAmount = 10;
        let birdsColours = ["hsl(269, 100%, 50%)", "hsl(336, 100%, 50%)", "hsl(19, 100%, 50%)",
            "hsla(344, 100%, 50%, 1)", "hsla(192, 100%, 50%, 1)", "hsla(58, 100%, 50%, 1)", "hsla(256, 22%, 50%, 1)",
            "hsla(70, 22%, 50%, 1)", "hsla(7, 22%, 24%, 1)", "hsla(7, 22%, 100%, 1)"];
        let birdsSize = new Polymorphism.PosValue(333, 100);
        let birdsDirection = [1, -1];
        Polymorphism.crc2.save();
        Polymorphism.crc2.translate(200, 600);
        for (let index = 0; index < birdsAmount; index++) {
            let x = (Math.random() - 0.5) * birdsSize.x;
            let y = -(Math.random() * birdsSize.y);
            let randomScale = (Math.random() * .3) + 0.2;
            Polymorphism.crc2.save();
            Polymorphism.crc2.translate(x, y);
            Polymorphism.crc2.scale(randomScale, randomScale);
            Polymorphism.crc2.scale(birdsDirection[Math.floor(Math.random() * (3) - 1)], 1);
            // Körper
            Polymorphism.crc2.beginPath();
            Polymorphism.crc2.rotate((Math.PI / 180) * 30);
            Polymorphism.crc2.arc(8, 12, 50, 0, 1 * Math.PI, false);
            Polymorphism.crc2.fillStyle = birdsColours[index];
            Polymorphism.crc2.lineWidth = 5;
            Polymorphism.crc2.strokeStyle = "black";
            Polymorphism.crc2.fill();
            Polymorphism.crc2.stroke();
            // Schnabel
            Polymorphism.crc2.beginPath();
            Polymorphism.crc2.moveTo(-60, 25);
            Polymorphism.crc2.lineTo(-80, 15);
            Polymorphism.crc2.lineTo(-60, -5);
            Polymorphism.crc2.fillStyle = "yellow";
            Polymorphism.crc2.fill();
            Polymorphism.crc2.closePath();
            // Kopf
            Polymorphism.crc2.beginPath();
            Polymorphism.crc2.arc(0 - 40, 0 + 8, 23, 0, 2 * Math.PI, false);
            Polymorphism.crc2.fillStyle = birdsColours[index + 1];
            Polymorphism.crc2.fill();
            Polymorphism.crc2.stroke();
            // Bein links
            Polymorphism.crc2.beginPath();
            Polymorphism.crc2.moveTo(15, 60);
            Polymorphism.crc2.lineTo(40, 100);
            Polymorphism.crc2.lineWidth = 5;
            Polymorphism.crc2.stroke();
            // Bein rechts
            Polymorphism.crc2.beginPath();
            Polymorphism.crc2.moveTo(30, 60);
            Polymorphism.crc2.lineTo(55, 95);
            Polymorphism.crc2.lineWidth = 5;
            Polymorphism.crc2.stroke();
            Polymorphism.crc2.restore();
        }
        Polymorphism.crc2.restore();
    }
    function createSnowflakes() {
        for (let index = 0; index < 275; index++) {
            xStep = xStep + 2;
            let snowflake = new Polymorphism.Snowflake(1, new Polymorphism.PosValue(xStep, 0));
            snowflake.create();
            moveables.push(snowflake);
        }
    }
    function createBirds() {
        for (let index = 0; index < 25; index++) {
            let velocity = new Polymorphism.PosValue(0, 0);
            velocity.random(100, 250);
            let bird = new Polymorphism.BirdSky(new Polymorphism.PosValue(160, 200), velocity);
            moveables.push(bird);
        }
        console.log("pups");
    }
    function update() {
        console.log(moveables);
        Polymorphism.crc2.putImageData(background, 0, 0);
        Polymorphism.crc2.fillRect(0, 0, Polymorphism.crc2.canvas.width, Polymorphism.crc2.canvas.height);
        for (let Moveable of moveables) {
            if (Moveable instanceof Polymorphism.Snowflake) {
                Moveable.move(1 / 50);
            }
            if (Moveable instanceof Polymorphism.BirdSky) {
                Moveable.move(1 / 50);
            }
        }
    }
})(Polymorphism || (Polymorphism = {}));
//# sourceMappingURL=main.js.map