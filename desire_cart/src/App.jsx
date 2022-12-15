import AllRoutes from "./Components/AllRoutes";
import Navbar from "./Components/Navbar";
import './App.css';
import {Footer, LargeWithAppLinksAndSocial} from "./Components/Footer"

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <div>
          <Footer />
          <LargeWithAppLinksAndSocial />
      </div>
    </div>
  );
}

export default App;
