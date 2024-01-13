import { ComponentProps, FunctionComponent } from "react";
import { BrusselsScale, FlandersScale, WalloniaScale } from "@/energy-scale";
import { LocationScale } from "@/components";

type Props = Pick<ComponentProps<typeof LocationScale>, "kwh">;

export const ScaleComparison: FunctionComponent<Props> = ({ kwh }) => {
  const brussels = new BrusselsScale();
  const wallonia = new WalloniaScale();
  const flanders = new FlandersScale();

  const formattedKwh = kwh?.toLocaleString("en-US", {
    maximumFractionDigits: 0,
  });

  return (
    <div className={"flex flex-col gap-4"}>
      <h1>{`A ${formattedKwh} kWh rating is equivalent to:`}</h1>
      <div className={"flex sm:flex-row flex-col gap-2 justify-between"}>
        <LocationScale kwh={kwh} scale={brussels} location={"Brussels"} />
        <LocationScale kwh={kwh} scale={flanders} location={"Flanders"} />
        <LocationScale kwh={kwh} scale={wallonia} location={"Wallonia"} />
      </div>
    </div>
  );
};
