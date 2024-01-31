import React, { useEffect, useState } from 'react';
import './Profile.css';



// Componente Profile

const Profile = () => {

  // Estado para armazenar o email do user
  const [userEmail, setUserEmail] = useState('');
  const [isLoading, setIsLoading] = useState(true); // Estado de carregamento


  // Hook useEffect para realizar a requisição
  // para o endpoint de login e armazenar o email do user
  useEffect(() => {
    const fetchUserEmail = async () => {
      try {
        //const response = await fetch('https://api.sheety.co/272ea837f9f1630e722be20ebe12f7b3/login/login'); -- original
        const response = await fetch('https://api.sheety.co/143d3a99cbe53d62a0cc649674db7d79/login/login'); //-- substituto
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const responseData = await response.json();


        // Se o user tiver pelo menos um email
        if (responseData && responseData.login && responseData.login.length > 0) { 
          // Armazene o primeiro email
          const firstEmail = responseData.login[0].email;
          setUserEmail(firstEmail);
          // Se não, armazene uma mensagem de erro
        } else {
          setUserEmail('No emails found');
        }
        // Se não, armazene uma mensagem de erro
      } catch (error) {
        console.error('Error fetching user email:', error);
        setUserEmail('Error fetching email');
      }
    };
  // Chamada da função fetchUserEmail
    fetchUserEmail();
  }, []);


   // Retorna o componente Profile
  // Exibe o email do user e o ícone de círculo de pessoa
  return (
    <div>
        <h1>Profile</h1>
        <div className="profile-container">
        {userEmail ? (
        <div className="profile-content">
          <p>Email: {userEmail}</p>
        </div>
      ) : (
        <p></p>
      )}
    </div>
    </div>

  );
};
export default Profile;