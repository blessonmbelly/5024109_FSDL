function Greetings({ name }) {
  return (
    <div className="greeting-card">
      <span className="greeting-wave">👋</span>
      <p className="greeting-text">
        Hello, <strong>{name}!</strong>
      </p>
      <span className="greeting-badge">Component</span>
    </div>
  );
}

export default Greetings;
