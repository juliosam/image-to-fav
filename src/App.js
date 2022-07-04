import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/home';
import { Favs } from './components/favs';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favs' element={<Favs/>}/>
      </Routes>
    </div>
  );
}

export default App;
