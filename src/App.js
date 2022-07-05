import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/home';
import { Favs } from './components/favs';
import { useState } from 'react';

function App() {
  const [favList, setFavList] = useState([])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home favList={favList} setFavList={setFavList}/>}/>
        <Route path='/favs' element={<Favs favList={favList} setFavList={setFavList}/>}/>
      </Routes>
    </div>
  );
}

export default App;
