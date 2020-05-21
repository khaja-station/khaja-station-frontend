import React from 'react';
import Main from './main';
import 'assets/css/app.css';
import { AppProvider } from './app.context';
import { AuthProvider } from 'auth/auth.context';

function App() {
  return (
    <AppProvider>
      <AuthProvider>
        <Main />
      </AuthProvider>
    </AppProvider>
  );
}

export default App;
