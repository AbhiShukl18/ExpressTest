import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import AddBook from './Component/AddBook';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path= "/" element={<Home />} />
        <Route path= "add-book" element={<AddBook />} />
        </Routes>
    </div>
  );
}

export default App;
