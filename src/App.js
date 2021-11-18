import "./App.css";
import Characters from "./components/Characters";

function App() {
  return (
    <div>
      <div className="title-bar">
        <h1>Rick and Morty All Human Characters</h1>
      </div>

      <Characters />
    </div>
  );
}

export default App;
