import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { ActorProvider, AgentProvider } from "@ic-reactor/react"
import { idlFactory, canisterId } from "./declarations/backend"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AgentProvider withProcessEnv>
      <ActorProvider idlFactory={idlFactory} canisterId={canisterId}>
        <App />
      </ActorProvider>
    </AgentProvider>
  </React.StrictMode>
)
