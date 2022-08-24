import './App.css';
import { BrowserRouter as Router ,Route,Routes} from 'react-router-dom';
import Accueil from './components/Accueil';
import Menu from './components/Menu';
import Credits from './components/Credits';
import Comptes from './components/Comptes';
import Contact from './components/Contact';
import Creusol from './components/Creusol';
import NavBar from './components/NavBar';
import Slider from './components/Slider';

function App() {
  return (
        <Router>
          <NavBar />
          <Slider />
            {/* <Menu/>
            <Creusol /> */}
            {/* <Routes>
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
            </Routes> */}
       </Router>
        
  );
}

export default App;
