import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/global/App";
import { UserProvider } from "./components/global/context/UserContext";

const root = createRoot(document.getElementById("root"));

root.render(
   <StrictMode>
      <UserProvider>
         <App />
      </UserProvider>
   </StrictMode>
);
