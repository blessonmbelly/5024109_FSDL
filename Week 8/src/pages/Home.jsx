import React from "react";
import { Terminal, Code, Cpu } from "lucide-react";

function Home() {
  return (
    <div className="page-container text-center">
      <div style={{ marginTop: "4rem", marginBottom: "2rem" }}>
        <Terminal size={64} color="var(--primary)" style={{ margin: "0 auto", marginBottom: "2rem" }} />
        <h1>Welcome to the Vault</h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto" }}>
          A premium, dark-mode encrypted concept for storing code snippets and fast notes. 
          Built with React Routers, Refs, and Keys for maximum performance.
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginTop: "2rem", flexWrap: "wrap" }}>
        <div style={{ padding: "2rem", background: "var(--panel-bg)", borderRadius: "1rem", border: "1px solid var(--panel-border)", width: "250px" }}>
          <Code size={32} color="var(--primary)" style={{ marginBottom: "1rem" }} />
          <h3>Secure Storage</h3>
          <p style={{ fontSize: "0.9rem" }}>Utilizes highly optimized local storage paradigms.</p>
        </div>
        <div style={{ padding: "2rem", background: "var(--panel-bg)", borderRadius: "1rem", border: "1px solid var(--panel-border)", width: "250px" }}>
          <Cpu size={32} color="var(--danger)" style={{ marginBottom: "1rem" }} />
          <h3>Blazing Fast</h3>
          <p style={{ fontSize: "0.9rem" }}>Direct DOM access with React Refs bypassing unnecessary renders.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
