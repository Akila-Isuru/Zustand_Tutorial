import { create } from "zustand";

interface BearState {
  bears: number;
  fetchBears: () => Promise<void>;
}

const useBearState = create<BearState>()((set) => ({
  bears: 0,
  fetchBears: async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const post = await res.json();
    set({ bears: post.id });
  },
}));

function AsyncActions() {
  const bears = useBearState((state) => state.bears);
  const fetchBears = useBearState((state) => state.fetchBears);

  return (
    <div>
      <h1>Data</h1>
      <p>Data : {bears}</p>
      <button onClick={fetchBears}>Fetch</button>
    </div>
  );
}

export default AsyncActions;
