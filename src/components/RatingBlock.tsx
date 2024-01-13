import { FunctionComponent } from "react";
import { Rating } from "@/energy-scale/rating";

type Props = {
  rating: Rating;
};

export const RatingBlock: FunctionComponent<Props> = ({ rating }) => {
  const { label, colour } = rating;

  return (
    <div
      className={`w-8 h-8 flex items-center justify-center`}
      style={{ backgroundColor: colour }}
    >
      <h3 className={"font-bold text-white"}>{label}</h3>
    </div>
  );
};
