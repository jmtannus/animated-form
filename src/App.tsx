import "./App.scss";
import { Logo } from "./components/logo";

function App() {
  return (
    <main>
      <header className="header-container">
        <Logo />
        <nav className="menu-options">
          <a href="">What we offer</a>
          <a href="">How it works</a>
          <a href="">Portfolio</a>
        </nav>
        <button>Contact us</button>
      </header>
    </main>
  );
}

export default App;
