class Vec2 {
    x: number;
    y: number;
    constructor(x = 0, y = 0) {
      this.x = x;
      this.y = y;
    }
  
    add(other: Vec2) {
      this.x += other.x;
      this.y += other.y;
    }
  }
  export class Position extends Vec2 {}
  export class Velocity extends Vec2 {}