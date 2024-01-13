import { FunctionComponent } from "react";
import { EnergyScale } from "@/energy-scale/energy-scale";
import { RatingBlock } from "@/components/RatingBlock";

type Props = {
  kwh: number;
  scale: EnergyScale;
  location: string;
};

export const LocationScale: FunctionComponent<Props> = ({
  kwh,
  scale,
  location,
}) => {
  const rating = scale.getRating(kwh);

  return (
    <div className={"flex flex-col"}>
      <h2>{location}</h2>
      <RatingBlock rating={rating} />
    </div>
  );
};
