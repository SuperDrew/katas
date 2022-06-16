import { Directions } from "./directions";
import { Position } from "./position";

const direction: Directions[] = ["N", "W", "S", "E"];

class Grid {
  constructor(public sizeX: number, public sizeY: number) {}
}

export class Rover {
  position: Position;
  bearing: Directions;
  grid: Grid;

  land(
    bearing: Directions,
    landingPositionX = 0,
    landingPositionY = 0,
    gridSizeX = 5,
    gridSizeY = 5
  ): boolean {
    if (
      landingPositionX < 0 ||
      landingPositionY < 0 ||
      landingPositionX > gridSizeX ||
      landingPositionY > gridSizeY
    )
      return false;
    this.grid = new Grid(gridSizeX, gridSizeX);
    this.bearing = bearing;
    this.position = new Position(landingPositionX, landingPositionY);
    return true;
  }

  turnLeft() {
    const indexOfCurrentBearing = direction.indexOf(this.bearing);
    this.bearing = direction[(indexOfCurrentBearing + 1) % 4];
  }

  turnRight() {
    const indexOfCurrentBearing = direction.indexOf(this.bearing);
    this.bearing = direction[(indexOfCurrentBearing + 3) % 4];
  }

  move(): boolean {
    if (!this.moveAllowed()) return false;
    if (this.bearing === "N") this.position.y += 1;
    else if (this.bearing === "W") this.position.x -= 1;
    else if (this.bearing === "S") this.position.y -= 1;
    else if (this.bearing === "E") this.position.x += 1;
    else return false;
    return true;
  }

  private moveAllowed(): boolean {
    if (this.bearing === "N" && this.position.y === this.grid.sizeY - 1)
      return false;
    if (this.bearing === "W" && this.position.x === 0) return false;
    if (this.bearing === "S" && this.position.y === 0) return false;
    if (this.bearing === "E" && this.position.x === this.grid.sizeX - 1)
      return false;
    return true;
  }
}
