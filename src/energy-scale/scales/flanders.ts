import { EnergyScale } from "../energy-scale";
import { Rating } from "../rating";

export class FlandersScale extends EnergyScale {
  getScale(): Rating[] {
    return [
      new Rating(
        { lower: Number.NEGATIVE_INFINITY, upper: 0 },
        "A+",
        "rgb(59 130 246)",
      ),
      new Rating({ lower: 0, upper: 100 }, "A", "rgb(34 197 94)"),
      new Rating({ lower: 100, upper: 200 }, "B", "rgb(132 204 22)"),
      new Rating({ lower: 200, upper: 300 }, "C", "rgb(234 179 8)"),
      new Rating({ lower: 300, upper: 400 }, "D", "rgb(245 158 11)"),
      new Rating({ lower: 400, upper: 500 }, "E", "rgb(249 115 22)"),
      new Rating(
        { lower: 500, upper: Number.POSITIVE_INFINITY },
        "F",
        "rgb(239 68 68)",
      ),
    ];
  }
}
