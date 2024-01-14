import { FunctionComponent } from "react";
import { Rating } from "@/energy-scale/rating";

type Props = {
  rating: Rating;
};

export const ScaledRatingBlock: FunctionComponent<Props> = ({ rating }) => {
  const { label, colour, range } = rating;
  const height = range.upper - range.lower;

  return (
    <div
      className={`w-8 flex items-center justify-center rounded`}
      style={{ backgroundColor: colour, height }}
    >
      <h3 className={"font-bold text-white"}>{label}</h3>
    </div>
  );
};
