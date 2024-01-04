import './App.css';
import UseContextHook from './components/useContextHook/useContextHook';
import {UseReducerHook} from './components/useReducerHook/useReducerHook';
import UseStateHook from './components/useStateHook/useStateHook';
import UseMemoHook from './components/useMemoHook/useMemoHook';
import UserefHook from './components/userefHook/userefHook';
import CustomHook from './components/customHook/customHook';
import Home from './components/home/home';
import {BrowserRouter as Router,Routes,Route,Link, useNavigate} from 'react-router-dom';
import Profile from './components/profile/profile';
import Parent from './components/parent/parent';
import Child from './components/child/child';
import Notfound from './components/notfound/notfound';
function App() {
  return (
    <Router>
      <div className="App">
        <nav className='topnav'>
          <ul>
          <li>
              <Link to={'/'} > Home</Link>
            </li>
            <li>
              <Link to={'/useContext'} > UseContext</Link>
            </li>
            <li>
              <Link to={'/useReducer'} > UseReducer</Link>
            </li>
            <li>
              <Link to={'/useRef'} > UseRef</Link>
            </li>
            <li>
              <Link to={'/useState'} > UseState</Link>
            </li>
            <li>
              <Link to={'/useMemo'} > UseMemo</Link>
            </li>
            <li>
              <Link to={'/customHook'} > CustomHook</Link>
            </li>
            <li>
              <Link to={'/parent'} > Nested Routing</Link>
            </li>
          </ul>
        </nav>
    </div>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route  path='/useContext' element={<UseContextHook/>}  ></Route>
      <Route  path='/useReducer' element={<UseReducerHook/>} ></Route>
      <Route  path='/useRef' element={<UserefHook/>} ></Route>
      <Route  path='/useState' element={<UseStateHook/>} ></Route>
      <Route  path='/useMemo' element={<UseMemoHook/>} ></Route>
      <Route path='/customHook' element={<CustomHook/>}></Route>
      <Route path="/parent" element={<Parent/>} >
      <Route path='child' element={<Child/>}/>
      </Route>
      <Route path='*' element={<Notfound/>}></Route>
    </Routes>
    </Router>
  );
}

export default App;
