import './App.css';
import { BrowserRouter as Router ,Route,Routes} from 'react-router-dom';
import Accueil from './components/Accueil';
import Credits from './components/Credits';
import Comptes from './components/Comptes';
import Contact from './components/Contact';
import Header from './components/Header';
import Sticky from './components/Sticky';
import Cashily from './components/Cashily';
import Popup from "./components/Popup";
import { useState,useEffect } from 'react';
import axios from "axios";
import Slider from 'react-slick'
import IMAGES from './components/ImagesPublicite';
import { listAll, ref ,getDownloadURL } from 'firebase/storage' 
import UploadImagePub from './components/UploadImagePub';
import ModifierContenuCompte from './components/ModifierContenuCompte';
import ModifierCompteAnglais from './components/ModifierCompteAnglais';
import ModifierCompteArabe from './components/ModifierCompteArabe';
import { ProtectedRoute } from './components/protected.route';
import ModifierContenuSite from './components/ModifierContenuSite';
import ModifierContenuCredit from './components/ModifierContenuCredit';
import ModifierContenuCreditFrancais from './components/ModifierContenuCreditFrancais';
import ModifierContenuCreditArabe from './components/ModifierContenuCreditArabe';
import ModifierContenuCreditAnglais from './components/ModifierContenuCreditAnglais';
function App() {
  
  const [urls,setUrls] = useState([])
      useEffect(()=>{
        axios.get(`http://localhost:4000/api/images`)
        .then(res=>{
          console.log("Status: ", res.status);
          setUrls(res.data)
          console.log(urls)
         
        })
        .catch(err=>{
          console.log(err)
        })

    },[])
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
 
  return (
    <div>
      <div>
          
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup} >
          
          <Slider {...settings}   >
          
          {
            urls.map((image,i)=>(
              <div key={i}>
                  <img  src={`http://localhost:4000/images/${image.url}`} alt="" className="m-3 p-3" style={{width:'450px',height:'390px'}} />
              </div>
              
            ))
          }
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
              <Route exact path='/cashily' element={<Cashily />} />
            </Routes>
            <Routes>
              <Route exact path='/upload-image' element={<UploadImagePub />} />
            </Routes>
            <Routes>
              <Route exact path='/modifier-compte-francais' element={<ModifierContenuCompte />} />
            </Routes>
            <Routes>
              <Route exact path='/modifier-compte-anglais' element={<ModifierCompteAnglais />} />
            </Routes>
            {/* <Routes>
              <ProtectedRoute exact path='/modifier-compte-anglais' element={<ModifierCompteAnglais />} />
            </Routes> */}
            <Routes>
              <Route exact path='/modifier-compte-arabe' element={<ModifierCompteArabe />} />
            </Routes>
            
            <Routes>
              <Route exact path='/modifier-contenu-site' element={<ModifierContenuSite />} />
            </Routes>
            
            <Routes>
              <Route exact path='/modifier-contenu-credits' element={<ModifierContenuCredit />} />
            </Routes>
            <Routes>
              <Route exact path='/modifier-credit-francais' element={<ModifierContenuCreditFrancais />} />
            </Routes>
            <Routes>
              <Route exact path='/modifier-credit-arabe' element={<ModifierContenuCreditArabe />} />
            </Routes>
            <Routes>
              <Route exact path='/modifier-credit-anglais' element={<ModifierContenuCreditAnglais />} />
            </Routes>
            {/* <Routes>
              <Route exact path='/upload-images' element={<AjouterImagePub />} />
            </Routes> */}
       </Router>
      </div>
  );
}

export default App;
