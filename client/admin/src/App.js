import React from 'react';
import './App.css';
import AdminRouter from './router';
import { Provider } from 'react-redux'
import store from './Redux/store'

function App() {
  return (
    <div className="App">
      <Provider store={store} >
     <AdminRouter/>
     </Provider>
    </div>
  );
}

export default App;
