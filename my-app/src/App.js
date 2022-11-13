import AllRoutes from "./pages/allRoutes"
import './App.css';
import Navbar from "./components/navbar";
import Navigation from "./components/navigation";
import SearchBar from "./components/searchBar";
import {KolkataUpdate} from "./components/content"

function App() {
  return (
    <div className="App">
     <Navbar/>
    <Navigation/>
    <SearchBar/>
    <KolkataUpdate/>
     <AllRoutes/>
    </div>
  );
}

export default App;
