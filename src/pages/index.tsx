import { Input } from "@nextui-org/input";
import { useState } from "react";
import { EnergyComparison } from "@/components/EnergyComparison";

export default function Home() {
  const [kwh, setKwh] = useState<number | undefined>(150);

  return (
    <div className="w-screen h-screen">
      <div className={"max-w-[768px] m-auto flex flex-col gap-4 p-4"}>
        <h1 className={"font-bold text-4xl"}>Energy Scale</h1>
        <Input
          label={"Energy rating (kWh)"}
          type={"number"}
          value={kwh?.toString()}
          onChange={(e) => {
            setKwh(parseInt(e.target.value));
          }}
        />

        {Number.isNaN(kwh) || kwh === undefined ? null : (
          <EnergyComparison kwh={kwh} />
        )}
      </div>
    </div>
  );
}
