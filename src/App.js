
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';
import Axi from "./components/Axi/Axi";
import Local2 from "./components/Local2/Local2";
import Local from "./components/LocalS/Local";
import NavBar from "./components/NavBar/NavBar";
import UseEf from "./components/UseEf/UseEf";
import UseSt from "./components/UseSt/UseSt";

const App = () => {

  return(    
    <BrowserRouter>
      <NavBar/>
       <Routes>
         <Route path="usest" element={<UseSt/>}/>
         <Route path="useef" element={<UseEf/>}/>
         <Route path="local" element={<Local/>}/>
         <Route path="local2" element={<Local2/>}/>
         <Route path="axios" element={<Axi/>}/>
      </Routes>
    </BrowserRouter>
  )
  
}

export default App;
