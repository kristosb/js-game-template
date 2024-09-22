import SceneManager from './SceneManager';

export default (container: any) => {
    let canvasHalfWidth;
    let canvasHalfHeight;
    const canvas = createCanvas(document, container);
    canvas.style.width = '100%';
    canvas.style.height= '100%';
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    const sceneManager = SceneManager(canvas);
    
    bindEventListeners();
    resizeCanvas();
    sceneManager.animate();
     
    function createCanvas(document : Document, container :any) {
        const canvas = document.createElement("canvas");    
        container.appendChild(canvas);   
        return canvas;
    }

    function bindEventListeners() {
        window.onresize = resizeCanvas;
        window.onoffline = ()=>console.log("lost");
        window.onreset = ()=>console.log("reset");
        window.onunload = ()=>console.log("unload");
    }

    function resizeCanvas() {       
        sceneManager.onWindowResize(); 
    }

    function closeCanvas() {       
        return null;
    }
}