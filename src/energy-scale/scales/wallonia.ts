import { EnergyScale } from "../energy-scale";
import { Rating } from "../rating";

export class WalloniaScale extends EnergyScale {
  getScale(): Rating[] {
    return [
      new Rating(
        { lower: Number.NEGATIVE_INFINITY, upper: 0 },
        "A++",
        "rgb(59 130 246)",
      ),
      new Rating({ lower: 0, upper: 45 }, "A+", "rgb(59 130 246)"),
      new Rating({ lower: 45, upper: 85 }, "A", "rgb(34 197 94)"),
      new Rating({ lower: 85, upper: 170 }, "B", "rgb(132 204 22)"),
      new Rating({ lower: 170, upper: 255 }, "C", "rgb(234 179 8)"),
      new Rating({ lower: 255, upper: 340 }, "D", "rgb(245 158 11)"),
      new Rating({ lower: 340, upper: 425 }, "E", "rgb(249 115 22)"),
      new Rating({ lower: 425, upper: 510 }, "F", "rgb(239 68 68)"),
      new Rating(
        { lower: 510, upper: Number.POSITIVE_INFINITY },
        "G",
        "rgb(127 29 29)",
      ),
    ];
  }
}
