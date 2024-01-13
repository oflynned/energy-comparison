import { FunctionComponent } from "react";
import { Rating } from "@/energy-scale/rating";
import { EnergyScale } from "@/energy-scale/energy-scale";

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
      <h3>{rating.label}</h3>
    </div>
  );
};
