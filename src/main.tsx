import { Global, css } from "@emotion/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { reset } from "./components/Reset.tsx";
import { fontFamilies } from "./styles/fonts.ts";
import { AuthContextProvider } from "./contexts/AuthContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Global styles={reset} />
    <Global
      styles={css`
        html {
          ${fontFamilies.milkyway}
        }
      `}
    />
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
