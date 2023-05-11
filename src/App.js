import { Route, Routes } from 'react-router-dom';
import './App.css';
import Restview from './Restview';
import Footer from './Footer';
import Header from './Header';
import Restaurant from './Restaurant';

function App() {
  return (
    <div className="App">

      <Header/>

      <Routes>
      <Route path='/' element={<Restaurant/>}>  </Route> 
      <Route path='/viewRest/:id' element={<Restview></Restview>}>  </Route>
      </Routes>

     <Footer></Footer>
     
    </div>
  );
}

export default App;
