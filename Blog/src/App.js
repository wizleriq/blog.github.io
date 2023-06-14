import './App.css';
import Write from './Write';
import Navbar from './components/Navbar';
import Settings from './components/Settings';
// import Header from './components/Header';
import Home from './components/Home';
import Single from './components/Single';
import Login from './components/Login';
import Register from './Register';
import { Routes, Route } from "react-router-dom";import Details from './components/Details';

import SinglePost from './components/SinglePost';


function App() {
  const user = true; 

  const renderElement = () => {
    return user ? <Home /> : <Register />;
  };

  const renderLogin = () => {
    return user ? <Home /> : <Login />;
  };

  const renderAbout = () => {
    return user ? <Home /> : null;
  };

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={renderElement()} />
        <Route path="/" element={renderLogin()} />
        <Route path="/write" element={ user ? <Write /> : <Register /> } />
        <Route path="/about" element={renderAbout} />
        <Route path='/singlepost' element={<SinglePost />} /> 
        <Route path="/login" element={<Login /> } />
        <Route path="/register" element={<Register /> } />
        <Route path="/settings" element={ user ? <Settings /> : <Register /> } />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </>
  );
}

export default App;


