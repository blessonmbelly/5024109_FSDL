import React from "react";
import { Trash2, Copy } from "lucide-react";

function VaultItem({ snippet, deleteSnippet }) {

  const copyToClipboard = () => {
    navigator.clipboard.writeText(snippet.text);
  };

  return (
    <div className="vault-item">
      <div className="vault-item-text">
        <code style={{ fontFamily: "monospace", display: "block", whiteSpace: "pre-wrap" }}>
          {snippet.text}
        </code>
      </div>
      
      <div className="vault-item-meta">
        <span className="vault-item-id">t_{snippet.timestamp}</span>
        
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <button 
            onClick={copyToClipboard}
            style={{ background: "transparent", border: "none", color: "var(--text-muted)", cursor: "pointer", padding: "0.25rem" }}
            title="Copy to clipboard"
          >
            <Copy size={16} />
          </button>
          <button 
            onClick={() => deleteSnippet(snippet.id)}
            style={{ background: "transparent", border: "none", color: "var(--danger)", cursor: "pointer", padding: "0.25rem" }}
            title="Delete from vault"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default VaultItem;
