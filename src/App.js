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
import Publicite from './components/Publicite';

function App() {
  return (
    <div>
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
            <Routes>
              <Route exact path='/publicite' element={<Publicite />} />
            </Routes>
       </Router>
      </div>
  );
}

export default App;
