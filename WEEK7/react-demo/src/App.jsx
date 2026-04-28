import Greetings from './components/Greetings';
import Usercard from './components/Usercard';
import Counter from './components/Counter';
import Signupform from './components/Signupform';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>React Fundamentals</h1>
        <p className="app-sub">Components · Props · State · Forms · Events</p>
      </header>
      <main className="app-main">
        {/* ── 1. COMPONENTS ── */}
        <section className="section">
          <div className="section-label">01 — Components</div>
          <h2>Reusable building blocks</h2>
          <div className="card-row">
            <Greetings name="React" />
            <Greetings name="Codespaces" />
            <Greetings name="World" />
          </div>
        </section>
        {/* ── 2. PROPS ── */}
        <section className="section">
          <div className="section-label">02 — Props</div>
          <h2>Passing data to components</h2>
          <div className="card-row">
            <Usercard name="Roshwyn Fernandes" role="Frontend Dev" active={true} avatar="RF" />
            <Usercard name="Blesson Belly" role="Backend Dev" active={true} avatar="BB" />
            <Usercard name="Agasti Doshi" role="Full Stack" active={true} avatar="AD" />
          </div>
        </section>
        {/* ── 3. STATE ── */}
        <section className="section">
          <div className="section-label">03 — State</div>
          <h2>Dynamic, reactive data</h2>
          <Counter />
        </section>
        {/* ── 4. FORMS & EVENTS ── */}
        <section className="section">
          <div className="section-label">04 — Forms & Events</div>
          <h2>Controlled inputs</h2>
          <Signupform />
        </section>
      </main>
    </div>
  );
}

export default App;
