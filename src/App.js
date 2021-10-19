import "./App.css";
import Seek from "./components/Seek";
import Header from "./components/Header";

function App() {
  return (
    <div id="masterContainer" className="h-screen bg-tan-light">
      <Header />
      <Seek />
      <div id="test"></div>
    </div>
  );
}

export default App;
