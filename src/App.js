import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import FlightsPage from "./pages/FlightsPage/FlightsPage";
import HotelsPage from "./pages/HotelsPage/HotelsPage";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  return (
    <div className="App">
      <Header/>
        <main className="main">
          {/* <MainPage/>
          <FlightsPage/> */}
          <HotelsPage/>
        </main>
      <Footer/>

      
    </div>
  );
}

export default App;
