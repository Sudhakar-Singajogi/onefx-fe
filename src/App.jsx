import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import ToDoList from './pages/ToDoList';
import Signup from './pages/Signup';
import NavMenuBar from './components/NavMenuBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from './pages/SignIn';

function App() { 
 
  return (
    <>
      <Router>
        <NavMenuBar />
        <div className="mt10">

      <Routes>
        <Route path="/" element={<ToDoList />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
        </div>
    </Router>
    </>
  )
}

export default App

