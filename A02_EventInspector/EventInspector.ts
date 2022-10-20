namespace EventInspector {
    window.addEventListener("load", handleLoad); 

    function handleLoad(_event: Event): void {
        let body: HTMLElement = document.querySelector("body");
        let div0: HTMLElement = document.querySelector("div#div0");
        let div1: HTMLElement = document.querySelector("div#div1");

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

    function setInfoBox(_event: MouseEvent): void {
        let span: HTMLSpanElement = document.querySelector("span");
        let x: Number = _event.clientX;
        let y: Number = _event.clientY;
        let target: HTMLElement = <HTMLElement>_event.target;  

        span.setAttribute("id", "mouseFollower");  

        span.style.left = x + "px";
        span.style.top = y + "px";
        span.innerHTML = "X-Position: " + x + "<br> Y-Position: " + y + "<br> Target: " + target;
    }

    
    function logInfo(_event: Event): void {
        let type: String = _event.type; 
        let target: HTMLElement = <HTMLElement>_event.target; 
        let currentTargt: HTMLElement = <HTMLElement>_event.currentTarget; 
        let object: Event = _event; 
        
        console.log(type, target, currentTargt, object); 
}
}
