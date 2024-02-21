import "./App.scss";
import { ArrowIcon } from "./components/arrow-icon";
import { Logo } from "./components/logo";

function App() {
  return (
    <main>
      <header className="header-container">
        <Logo />
        <nav className="menu-options">
          <a>What we offer</a>
          <a>How it works</a>
          <a>Portfolio</a>
        </nav>
        <button>
          <div className="btn-face-white">
            <a>Contact us</a>
            <ArrowIcon />
          </div>
          <div className="btn-face-purple">
            <a>Contact us</a>
            <ArrowIcon />
          </div>
        </button>
      </header>
      <div className="content-container">
        <div className="heading-container">
          <h2>Lets grow your</h2>
          <h2>social presence.</h2>
        </div>
        <div className="bubble target">🎯</div>
        <div className="bubble shop">🛍️</div>
        <div className="bubble rocket">🚀</div>
        <div className="bubble fire">🔥</div>
      </div>
    </main>
  );
}

export default App;
