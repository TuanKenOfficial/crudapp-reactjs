import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import ListUsers from './components/ListUsers';
import CreateUsers from './components/CreateUsers';
import EditUsers from './components/EditUsers';

function App() {
  return (
    <div className="App">
      <h5>App React and PHP API</h5>
      <BrowserRouter>
      <nav>
      <ul>
        <li>
          <Link to="/">List Users</Link>
        </li>
        <li>
          <Link to="user/create">Create Users</Link>
        </li>
      </ul>  
      </nav>
      <Routes>
        <Route index element={<ListUsers />}></Route>
        <Route path="user/create" element={<CreateUsers />}/>
        <Route path="user/:id/edit" element={<EditUsers />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
