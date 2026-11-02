import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/flatUpdates.tsx";
import MultipleSelectors from "./components/multipleSelectors.tsx";
import DerivedStateWithSelectors from "./components/DerivedStateWithSelectors.tsx";
import AsyncActions from "./components/AsyncActions.tsx";
import Counter from "./components/Counter.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <App /> */}
    {/* <MultipleSelectors /> */}
    {/* <DerivedStateWithSelectors /> */}
    {/* <AsyncActions /> */}
    <Counter />
  </StrictMode>,
);
