import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./App.css"; // include global boot/animation styles

createRoot(document.getElementById("root")!).render(<App />);
