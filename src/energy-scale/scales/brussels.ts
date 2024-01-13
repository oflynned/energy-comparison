import { EnergyScale } from "../energy-scale";
import { Rating } from "../rating";

export class BrusselsScale extends EnergyScale {
  getScale(): Rating[] {
    return [
      new Rating({ lower: Number.NEGATIVE_INFINITY, upper: 45 }, "A"),
      new Rating({ lower: 45, upper: 95 }, "B"),
      new Rating({ lower: 95, upper: 150 }, "C"),
      new Rating({ lower: 150, upper: 210 }, "D"),
      new Rating({ lower: 210, upper: 275 }, "E"),
      new Rating({ lower: 275, upper: 345 }, "F"),
      new Rating({ lower: 345, upper: Number.POSITIVE_INFINITY }, "G"),
    ];
  }
}
