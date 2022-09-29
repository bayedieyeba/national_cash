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
import { useEffect, useState } from 'react';
import Slider from 'react-slick'
import IMAGES from './components/ImagesPublicite';
import AjouterImagePub from './components/backend/AjouterImagePub';
import { listAll, ref ,getDownloadURL } from 'firebase/storage' 
import {storage} from './components/backend/Firebase'
function App() {
  const [imageList, setImageList] = useState([])
  const imagesLitRef = ref(storage,"images/")
  useEffect(()=>{
    listAll(imagesLitRef).then((response)=> {
      response.items.forEach((item)=>{
          getDownloadURL(item).then((url)=>{
            setImageList((prev) => [...prev, url])
          })
      }) 
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
            imageList.map((url,i)=>(
              <div key={i}>
                  <img  src={url} alt="" className="m-3 p-3" style={{width:'450px',height:'390px'}} />
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
              <Route exact path='/upload-images' element={<AjouterImagePub />} />
            </Routes>
       </Router>
      </div>
  );
}

export default App;
