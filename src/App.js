import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import Footer from './Pages/Shared/Footer';
import Purches from './Pages/Home/Purches';
import NotFound from './Pages/Shared/NotFound';
import RequireAuth from './Pages/Shared/RequireAuth';
import Portfolio from './Pages/Home/Portfolio';
import Dasboard from './Pages/Dashboard/Dasboard';
import MyOrder from './Pages/Dashboard/MyOrder';
import MyProfile from './Pages/Dashboard/MyProfile';
import AddReview from './Pages/Dashboard/AddReview';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Payment from './Pages/Dashboard/Payment';
import UpdateProfile from './Pages/Dashboard/UpdateProfile';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/purchase/:carId' element={<RequireAuth>
          <Purches></Purches>
        </RequireAuth>}></Route>
        <Route path='/dashboard' element={<RequireAuth>
          <Dasboard></Dasboard>
        </RequireAuth>}>
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path='addreview' element={<AddReview></AddReview>}></Route>
          <Route path='updateprofile/:id' element={<UpdateProfile></UpdateProfile>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
        </Route>


        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
