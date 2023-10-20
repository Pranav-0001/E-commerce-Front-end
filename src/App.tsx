import React from 'react';
import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';

function App() {
  return (
    <div className="App font-inter">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/products' element={<ProductsPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
 