import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/flatUpdates.tsx";
import MultipleSelectors from "./components/multipleSelectors.tsx";
import DerivedStateWithSelectors from "./components/DerivedStateWithSelectors.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <App /> */}
    {/* <MultipleSelectors /> */}
    <DerivedStateWithSelectors />
  </StrictMode>,
);
