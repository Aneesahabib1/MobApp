// App.js
import React from 'react';
import { AuthProvider } from './context/authContext';
import AppNav from './navigation/AppNav';
import AppNavigation from './navigation/AppNavigation';

export default function App() {
  return (
    <AppNavigation/>
  );
}
