import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import App from "./App";
import "@mantine/core/styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
<MantineProvider
  theme={{
    primaryColor: "teal",
    defaultRadius: "md",
    fontFamily: "Inter, sans-serif",
  }}
>
  <App />
</MantineProvider>

  </React.StrictMode>
);
