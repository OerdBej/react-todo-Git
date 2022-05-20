import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <h2>This are my favorite authors</h2>
      <Home />
    </div>
  );
}

export default App;
