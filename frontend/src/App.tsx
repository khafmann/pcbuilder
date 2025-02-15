import React, { useState } from "react";
import { Slider, Button } from "@mui/material";

const PcBuilderFilter: React.FC = () => {
  const [budget, setBudget] = useState<number | number[]>([0, 2500]);
  const [cpuManufacturer, setCpuManufacturer] = useState("Any");
  const [gpuManufacturer, setGpuManufacturer] = useState("Any");
  const [performance, setPerformance] = useState("1080p 144fps");
  const [tags, setTags] = useState(["Video Editing"]);

  const handleBudgetChange = (_: Event, newValue: number | number[]) => {
    setBudget(newValue);
  };

  return (
      <div className="p-6 bg-blue-100 rounded-lg shadow-lg max-w-lg mx-auto">
        <h2 className="text-lg font-bold">Budget</h2>
        <Slider
            value={budget}
            onChange={handleBudgetChange}
            min={0}
            max={2500}
            step={50}
            valueLabelDisplay="auto"
        />
        <div>
          <h3 className="font-semibold mt-4">CPU Manufacturer</h3>
          <div className="flex gap-2 mt-2">
            {["Any", "Intel", "AMD"].map((cpu) => (
                <Button key={cpu} onClick={() => setCpuManufacturer(cpu)} className={cpuManufacturer === cpu ? "bg-blue-400" : "bg-gray-200"}>
                  {cpu}
                </Button>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold mt-4">GPU Manufacturer</h3>
          <div className="flex gap-2 mt-2">
            {["Any", "AMD", "Intel", "Nvidia"].map((gpu) => (
                <Button key={gpu} onClick={() => setGpuManufacturer(gpu)} className={gpuManufacturer === gpu ? "bg-blue-400" : "bg-gray-200"}>
                  {gpu}
                </Button>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold mt-4">Performance</h3>
          <Button className="bg-yellow-400 mt-2">{performance}</Button>
        </div>
        <div>
          <h3 className="font-semibold mt-4">Tags</h3>
          {tags.map((tag) => (
              <Button key={tag} className="bg-gray-800 text-white mt-2">
                {tag}
              </Button>
          ))}
        </div>
        <div className="flex gap-4 mt-6">
          <Button className="bg-blue-500 text-white">Show Me!</Button>
          <Button className="bg-gray-300">Reset</Button>
        </div>
      </div>
  );
};

const App: React.FC = () => {
  return (
      <div className="min-h-screen flex items-center justify-center bg-gray-200">
        <PcBuilderFilter />
      </div>
  );
};

export default App;
