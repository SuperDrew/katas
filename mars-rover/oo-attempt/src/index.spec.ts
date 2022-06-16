import { Directions } from "./directions";
import { Rover } from "./rover";

describe("When turning ", () => {
  test.each([
    ["N", "W"],
    ["W", "S"],
    ["S", "E"],
    ["E", "N"],
  ])(
    "Left from %s, finish facing %s",
    (initialBearing: string, expectedBearing) => {
      const rover = new Rover();
      rover.land(initialBearing as Directions);
      rover.turnLeft();
      expect(rover.bearing).toBe(expectedBearing);
    }
  );

  test.each([
    ["N", "E"],
    ["E", "S"],
    ["S", "W"],
    ["W", "N"],
  ])(
    "Right from %s, finish facing %s",
    (initialBearing: string, expectedBearing) => {
      const rover = new Rover();
      rover.land(initialBearing as Directions);
      rover.turnRight();
      expect(rover.bearing).toBe(expectedBearing);
    }
  );
});

describe("When landing", () => {
  it("Should be positioned at the landing coordinates if inside the grid", () => {
    const rover = new Rover();
    rover.land("N", 1, 2, 3, 3);
    expect(rover.position.x).toBe(1);
    expect(rover.position.y).toBe(2);
  });

  it("Should like explode if landing outside the grid", () => {
    const rover = new Rover();
    // this is an interesting idea, a rover can exist with no bearing or position and land with them
    // but then you need some concept that a rover can't move unless it's landed which feels nasty
    const didTheRoverLand = rover.land("N", 6, 6, 5, 5);
    expect(didTheRoverLand).toBe(false);
  });
});

describe("When moving", () => {
  it.each([
    ["N", 1, 2],
    ["W", 0, 1],
    ["S", 1, 0],
    ["E", 2, 1],
  ])(
    "should move forward %s from 1, 1 to %s, %s",
    (bearing, expectedXPosition, expectedYPosition) => {
      const rover = new Rover();
      rover.land(bearing as Directions, 1, 1);
      const movedSuccessfully = rover.move();
      expect(movedSuccessfully).toBe(true);
      expect(rover.position.x).toBe(expectedXPosition);
      expect(rover.position.y).toBe(expectedYPosition);
    }
  );

  it("should fail to move outside the grid", () => {
    const rover = new Rover();
    rover.land("N", 0, 0, 1, 1);
    const movedSuccessfully = rover.move();
    expect(movedSuccessfully).toBe(false);
    expect(rover.position.x).toBe(0);
    expect(rover.position.y).toBe(0);
  });
});

test.each([
  [0, 3],
  [3, 2],
  [2, 1],
  [1, 0],
])(
  "turn right index lookup, from %s should be %s",
  (index, expectedTurnRightIndex) => {
    const newIndex = (index + 3) % 4;
    expect(newIndex).toBe(expectedTurnRightIndex);
  }
);
