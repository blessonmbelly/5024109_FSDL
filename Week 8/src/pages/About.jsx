import React from "react";
import { Info, Code2, Link2, KeyRound } from "lucide-react";

function About() {
  return (
    <div className="page-container text-center" style={{ maxWidth: "800px", margin: "0 auto" }}>
      <div style={{ padding: "3rem", background: "var(--panel-bg)", borderRadius: "1rem", border: "1px solid var(--panel-border)" }}>
        <Info size={48} color="var(--primary)" style={{ marginBottom: "1rem" }} />
        <h2>About Snippet Vault</h2>
        <p style={{ marginBottom: "2rem" }}>
          This application was built as a response to TASK 8 requirements, presenting a highly polished, 
          premium alternative to a basic Notes App.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem", textAlign: "left" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem", background: "rgba(0,0,0,0.2)", borderRadius: "0.5rem" }}>
            <Link2 color="var(--primary)" />
            <div>
              <strong style={{ display: "block" }}>React Routers</strong>
              <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Handling navigation through the Home, Vault, and About views.</span>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem", background: "rgba(0,0,0,0.2)", borderRadius: "0.5rem" }}>
            <Code2 color="var(--primary)" />
            <div>
              <strong style={{ display: "block" }}>Refs (useRef)</strong>
              <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Grabbing input values without forcing the component to re-render constantly.</span>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem", background: "rgba(0,0,0,0.2)", borderRadius: "0.5rem" }}>
            <KeyRound color="var(--primary)" />
            <div>
              <strong style={{ display: "block" }}>Keys</strong>
              <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Providing stable identities for Vault list items.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
