namespace EventInspector {
    window.addEventListener("load", handleLoad); 

    function handleLoad(_event: Event) {
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

    function setInfoBox(_event: MouseEvent): void {
        let x: Number = _event.offsetX;
        let y: Number = _event.offsetY; 
        let area: HTMLElement = <HTMLElement>_event.target;
        let span: HTMLSpanElement = document.createElement("span"); 
        area.appendChild(span); 
        
        span.style.left = x + "px";
        span.style.top = y + "px";
        span.style.height = "50px";
        span.style.width = "50px";
        span.style.backgroundColor = "black"; 

    }
    
    function logInfo(): void {
        console.log("Hallo"); 
}


}
