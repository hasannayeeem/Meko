
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
import MyReview from './Pages/Dashboard/MyReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import Dashboard from './Pages/Dashboard/Dashboard';
import RequireAdmin from './Pages/Login/RequireAdmin';
import Users from './Pages/Dashboard/Users';
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import MyOrders from './Pages/Dashboard/MyOrders';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/purchase/:productId' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>

        <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<MyProfile></MyProfile>} ></Route>
          <Route path='review' element={<MyReview></MyReview>} ></Route>
          <Route path='orders' element={<MyOrders></MyOrders>} ></Route>
          {/* <Route path='payment/:id' element={<Payment></Payment>} ></Route> */}

          <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>} ></Route>
          <Route path='addProduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>} ></Route>
          <Route path='manageProducts' element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>} ></Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
