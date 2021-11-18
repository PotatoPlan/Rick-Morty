import { QueryClientProvider, QueryClient } from "react-query";
import "./App.css";
import Characters from "./components/Characters";

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <div className="title-bar">
        <h1>Rick and Morty All Human Characters</h1>
      </div>

      <QueryClientProvider client={queryClient}>
        <Characters />
      </QueryClientProvider>
    </div>
  );
}

export default App;
