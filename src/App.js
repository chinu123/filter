import './App.css';
import Filter from "./Container/Filter";
import {filters} from "./Constants/filter";

function App() {
  return (
    <div className="App">
      <Filter filters={filters} />
    </div>
  );
}

export default App;
