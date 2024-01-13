import { Rating } from "@/energy-scale/rating";

export abstract class EnergyScale {
  abstract getScale(): Rating[];

  getRating(kwh: number) {
    const rating = this.getScale().find(
      ({ range }) => kwh > range.lower && kwh <= range.upper,
    );

    return rating ?? this.getFallback();
  }

  private getFallback() {
    return new Rating(
      { lower: Number.NEGATIVE_INFINITY, upper: Number.POSITIVE_INFINITY },
      "Unknown",
    );
  }
}
