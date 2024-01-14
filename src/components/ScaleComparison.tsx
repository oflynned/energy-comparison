import { ComponentProps, FunctionComponent } from "react";
import { BrusselsScale, FlandersScale, WalloniaScale } from "@/energy-scale";
import { LocationEnergyRating } from "@/components";
import { ScaledRatingBlock } from "@/components/ScaledRatingBlock";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  Tooltip,
} from "@nextui-org/react";

type Props = Pick<ComponentProps<typeof LocationEnergyRating>, "kwh">;

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
      <div className={"flex flex-row gap-2 justify-between"}>
        <LocationEnergyRating
          kwh={kwh}
          scale={brussels}
          location={"Brussels"}
        />
        <LocationEnergyRating
          kwh={kwh}
          scale={flanders}
          location={"Flanders"}
        />
        <LocationEnergyRating
          kwh={kwh}
          scale={wallonia}
          location={"Wallonia"}
        />
      </div>
      {/*<div className={"flex flex-col gap-2"}>*/}
      {/*  <h2>Comparison of energy ratings</h2>*/}
      {/*  <div className={"flex flex-row justify-between"}>*/}
      {/*    <div className={"flex flex-col gap-1"}>*/}
      {/*      {brussels.getScale().map((rating) => (*/}
      {/*        <Tooltip*/}
      {/*          content={`${rating.range.lower} - ${rating.range.upper} kWh`}*/}
      {/*        >*/}
      {/*          <ScaledRatingBlock rating={rating} />*/}
      {/*        </Tooltip>*/}
      {/*      ))}*/}
      {/*    </div>*/}
      {/*    <div className={"flex flex-col gap-1"}>*/}
      {/*      {flanders.getScale().map((rating) => (*/}
      {/*        <Tooltip*/}
      {/*          content={`${rating.range.lower} - ${rating.range.upper} kWh`}*/}
      {/*        >*/}
      {/*          <ScaledRatingBlock rating={rating} />*/}
      {/*        </Tooltip>*/}
      {/*      ))}*/}
      {/*    </div>*/}
      {/*    <div className={"flex flex-col gap-1"}>*/}
      {/*      {wallonia.getScale().map((rating) => (*/}
      {/*        <Tooltip*/}
      {/*          content={`${rating.range.lower} - ${rating.range.upper} kWh`}*/}
      {/*        >*/}
      {/*          <ScaledRatingBlock rating={rating} />*/}
      {/*        </Tooltip>*/}
      {/*      ))}*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
};
