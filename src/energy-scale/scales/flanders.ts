import { EnergyScale } from "../energy-scale";
import { Rating } from "../rating";

export class FlandersScale extends EnergyScale {
  getScale(): Rating[] {
    return [
      new Rating({ lower: Number.NEGATIVE_INFINITY, upper: 0 }, "A+"),
      new Rating({ lower: 0, upper: 100 }, "A"),
      new Rating({ lower: 100, upper: 200 }, "B"),
      new Rating({ lower: 200, upper: 300 }, "C"),
      new Rating({ lower: 300, upper: 400 }, "D"),
      new Rating({ lower: 400, upper: 500 }, "E"),
      new Rating({ lower: 500, upper: Number.POSITIVE_INFINITY }, "F"),
    ];
  }
}
