import { EnergyScale } from "../energy-scale";
import { Rating } from "../rating";

export class BrusselsScale extends EnergyScale {
  getScale(): Rating[] {
    return [
      new Rating(
        { lower: Number.NEGATIVE_INFINITY, upper: 45 },
        "A",
        "rgb(34 197 94)",
      ),
      new Rating({ lower: 45, upper: 95 }, "B", "rgb(132 204 22)"),
      new Rating({ lower: 95, upper: 150 }, "C", "rgb(234 179 8)"),
      new Rating({ lower: 150, upper: 210 }, "D", "rgb(245 158 11)"),
      new Rating({ lower: 210, upper: 275 }, "E", "rgb(249 115 22)"),
      new Rating({ lower: 275, upper: 345 }, "F", "rgb(239 68 68)"),
      new Rating(
        { lower: 345, upper: Number.POSITIVE_INFINITY },
        "G",
        "rgb(127 29 29)",
      ),
    ];
  }
}
