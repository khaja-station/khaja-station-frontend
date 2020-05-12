import React from 'react';
import Main from './main';
import 'assets/css/app.css';
import { AppProvider } from './app.context';

function App() {
  return (
    <AppProvider>
      <Main />
    </AppProvider>
  );
}

export default App;
