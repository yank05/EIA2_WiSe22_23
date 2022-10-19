var EventInspector;
(function (EventInspector) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let body = document.querySelector("body");
        let div0 = document.querySelector("div#div0");
        let div1 = document.querySelector("div#div1");
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        body.addEventListener("blick", logInfo);
        div0.addEventListener("click", logInfo);
        div1.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        body.addEventListener("keyup", logInfo);
        div0.addEventListener("keyup", logInfo);
        div1.addEventListener("keyup", logInfo);
    }
    function setInfoBox(_event) {
        let x = _event.offsetX;
        let y = _event.offsetY;
        let area = _event.target;
        let span = document.createElement("span");
        area.appendChild(span);
        span.style.left = x + "px";
        span.style.top = y + "px";
        span.style.height = "50px";
        span.style.width = "50px";
        span.style.backgroundColor = "black";
    }
    function logInfo() {
        console.log("Hallo");
    }
})(EventInspector || (EventInspector = {}));
//# sourceMappingURL=EventInspector.js.map