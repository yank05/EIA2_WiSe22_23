/*
Aufgabe: Birds_L08.2
Name: Yannik König
Matrikel: 271124
Datum: 04.12.2022
Quellen: drawBirdsSky insipiert von Jonas Atzenhofer, drawBirdsFront von Henning Reck
*/
var WWL_Classes;
(function (WWL_Classes) {
    window.addEventListener("load", handleLoad);
    let snowflakes = [];
    let background;
    let xStep = 0;
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        WWL_Classes.crc2 = canvas.getContext("2d");
        drawBackground();
        drawTestSnowflake();
        setInterval(update, 50);
        // drawBirdsSky(); 
        // drawBirdsFront(); 
        // drawSnowflakes();
    }
    function drawTestSnowflake() {
        for (let index = 0; index < 175; index++) {
            xStep = xStep + 5;
            let snowflake = new WWL_Classes.Snowflake(1);
            snowflake.create(xStep);
            snowflakes.push(snowflake);
        }
    }
    function update() {
        WWL_Classes.crc2.putImageData(background, 0, 0);
        WWL_Classes.crc2.fillRect(0, 0, WWL_Classes.crc2.canvas.width, WWL_Classes.crc2.canvas.height);
        for (let snowflake of snowflakes) {
            snowflake.move(1 / 50);
            // snowflake.draw();
            console.log("Hallo");
        }
        // ship.draw();
        // handleCollisions();
    }
    function drawBackground() {
        let posMountains = new WWL_Classes.PosValue(0, 375);
        let sunPos = new WWL_Classes.PosValue(50, 50);
        let cloudPos = new WWL_Classes.PosValue(250, 110);
        let cloudSize = new WWL_Classes.PosValue(90, 60);
        let forestStart = new WWL_Classes.PosValue(0, 450);
        let snowmanPos = new WWL_Classes.PosValue(100, 620);
        let birdhousePos = new WWL_Classes.PosValue(280, 667);
        drawGradient();
        drawSun(sunPos);
        drawCloud(cloudPos, cloudSize);
        drawMountains(posMountains, 60, 150);
        drawForest(forestStart);
        drawSnowman(snowmanPos);
        drawBirdHouse(birdhousePos);
        background = WWL_Classes.crc2.getImageData(0, 0, WWL_Classes.crc2.canvas.width, WWL_Classes.crc2.canvas.height);
    }
    function drawGradient() {
        let gradient = WWL_Classes.crc2.createLinearGradient(0, 0, 0, WWL_Classes.crc2.canvas.height);
        gradient.addColorStop(0, "darkblue");
        gradient.addColorStop(0.6, "white");
        gradient.addColorStop(1, "lightblue");
        WWL_Classes.crc2.fillStyle = gradient;
        WWL_Classes.crc2.fillRect(0, 0, WWL_Classes.crc2.canvas.width, WWL_Classes.crc2.canvas.height);
    }
    function drawSun(_position) {
        let r1 = 40;
        let r2 = 80;
        let gradient = WWL_Classes.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        WWL_Classes.crc2.save();
        WWL_Classes.crc2.translate(_position.x, _position.y);
        WWL_Classes.crc2.fillStyle = gradient;
        WWL_Classes.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        WWL_Classes.crc2.fill();
        WWL_Classes.crc2.restore();
    }
    function drawCloud(_position, _size) {
        let numParticles = 50;
        let radParticle = 20;
        let particle = new Path2D();
        let gradient = WWL_Classes.crc2.createRadialGradient(0, 0, 0, 0, 0, radParticle);
        particle.arc(0, 0, radParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0.2)");
        WWL_Classes.crc2.save();
        WWL_Classes.crc2.translate(_position.x, _position.y);
        WWL_Classes.crc2.fillStyle = gradient;
        for (let index = 0; index < numParticles; index++) {
            WWL_Classes.crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            WWL_Classes.crc2.translate(x, y);
            WWL_Classes.crc2.fill(particle);
            WWL_Classes.crc2.restore();
        }
        WWL_Classes.crc2.restore();
    }
    function drawMountains(_position, _min, _max) {
        let stepMin = 20;
        let stepMax = 100;
        let x = 0;
        WWL_Classes.crc2.save();
        WWL_Classes.crc2.translate(_position.x, _position.y);
        WWL_Classes.crc2.beginPath();
        WWL_Classes.crc2.moveTo(0, 0);
        WWL_Classes.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            WWL_Classes.crc2.lineTo(x, y);
        } while (x < WWL_Classes.crc2.canvas.width);
        WWL_Classes.crc2.lineTo(x, 0);
        WWL_Classes.crc2.closePath();
        let gradient = WWL_Classes.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, "HSLA(199, 10%, 50%, 0.4)");
        gradient.addColorStop(1, "HSLA(199, 10%, 100%, 1)");
        WWL_Classes.crc2.fillStyle = gradient;
        WWL_Classes.crc2.fill();
        WWL_Classes.crc2.restore();
    }
    function drawForest(_posStart) {
        let numBranches = 10;
        let maxRadius = 30;
        let branch = new Path2D();
        branch.arc(0, 0, maxRadius, 0, 2 * Math.PI);
        WWL_Classes.crc2.save();
        WWL_Classes.crc2.translate(_posStart.x, _posStart.y);
        WWL_Classes.crc2.fillStyle = "hsl(0, 37%, 16%)";
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
            WWL_Classes.crc2.fillRect(counterX, counterY, 20, 40);
            counterX = counterX + x;
            console.log(counterX);
        }
        WWL_Classes.crc2.restore();
        let treePos = new WWL_Classes.PosValue(10, 440);
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
                WWL_Classes.crc2.save();
                WWL_Classes.crc2.translate(x, y);
                WWL_Classes.crc2.beginPath();
                WWL_Classes.crc2.moveTo(0, 0);
                WWL_Classes.crc2.lineTo(-lengthLineTotal, 0);
                WWL_Classes.crc2.lineTo(0, -20);
                WWL_Classes.crc2.closePath();
                WWL_Classes.crc2.lineWidth = 2;
                WWL_Classes.crc2.strokeStyle = "green";
                WWL_Classes.crc2.stroke();
                WWL_Classes.crc2.fillStyle = "green";
                WWL_Classes.crc2.fill();
                WWL_Classes.crc2.restore();
                y = y - 20;
            }
            y = 440;
            if (index == 1 || index == 3 || index == 5 || index == 7 || index == 9) {
                y = y + 10;
            }
            lengthLineTotal = 30;
            for (let index3 = 0; index3 < 3; index3++) {
                WWL_Classes.crc2.save();
                WWL_Classes.crc2.translate(x, y);
                WWL_Classes.crc2.beginPath();
                WWL_Classes.crc2.moveTo(0, 0);
                WWL_Classes.crc2.lineTo(lengthLineTotal, 0);
                WWL_Classes.crc2.lineTo(0, -20);
                WWL_Classes.crc2.closePath();
                WWL_Classes.crc2.lineWidth = 2;
                WWL_Classes.crc2.strokeStyle = "green";
                WWL_Classes.crc2.stroke();
                WWL_Classes.crc2.fillStyle = "green";
                WWL_Classes.crc2.fill();
                WWL_Classes.crc2.restore();
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
        let facePosition = new WWL_Classes.PosValue(x, y);
        WWL_Classes.crc2.save();
        WWL_Classes.crc2.translate(_position.x, _position.y);
        WWL_Classes.crc2.strokeStyle = "white";
        WWL_Classes.crc2.fillStyle = "white";
        WWL_Classes.crc2.lineWidth = 0;
        WWL_Classes.crc2.beginPath();
        WWL_Classes.crc2.arc(0, 0, 40, 0, 2 * Math.PI);
        WWL_Classes.crc2.fill();
        WWL_Classes.crc2.stroke();
        WWL_Classes.crc2.closePath();
        WWL_Classes.crc2.beginPath();
        WWL_Classes.crc2.arc(0, -70, 30, 0, 2 * Math.PI);
        WWL_Classes.crc2.fill();
        WWL_Classes.crc2.stroke();
        WWL_Classes.crc2.closePath();
        WWL_Classes.crc2.beginPath();
        WWL_Classes.crc2.arc(0, -125, 25, 0, 2 * Math.PI);
        WWL_Classes.crc2.fill();
        WWL_Classes.crc2.stroke();
        WWL_Classes.crc2.closePath();
        WWL_Classes.crc2.restore();
        WWL_Classes.crc2.save();
        WWL_Classes.crc2.translate(facePosition.x, facePosition.y);
        WWL_Classes.crc2.fillStyle = "black";
        WWL_Classes.crc2.beginPath();
        WWL_Classes.crc2.arc(-10, -10, 5, 0, 2 * Math.PI);
        WWL_Classes.crc2.fill();
        WWL_Classes.crc2.closePath();
        WWL_Classes.crc2.beginPath();
        WWL_Classes.crc2.arc(10, -10, 5, 0, 2 * Math.PI);
        WWL_Classes.crc2.fill();
        WWL_Classes.crc2.closePath();
        WWL_Classes.crc2.beginPath();
        WWL_Classes.crc2.lineWidth = 5;
        WWL_Classes.crc2.strokeStyle = "orange";
        WWL_Classes.crc2.moveTo(0, 0);
        WWL_Classes.crc2.lineTo(15, 10);
        WWL_Classes.crc2.closePath();
        WWL_Classes.crc2.stroke();
        WWL_Classes.crc2.restore();
    }
    function drawBirdHouse(_position) {
        WWL_Classes.crc2.save();
        WWL_Classes.crc2.translate(_position.x, _position.y);
        WWL_Classes.crc2.strokeStyle = "HSLA(30, 100%, 20%, 1)";
        WWL_Classes.crc2.beginPath();
        WWL_Classes.crc2.moveTo(20, 0);
        WWL_Classes.crc2.lineTo(20, -100);
        WWL_Classes.crc2.lineWidth = 10;
        WWL_Classes.crc2.stroke();
        WWL_Classes.crc2.closePath();
        WWL_Classes.crc2.beginPath();
        WWL_Classes.crc2.moveTo(-20, 0);
        WWL_Classes.crc2.lineTo(-20, -100);
        WWL_Classes.crc2.lineWidth = 10;
        WWL_Classes.crc2.stroke();
        WWL_Classes.crc2.closePath();
        WWL_Classes.crc2.beginPath();
        WWL_Classes.crc2.moveTo(-50, -100);
        WWL_Classes.crc2.lineTo(50, -100);
        WWL_Classes.crc2.lineWidth = 15;
        WWL_Classes.crc2.stroke();
        WWL_Classes.crc2.closePath();
        WWL_Classes.crc2.beginPath();
        WWL_Classes.crc2.moveTo(-40, -105);
        WWL_Classes.crc2.lineTo(-40, -170);
        WWL_Classes.crc2.lineTo(40, -105);
        WWL_Classes.crc2.moveTo(40, -170);
        WWL_Classes.crc2.lineTo(-40, -170);
        WWL_Classes.crc2.lineTo(40, -105);
        WWL_Classes.crc2.fillStyle = "hsla(34, 64%, 14%, 1)";
        WWL_Classes.crc2.fill();
        WWL_Classes.crc2.closePath();
        WWL_Classes.crc2.beginPath();
        WWL_Classes.crc2.moveTo(0, -220);
        WWL_Classes.crc2.lineTo(-60, -150);
        WWL_Classes.crc2.lineWidth = 5;
        WWL_Classes.crc2.stroke();
        WWL_Classes.crc2.closePath();
        WWL_Classes.crc2.beginPath();
        WWL_Classes.crc2.moveTo(0, -220);
        WWL_Classes.crc2.lineTo(60, -150);
        WWL_Classes.crc2.lineWidth = 5;
        WWL_Classes.crc2.stroke();
        WWL_Classes.crc2.closePath();
        WWL_Classes.crc2.restore();
    }
    function drawBirdsSky() {
        for (let index = 0; index < randomNumber(8, 20); index++) {
            WWL_Classes.crc2.save();
            WWL_Classes.crc2.translate(randomNumber(0, 375), randomNumber(0, 300));
            WWL_Classes.crc2.beginPath();
            WWL_Classes.crc2.moveTo(0, 0);
            WWL_Classes.crc2.bezierCurveTo(0, -10, -10, -10, -20, 0);
            WWL_Classes.crc2.moveTo(0, 0);
            WWL_Classes.crc2.strokeStyle = "black";
            WWL_Classes.crc2.stroke();
            WWL_Classes.crc2.closePath();
            WWL_Classes.crc2.beginPath();
            WWL_Classes.crc2.moveTo(0, 0);
            WWL_Classes.crc2.bezierCurveTo(0, -10, 10, -10, 20, 0);
            WWL_Classes.crc2.moveTo(0, 0);
            WWL_Classes.crc2.strokeStyle = "black";
            WWL_Classes.crc2.stroke();
            WWL_Classes.crc2.closePath();
            WWL_Classes.crc2.restore();
        }
    }
    // function drawBirdsFront(): void {
    //         let birdsAmount: number = 10;
    //         let birdsColours: string[] = ["hsl(269, 100%, 50%)", "hsl(336, 100%, 50%)", "hsl(19, 100%, 50%)", 
    //         "hsla(344, 100%, 50%, 1)", "hsla(192, 100%, 50%, 1)", "hsla(58, 100%, 50%, 1)", "hsla(256, 22%, 50%, 1)", 
    //         "hsla(70, 22%, 50%, 1)", "hsla(7, 22%, 24%, 1)", "hsla(7, 22%, 100%, 1)"];
    //         let birdsSize: PosValue = { x: 375, y: 200 };
    //         let birdsDirection: number[] = [1, -1];
    //         crc2.save();  
    //         crc2.translate(200, 600);
    //         for (let index: number = 0; index < birdsAmount; index++) {
    //             let x: number = (Math.random() - 0.5) * birdsSize.x;
    //             let y: number = - (Math.random() * birdsSize.y);
    //             let randomScale: number = (Math.random() * .3) + 0.2;
    //             crc2.save();
    //             crc2.translate(x, y);
    //             crc2.scale(randomScale, randomScale);
    //             crc2.scale(birdsDirection[Math.floor(Math.random() * (3) - 1)], 1);
    //             // Körper
    //             crc2.beginPath();
    //             crc2.rotate((Math.PI / 180) * 30);
    //             crc2.arc(8, 12, 50, 0, 1 * Math.PI, false);
    //             crc2.fillStyle = birdsColours[index];
    //             crc2.lineWidth = 5;
    //             crc2.strokeStyle = "black";
    //             crc2.fill();
    //             crc2.stroke();
    //             // Schnabel
    //             crc2.beginPath();
    //             crc2.moveTo(-60, 25);
    //             crc2.lineTo(-80, 15);
    //             crc2.lineTo(-60, -5);
    //             crc2.fillStyle = "yellow";
    //             crc2.fill();
    //             crc2.closePath();
    //             // Kopf
    //             crc2.beginPath();
    //             crc2.arc(0 - 40, 0 + 8, 23, 0, 2 * Math.PI, false);
    //             crc2.fillStyle = birdsColours[index + 1];
    //             crc2.fill();
    //             crc2.stroke();
    //             // Bein links
    //             crc2.beginPath();
    //             crc2.moveTo(15, 60);
    //             crc2.lineTo(40, 100);
    //             crc2.lineWidth = 5;
    //             crc2.stroke();
    //             // Bein rechts
    //             crc2.beginPath();
    //             crc2.moveTo(30, 60);
    //             crc2.lineTo(55, 95);
    //             crc2.lineWidth = 5;
    //             crc2.stroke();
    //             crc2.restore();
    //         }
    //         crc2.restore();
    //     }
    // function drawSnowflakes(): void {
    //     let snowflake: Path2D = new Path2D();
    //     let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, 10);
    //     snowflake.arc(0, 0, 10, 0, 2 * Math.PI);
    //     gradient.addColorStop(0, "hsla(0, 100%, 100%, 1)");
    //     gradient.addColorStop(1, "hsla(0, 100%, 100%, 0)");
    //     crc2.save(); 
    //     crc2.translate(320, 600);
    //     crc2.fillStyle = gradient;
    //     for (let index: number = 0; index < 50; index++) {
    //         let x: number = randomNumber(0, 375) * -1;
    //         let y: number = - randomNumber(0, 667);
    //         crc2.save();
    //         crc2.translate(x, y);
    //         crc2.fill(snowflake);
    //         crc2.restore();
    //     }
    //     crc2.restore();
    // }
    function randomNumber(_min, _max) {
        return Math.floor(Math.random() * _max) + _min;
    }
})(WWL_Classes || (WWL_Classes = {}));
//# sourceMappingURL=main.js.map