import { EnergyScale } from "../energy-scale";
import { Rating } from "../rating";

export class WalloniaScale extends EnergyScale {
  getScale(): Rating[] {
    return [
      new Rating({ lower: Number.NEGATIVE_INFINITY, upper: 0 }, "A++"),
      new Rating({ lower: 0, upper: 45 }, "A+"),
      new Rating({ lower: 45, upper: 85 }, "A"),
      new Rating({ lower: 85, upper: 170 }, "B"),
      new Rating({ lower: 170, upper: 255 }, "C"),
      new Rating({ lower: 255, upper: 340 }, "D"),
      new Rating({ lower: 340, upper: 425 }, "E"),
      new Rating({ lower: 425, upper: 510 }, "F"),
      new Rating({ lower: 510, upper: Number.POSITIVE_INFINITY }, "G"),
    ];
  }
}
