import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Seek from "./components/Seek";

function App() {
  return (
    <div id="masterContainer" className="h-screen bg-tan-light">
      <Header />
      <Intro />
      <Seek />
      <div id="test"></div>
    </div>
  );
}

export default App;
