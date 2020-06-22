import React,{createContext, useReducer} from 'react';
import TransactionRediucer from './TransacRediucer';

// const { createContext } = require("react")

// For Globally Storeage
const initialtransactions =[
    {amount:+500,desc :"Cash"},
    {amount:-40,desc :"Book"},
    {amount:-200,desc :"Cemra"}
]
// for creating  and exporting context by using hooks
export const TransactionContext =createContext(initialtransactions);
// 

export const TransactionProvider = ({children})=>{
    let [state , dispatch] = useReducer(TransactionRediucer,initialtransactions)
    function addTransaction(transobj){
dispatch({
    type:"ADD-TRANSACTION",
    payload:
      {
          amount:transobj.amount
        ,desc :transobj.desc},
          

})
    }

return(<TransactionContext.Provider value={{
    transactions:state,
    addTransaction
}}>
{children}
    </TransactionContext.Provider>)
}