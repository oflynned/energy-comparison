import { FunctionComponent } from "react";
import { BrusselsScale, FlandersScale, WalloniaScale } from "@/energy-scale";

type Props = {
  kwh: number;
};

const brussels = new BrusselsScale();
const wallonia = new WalloniaScale();
const flanders = new FlandersScale();

export const EnergyComparison: FunctionComponent<Props> = ({ kwh }) => {
  const brusselsRating = brussels.getRating(kwh);
  const walloniaRating = wallonia.getRating(kwh);
  const flandersRating = flanders.getRating(kwh);

  return (
    <div className={"flex flex-col gap-4"}>
      <h1>{`A ${kwh} kWh rating is equivalent to:`}</h1>
      <div className={"flex sm:flex-row flex-col gap-2 justify-between"}>
        <div className={"flex flex-col"}>
          <h2>Brussels</h2>
          <h2>{brusselsRating.label}</h2>
        </div>
        <div className={"flex flex-col"}>
          <h2>Flanders</h2>
          <h2>{flandersRating.label}</h2>
        </div>
        <div className={"flex flex-col"}>
          <h2>Wallonia</h2>
          <h2>{walloniaRating.label}</h2>
        </div>
      </div>
    </div>
  );
};
