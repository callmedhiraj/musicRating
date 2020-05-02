import React from 'react';
import './App.css';
import AdminRouter from './router';
import { Provider } from 'react-redux'
import store from './Redux/store'
import {BrowserRouter as Router} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Provider store={store} >
        <Router>
     <AdminRouter/>
     </Router>
     </Provider>
    </div>
  );
}

export default App;
