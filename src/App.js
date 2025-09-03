import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  return (
    <div className="App">
      <Header/>
        <main className="main">
          <MainPage/>
        </main>
      <Footer/>
    </div>
  );
}

export default App;
