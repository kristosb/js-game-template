import { World, Schedule, applyCommands, Res } from 'thyseus';

class MySchedule extends Schedule {}

async function helloSystem(world: World) {
	console.log('Hello, world!', world)
}
// const helloSystem = (world: World) => {
//     console.log('Hello, world!', world);
//   };

export async function createWorld(canvas : any){
    console.log("starting game");
    const myWorld = await new World()
	.addSystems(MySchedule, helloSystem)
    .addSystems(MySchedule, applyCommands)
	.prepare();
    myWorld.start();
    await myWorld.runSchedule(MySchedule);
    await myWorld.runSchedule(MySchedule);
}