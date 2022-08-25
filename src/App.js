import './App.css';
import { BrowserRouter as Router ,Route,Routes} from 'react-router-dom';
import Accueil from './components/Accueil';
import Credits from './components/Credits';
import Comptes from './components/Comptes';
import Contact from './components/Contact';
import Header from './components/Header';

function App() {
  return (
    <div >
        <Router>
          <Header />
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
      </div>
  );
}

export default App;
