//import logo from './logo.svg';
import './App.css';
import Weather from './component/weather';
import Adduser from './component/adduser';
import Login from './component/login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
      <h1 className='header'>User Admin</h1>
      <Routes>
      <Route path='/' element={<Login></Login>}></Route>
      <Route path='/user' element={<><div className="weather">
      <Weather ></Weather>
      </div>
      <Adduser></Adduser></>}></Route>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
