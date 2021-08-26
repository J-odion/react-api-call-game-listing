import './App.css';
import { useDispatch } from 'react-redux';
import {fetchGames} from './redux/games/actions/games.actions'
import { useEffect } from 'react';
import { Navbar } from './components/navbar/Navbar';
import { Games } from './components/games/Games';
import { Dropdown } from './components/gamefilter/Dropdown';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // FETCH THE GAMES FROM THE SERVER TO REDUX
    dispatch(fetchGames());
  }, [dispatch])
  return (
    <div className="main__container">
      <Navbar />
      <Dropdown />
      <Games />
    </div>
  );
}

export default App;
