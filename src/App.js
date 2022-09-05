import './App.css';
import { BrowserRouter as Router ,Route,Routes} from 'react-router-dom';
import Accueil from './components/Accueil';
import Credits from './components/Credits';
import Comptes from './components/Comptes';
import Contact from './components/Contact';
import Header from './components/Header';
import FormulaireService from './components/FormulaireService';
import Sticky from './components/Sticky';
import Cashily from './components/Cashily';
import Popup from "./components/Popup";
import { useEffect, useState } from 'react';
import popup1 from './images/popup1.png';
import popup2 from './images/popup2.png';
import Slider from 'react-slick'
function App() {
  const   settings = {
    dots: true,
    infinite: true,
    arrows:true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay : true,
    adaptiveHeight: true
  };
  const [buttonPopup,setButtonPopup] = useState(true)
  useEffect(()=>{
    
},[])
  return (
    <div>
      <div>
          
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup} >
          {/* <Slider />  */}
          <Slider {...settings}   >
          <img src={popup1} alt="" className="m-3 p-3" style={{width:'450px',height:'390px'}} />
          <img src={popup2} alt="" className="m-3 p-3" style={{width:'450px',height:'390px'}} />
          </Slider>
              
          </Popup >
       </div>
        <Router>
          <Header />
          <Sticky />
            <Routes>
              <Route exact path='/' element={<Accueil />} />
            </Routes>
            <Routes>
              <Route exact path='/services' element={<Comptes />} />
            </Routes>
            <Routes>
              <Route exact path='/credits' element={<Credits />} />
            </Routes>
            <Routes>
              <Route exact path='/contacts' element={<Contact />} />
            </Routes>
            <Routes>
              <Route exact path='/souscription' element={<FormulaireService />} />
            </Routes>
            <Routes>
              <Route exact path='/cashily' element={<Cashily />} />
            </Routes>
       </Router>
      </div>
  );
}

export default App;
