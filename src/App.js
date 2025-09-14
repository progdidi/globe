import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AccountPage from "./pages/AccountPage/AccountPage";
import FavouritesPage from "./pages/FavouritesPage/FavouritesPage";
import FlightsPage from "./pages/FlightsPage/FlightsPage";
import HotelBookingPage from "./pages/HotelBookingPage/HotelBookingPage";
import HotelsPage from "./pages/HotelsPage/HotelsPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import MainPage from "./pages/MainPage/MainPage";
import SingleHotelPage from "./pages/SingleHotelPage/SingleHotelPage";

function App() {
  return (
    <div className="App">
      <Header/>
        <main className="main">
          {/* <MainPage/>
          <FlightsPage/> */}
          {/* <HotelsPage/> */}

          <SingleHotelPage/>
          <HotelBookingPage/>
          <FavouritesPage/>
          <AccountPage/>
          <LoginPage/>
        </main>
      <Footer/>

      
    </div>
  );
}

export default App;
