import { Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import User from './components/User';
import Admin from './components/Admin';
import Signup from './components/Signup';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Auth from './components/Auth';
import Footer from './components/Footer';
import Studentmanagement from './components/Studentmangement';
import Contactus from './components/Contactus';
import Aboutus from './components/Aboutus';
import Features from './components/Features'
import Examcreation from './components/Examcreation';
import Registerpage from './components/Registerpage';
import Resultmng from './components/Resultmng';
import Quesmanage from './components/Quesmanage';
import Realtimemon from './components/Realtimemon';
import Offexm from './components/Offexm';
function App() {
  return (
    <div className="App">
      <Auth>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/admin' element={<Admin />} />
          {/* <Route path='/admin' element={<Admin />} /> */}
          <Route path='/login' element={<Login />} />
          <Route path='/user' element={<User />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </Auth>
      <Routes> <Route path='/stumngpge' element={<Studentmanagement />} />
        <Route path='/contact' element={<Contactus />} />
        <Route path='/about' element={<Aboutus />} />
        <Route path='/feature' element={<Features />} />
        <Route path='/examcreat' element={<Examcreation />} />
        <Route path='/registerpge' element={<Registerpage />} />
        <Route path='/resultmng' element={<Resultmng />} />
        <Route path='/quesmanage' element={<Quesmanage />} />
        <Route path='/realtimemon' element={<Realtimemon />} />
        <Route path='/offexm' element={<Offexm />} />

      </Routes>
      <Footer />
    </div>
  );
}
export default App;
