import ReactDom from "react-dom/client";
import App from "./App.jsx";
import { BoatContextProvider } from "./BoatContext.jsx";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <BoatContextProvider>
    <App />
  </BoatContextProvider>
);
