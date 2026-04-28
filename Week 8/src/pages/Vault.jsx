import React, { useState, useRef, useEffect } from "react";
import { Plus, Database, AlertCircle } from "lucide-react";
import VaultItem from "../components/VaultItem";

function Vault() {
  const [snippets, setSnippets] = useState([]);
  const inputRef = useRef();

  // Load from local storage
  useEffect(() => {
    const savedSnippets = JSON.parse(localStorage.getItem("vault_snippets")) || [];
    setSnippets(savedSnippets);
  }, []);

  // Save to local storage whenever snippets change
  useEffect(() => {
    localStorage.setItem("vault_snippets", JSON.stringify(snippets));
  }, [snippets]);

  // Focus input on mount
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const addSnippet = (e) => {
    e.preventDefault();
    const text = inputRef.current.value.trim();
    if (!text) return;

    const newSnippet = {
      id: Date.now().toString(), // Unique Key
      text: text,
      timestamp: new Date().toLocaleTimeString(),
    };

    setSnippets([newSnippet, ...snippets]);
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  const deleteSnippet = (id) => {
    setSnippets(snippets.filter((snippet) => snippet.id !== id));
  };

  return (
    <div className="page-container">
      <div style={{ textAlign: "center", marginBottom: "1rem" }}>
        <h2><Database size={28} style={{ verticalAlign: 'middle', marginRight: '10px' }} /> snippet.vault</h2>
        <p>Store your commands and code blocks safely.</p>
      </div>

      <form className="vault-form" onSubmit={addSnippet}>
        <input
          ref={inputRef}
          className="vault-input"
          placeholder="Paste code snippet or command here..."
          autoComplete="off"
        />
        <button type="submit" className="btn">
          <Plus size={20} /> Add to Vault
        </button>
      </form>

      <div style={{ marginTop: "1rem" }}>
        {snippets.length === 0 ? (
          <div className="empty-state">
            <AlertCircle size={48} style={{ opacity: 0.5, marginBottom: "1rem", margin: "0 auto" }} />
            <h3>Vault is Empty</h3>
            <p>Start typing above to secure your first snippet.</p>
          </div>
        ) : (
          <div className="vault-grid">
            {snippets.map((snippet) => (
              <VaultItem
                key={snippet.id} // KEY Concept
                snippet={snippet}
                deleteSnippet={deleteSnippet}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Vault;
