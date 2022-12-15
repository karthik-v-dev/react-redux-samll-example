import { Provider } from 'react-redux';
import store  from './store/store';
import React from 'react';
import Counter from './components/counter';
import Score from './components/score';
import Timer from './components/timer';
import './App.css';

// import Products from './components/Dummy/Products';

function App() {
  return (
           <Provider store ={store}>
            
            <Counter/>
            <Score/>
            <Timer/>
            {/* <Products/> */}
           </Provider>
  );
}

export default App;
