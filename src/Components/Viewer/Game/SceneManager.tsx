import {createWorld} from "./GameWorld"
export default function canvas(canvas: any)  {
    (async () => {
        await createWorld(canvas);
    })();
    function onWindowResize() {
        console.log("resizing...")
    }
    function animate(){

    }

    function onClose(){  
        console.log("terminating worker");     
    }
    return {
        onWindowResize,
        onClose,
        animate
    }
}