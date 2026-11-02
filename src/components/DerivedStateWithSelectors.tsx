import React from "react";
import { create } from "zustand";

interface BearStore {
  bears: number;
  foodPerBear: number;
}

const useBearStore = create<BearStore>()(() => ({
  bears: 23,
  foodPerBear: 10,
}));

function DerivedStateWithSelectors() {
  const totalFood = useBearStore((s) => s.bears * s.foodPerBear);
  return <div>We need full amount of {totalFood} to feed all our bears </div>;
}

export default DerivedStateWithSelectors;
