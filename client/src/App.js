import './App.css';
import { Routes, Route } from 'react-router-dom';
import DropDown from './components/DropDown';
import People from './components/People'
import Planets from './components/Planets'
import NotFound from './components/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App container w-50">
      <DropDown />
      <Routes>
        {/* <Route path='/' element={<DropDown />} /> */}
        <Route path='/people/:peopleID' element={<People />} />
        <Route path='/planets/:planetID' element={<Planets />} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
