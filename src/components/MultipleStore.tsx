import { create } from "zustand";

interface BearStore {
  bears: number;
  addBear: () => void;
}
const useBearStore = create<BearStore>()((set) => ({
  bears: 2,
  addBear: () => set((s) => ({ bears: s.bears + 1 })),
}));

interface FishStore {
  fish: number;
  addFish: () => void;
}

const useFishStore = create<FishStore>()((set) => ({
  fish: 3,
  addFish: () => set((s) => ({ fish: s.fish + 1 })),
}));

function MultipleStore() {
  const { bears, addBear } = useBearStore();
  const { fish, addFish } = useFishStore();

  return (
    <div>
      <div>
        <h1>
          Bears :{bears} and Fish :{fish}
        </h1>
        <div>
          <button onClick={addBear}>Add Bear</button>
          <button onClick={addFish}>Add Fish</button>
        </div>
      </div>
    </div>
  );
}

export default MultipleStore;
