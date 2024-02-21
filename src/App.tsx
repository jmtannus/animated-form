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
      <div className="content-container"></div>
    </main>
  );
}

export default App;
