/*import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userData, setUserData] = useState(null);

  const login = async (email, password) => {
    setIsLoading(true);

    try {
      // Replace "http://localhost:5000" with the URL of your mock API server
      const response = await fetch('http://localhost:5000/users');
      const users = await response.json();

      // Find the user with the entered email and password
      const foundUser = users.find((user) => user.email === email && user.password === password);

      if (foundUser) {
        const { id, fullName } = foundUser;
        setUserToken(String(id)); // Set user token to simulate successful login (using user ID as token)
        setUserData({ fullName, email }); // Store user data in the AuthProvider
      } else {
        alert('Invalid login credentials.');
      }

      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching users data:', error);
      alert('An error occurred. Please try again later.');
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUserToken(null);
    setUserData(null);
  };

  return (
    <AuthContext.Provider value={{ isLoading, userToken, userData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };*/
