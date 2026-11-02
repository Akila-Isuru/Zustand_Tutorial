import { create } from "zustand";
import React from "react";
import { useShallow } from "zustand/shallow";

interface BearState {
  bears: number;
  food: number;
}

const useBearStore = create<BearState>()(() => ({
  bears: 10,
  food: 5,
}));

function multipleSelectors() {
  const { bears, food } = useBearStore(
    useShallow((state) => ({ bears: state.bears, food: state.food })),
  );
  return (
    <div>
      <h1>
        We have {food} units of food for {bears} bears .
      </h1>
    </div>
  );
}

export default multipleSelectors;
