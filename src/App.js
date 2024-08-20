import HomeMain from './Components/HomeMain';
import Home from './Components/Home';

import { BrowserRouter as Router, Routes, Route   } from 'react-router-dom';
import VisitorPage from './Components/VisitorPage';
import UserSign from './Components/UserSign';
import Login from './Components/Login';
import SignupForm from './Components/SignupForm';
import LoginForm from './Components/LoginForm';
import GuideSignupForm from './Components/GuideSignupForm';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
<Router>
  <Routes>
  <Route path="/" element={ <HomeMain/>} />
  <Route path="/confrom" element ={<VisitorPage/>}/>
  <Route path="/Login" element={<Login/>}/>
  <Route path="/sign" element={<SignupForm/>}/>
  <Route path="/GLog" element={<LoginForm/>}/>
  <Route path="/GSign" element={<GuideSignupForm/>}/>
  <Route path="/home" element={<Home/>}/>
  </Routes>
</Router>


       
         </header>

  
    </div>
    </> );
}

export default App;
