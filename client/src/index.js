import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./components/global/App";
import { SketchProvider } from "./components/global/context/SketchContext"
import { Alert } from "./components/global/library/Alert";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <SketchProvider>
        <App />
      </SketchProvider>
      <Alert />
    </Auth0Provider>
  </StrictMode>
);
