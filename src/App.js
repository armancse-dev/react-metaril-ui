import logo from './logo.svg';
import './App.css';
import { Button, Rating } from '@mui/material';
import Newspapers from './components/Newspapers/Newspapers';

function App() {
  return (
    <div className="App">
      <Button variant="contained">Contained</Button>
      <Rating name="read-only" value={4} readOnly />
      <Newspapers></Newspapers>
    </div>
  );
}

export default App;
