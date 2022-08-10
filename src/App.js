import './App.css';
import { BrowserRouter as Router ,Route,Routes} from 'react-router-dom';
import Accueil from './components/Accueil';
import Services from './components/Services';
import MonMenu from './components/MonMenu';

function App() {
  return (
        
        <Router>
            <MonMenu/>
          
            <Routes>
              <Route exact path='/' element={<Accueil />} />
            </Routes>
            <Routes>
              <Route exact path='/services' element={<Services />} />
            </Routes>
            
       </Router>
        
  );
}

export default App;
