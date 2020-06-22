import React from 'react';
import './App.css';
import Child from './child';
import{TransactionProvider} from './transContext';

function App() {
    return ( 
  
    //   for calling provider  
    < TransactionProvider >
        < Child / >

        </ TransactionProvider>

    );
}

export default App;