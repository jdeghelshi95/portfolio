import './App.css';
import {useState, useEffect} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom'
import Nav from './Components/Nav';
import About from './pages/About';
import ContactMe from './pages/ContactMe';
import Login from './pages/Login';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import Skills from './pages/Skills';
//import all of your components to use them


//Guide: In your App.js return below: 
// return (
//   <div className="App">
  //Put your nav bar first with <Link> components
  //Put your <Route> components after
//   </div>
// );
function App() {

  const [skills, setSkills] = useState()
  const [contact, contactInfo] = useState()
  const [user, setUser] = useState()
  return (
    <div className="App mainBG">
      <Nav/>
      <Routes>

          <Route path='/' element={<About/>}/>
          <Route path='/contact' element={<ContactMe contactMe={contact}/>}/>
          <Route path='/login' element={<Login user={user} setUser={setUser}/>}/>
          <Route path='/prof' element={<Profile />}/>
          <Route path='/signup' element={<SignUp user={user} setUser={setUser}/>}/>
          <Route path='/skills' element={<Skills currentSkills={skills}/>}/>

      </Routes>

    
    </div>
  );
}

export default App;
