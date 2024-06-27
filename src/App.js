import Navbar from "./components/navbar.js";
import Slider from "./components/slider.js";
import ProductList from "./components/productlist.js";
import About from "./components/about.js";
import { Routes,Route } from "react-router-dom";
import Details from "./components/details.js";




function App() {
  return (
    
    <div className="App">
      <Navbar /> 
      <Routes>
        <Route 
          path="/"
          element={
            <>
              <Slider/>
              <ProductList/>
            </>
          }
        />
        <Route path="about" element={<About/>}/>
        <Route path="details/:productId" element={<Details/>}/>

      </Routes>
    </div>
  );
}

export default App;
