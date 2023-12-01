import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import { Routes, Route } from 'react-router-dom';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import { useContextGlobal } from "./Components/utils/global.context";



function App() {

  const {state}=useContextGlobal()

  
  return (
      <div className={state.theme}>
          <div className="body">
          <Navbar/>
        
         <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Contacto' element={<Contact/>}/>
          <Route path='/Detail/:id' element={<Detail/>}/>
          <Route path ='/favoritos' element={<Favs/>}/>
        </Routes>

        <Footer/>
          </div>
         
          
      </div>
  );
}

export default App;
