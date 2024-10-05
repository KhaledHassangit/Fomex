import About from "./components/About/About";
import BookSeat from "./components/Book/BookSeat";
import Gallery from "./components/Gallery/Gallery";
import News from "./components/News/News";
import Partners from "./components/Partners/Partners";
import Statics from "./components/Statics/Statics";
import Welcome from "./components/Welcome/Welcome";
import Home from "./Pages/Home/Home";
import Footer from "./utilities/Footer";

function App() {
  return (
    <div className="App">
      <Home/>
      <Statics/>
      <Welcome/>
      <Gallery/>
      <About/>
      <BookSeat/>
      <News/>
      <Partners/>
      <Footer/>
    </div>
  );
}

export default App;
