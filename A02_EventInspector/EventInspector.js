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
        let span = document.querySelector("span");
        let x = _event.clientX;
        let y = _event.clientY;
        let target = _event.target;
        span.setAttribute("id", "mouseFollower");
        span.style.left = x + "px";
        span.style.top = y + "px";
        span.innerHTML = "X-Position: " + x + "<br> Y-Position: " + y + "<br> Target: " + target;
    }
    function logInfo(_event) {
        let type = _event.type;
        let target = _event.target;
        let currentTargt = _event.currentTarget;
        let object = _event;
        console.log(type, target, currentTargt, object);
    }
})(EventInspector || (EventInspector = {}));
//# sourceMappingURL=EventInspector.js.map