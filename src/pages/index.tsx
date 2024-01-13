import { Input } from "@nextui-org/input";
import { useState } from "react";
import { ScaleComparison } from "@/components/ScaleComparison";

export default function Home() {
  const [kwh, setKwh] = useState<number | undefined>(150);
  const isScaleVisible = !(kwh === undefined || Number.isNaN(kwh));

  return (
    <div className="w-screen h-dvh">
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

        {isScaleVisible ? <ScaleComparison kwh={kwh} /> : null}
      </div>
    </div>
  );
}
