import { World, Schedule, applyCommands, Res, Commands,
         Query } from 'thyseus';
import { Position, Velocity } from './Components';

class MySchedule extends Schedule {}

export function spawnEntities(world: World) {
    console.log("cmd", world);
    world.commands.spawn().add(new Position()).add(new Velocity(1, 2));
  }

async function helloSystem(world: World) {
	console.log('Hello, world!', world)
}
// const helloSystem = (world: World) => {
//     console.log('Hello, world!', world);
//   };
export async function move(query: Query<[Position, Velocity]>) {
    console.log("quesry", query);
    // for (const [pos, vel] of query) {
    //   pos.add(vel);
    // }
  }

export async function createWorld(canvas : any){
    console.log("starting game");
    const myWorld = await new World()
    .addPlugin(spawnEntities)
	.addSystems(MySchedule, move)
    //.addSystems(MySchedule, applyCommands)
	.prepare();
    myWorld.start();
    await myWorld.runSchedule(MySchedule);
    await myWorld.runSchedule(MySchedule);
}