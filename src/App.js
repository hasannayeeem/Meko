
import './App.css';
import Header from './Pages/Shared/Header';
import Footer from './Pages/Shared/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import NotFound from './Pages/Shared/NotFound';
import RequireAuth from './Pages/Login/RequireAuth';
import Purchase from './Pages/Purchase/Purchase';
import MyProfile from './Pages/Dashboard/MyProfile';
import Dashboard from './Pages/Dashboard/Dashboard';
import RequireAdmin from './Pages/Login/RequireAdmin';
import Users from './Pages/Dashboard/forAdmin/Users';
import AddProduct from './Pages/Dashboard/forAdmin/AddProduct';
import ManageProducts from './Pages/Dashboard/forAdmin/ManageProducts';
import MyOrders from './Pages/Dashboard/forUser/MyOrders';
import { ToastContainer } from 'react-toastify';
import AddReview from './Pages/Dashboard/forUser/AddReview';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import AllOrders from './Pages/Dashboard/forAdmin/AllOrders';
import Payment from './Pages/Dashboard/forUser/Payment';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/portfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/purchase/:productId' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>

        <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<MyProfile></MyProfile>} ></Route>
          <Route path='addReview' element={<AddReview></AddReview>} ></Route>
          <Route path='orders' element={<MyOrders></MyOrders>} ></Route>
          <Route path='payment/:id' element={<Payment></Payment>} ></Route>

          <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>} ></Route>
          <Route path='addProduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>} ></Route>
          <Route path='manageProducts' element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>} ></Route>
          <Route path='manageOrders' element={<RequireAdmin><AllOrders></AllOrders></RequireAdmin>} ></Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
