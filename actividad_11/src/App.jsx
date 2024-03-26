
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home'
import Users from './pages/Users';
import UserId from './pages/UserId';
import Vip from './pages/Vip';
import NoVip from './pages/NoVip';
import AuthRoute from './AuthRoute';
import './App.css'
function App() {


  return (
    <>
    <BrowserRouter>
      <header>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/users'>Users</Link></li>
            <li><Link to='/vip'>VIP</Link></li>
            </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/users' element={<Users />}/>
        <Route path='/users/:id' element={<UserId />} />  
        <Route path='/novip' element={<NoVip />} />
        <Route path='/vip' element={
          <AuthRoute>
             <Vip />
          </AuthRoute>
        }/>
      </Routes>

    </BrowserRouter>
      
    </>
  );
}

export default App
