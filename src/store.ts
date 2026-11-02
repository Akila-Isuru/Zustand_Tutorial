import { create } from "zustand";

type CounterState = {
  count: number;
  text: string;
  increase: () => void;
  decrease: () => void;
  setText: (newText: string) => void;
  reset: () => void;
};

export const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  text: "Hello zustand",
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  setText: (newText) => set({ text: newText }),
  reset: () => set({ count: 0, text: "Hello Zustand " }),
}));
