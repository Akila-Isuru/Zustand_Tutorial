import { create } from "zustand";
import React from "react";
import { combine } from "zustand/middleware";

interface BearState {
  bears: number;
  increase: () => void;
}

export const useBearStore = create<BearState>()(
  combine({ bears: 0 }, (set) => ({
    increase: () => set((s) => ({ bears: s.bears + 1 })),
  })),
);
