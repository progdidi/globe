import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import FlightsPage from "./pages/FlightsPage/FlightsPage";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  return (
    <div className="App">
      <Header/>
        <main className="main">
          <MainPage/>
          
        </main>
      <Footer/>

      <FlightsPage/>
    </div>
  );
}

export default App;
