import './App.css';
import { BrowserRouter as Router ,Route,Routes} from 'react-router-dom';
import Accueil from './components/Accueil';
import Menu from './components/Menu';
import Credits from './components/Credits';
import Comptes from './components/Comptes';
import Contact from './components/Contact';

function App() {
  return (
        <Router>
            <Menu/>
          
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
       </Router>
        
  );
}

export default App;
