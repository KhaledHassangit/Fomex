import Gallery from "./components/Gallery/Gallery";
import Statics from "./components/Statics/Statics";
import Welcome from "./components/Welcome/Welcome";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Home/>
      <Statics/>
      <Welcome/>
      <Gallery/>
    </div>
  );
}

export default App;
