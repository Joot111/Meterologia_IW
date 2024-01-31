import './App.css';
import SearchBar from './SearchBar';
import React, { useState, useEffect } from 'react';
import Tempo from './Tempo';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import Login from './Login/Login';
import Register from './Login/Register';
import Profile from './Login/Profile';
import Logout from './Login/Logout';
import Insercao from './InsereTempo';


function App() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pesquisa, setPesquisa] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [isLoginVisible, setLoginVisible] = useState(false); // Adicionado estado para controlar visibilidade do login


  useEffect(() => {

    // Verifica se o user está logado
    const storedLoggedInStatus = localStorage.getItem('isLogin');
    // Se o user estiver logado, o estado isLoggedIn é atualizado para true
    if (storedLoggedInStatus === 'true') {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }

      async function fetchData() {
      try {
       // const data = await fetch('https://api.sheety.co/272ea837f9f1630e722be20ebe12f7b3/tempo/tempo'); - original
       // const data = await fetch('https://api.sheety.co/143d3a99cbe53d62a0cc649674db7d79/tempo/tempo'); - substituto
       const data = await fetch('./data.json'); 
       const jsonData = await data.json()
        setData(jsonData.tempo);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
 
    fetchData();
  });

  if (loading) {
    return <div>Loading...</div>;
  }
 
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  function handleUserInput() {
    alert("kjsnd")
  }

    // Função para atualizar o estado isLoggedIn
  const handleLoginSuccess = (email) => {
    // Atualiza o estado isLoggedIn para true
    setIsLogin(true);
   
    localStorage.setItem('isLoggedIn', 'true');//armazena o estado isLoggedIn no localStorage

    localStorage.setItem('email', email); //armazena o email do user no localStorage
  };
  

  // Função para atualizar o estado isLoggedIn
  const handleLogout = () => {
    // Atualiza o estado isLoggedIn para false
    setIsLogin(false);
    
    localStorage.setItem('isLoggedIn', 'false');//armazena o estado isLoggedIn no localStorage
  
    localStorage.removeItem('email'); //remove o email do user do localStorage
  };

  const toggleLogin = () => {
    setLoginVisible(!isLoginVisible);
  };

  return (
    <Router>
      <div className='App'>
        <div className='AppIndexOut'>
          <div className='AppIndex'>
            <Link to="/">
              <img width="50px" height="50px" src="https://www.rumtor.com/imagenes/logo_tiempo_com.png" alt="Logo" />
            </Link>
            <h1>Tempo Certo</h1>
            <SearchBar pesquisa={pesquisa} onPesquisaChange={setPesquisa} />
            <img className="login" width="50px" height="50px" src="https://cdn2.iconfinder.com/data/icons/colored-simple-circle-volume-01/128/circle-flat-general-51851bd79-256.png" onClick={toggleLogin} />
          </div>
        </div>
        {isLoginVisible && (
              <div id="login" className="dropdown-content">
                <Link to="/login">
                  <p>Login</p>
                </Link>
                <Link to="/profile">
                  <p>Profile</p>
                </Link>
                <Link to="/logout">
                  <p>Logout</p>
                </Link>
                <Link to='/insercao'>
                  <p>Adicionar um Distrito</p>
                </Link>
              </div>
            )}
        <br />
        <div className='Pagina'>
          <Routes>
            <Route path="/login" element={<Login handleLoginSuccess={handleLoginSuccess} />} />
            <Route path="/" element={<Tempo info={data} pesquisa={pesquisa} />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout handleLogout={handleLogout} />} />
            <Route path="/insercao" element={<Insercao />} />
          </Routes>
        </div>
        <div className='Footer'>
          <p>Copyright 2021-3000, João Joaquim and Hugo Santos. All rights reserved.</p>
        </div>
      </div>
    </Router>
  );
}

export default App;