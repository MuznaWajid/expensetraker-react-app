import React, { useContext, useState } from "react";
import { TransactionContext } from "./transContext";

// for dinamically
function Child() {
  //     let transactions =[
  //     {amount:500,desc :"Cash"},
  //     {amount:-40,desc :"Book"},
  //     {amount:-200,desc :"Cemra"}
  // ]
  let { transactions, addTransaction } = useContext(TransactionContext);
  let [newDesc, setDesc] = useState("");
  let [newAmount, setAmount] = useState(0);
  //  for event handling
  const handleAddition = (event) => {
    event.preventDefault();
    if (Number(newAmount)===0){alert("Please Enter Correct Value")
return false;
}
    console.log(newDesc, newAmount);
    addTransaction({ amount: Number
       ( newAmount), desc: newDesc });
       setDesc('');
       setAmount(0);
    }
  const getIncome = () => {
    let income = 0;
    for (var i = 0; i < transactions.length; i++){
        income = transactions[i].amount + income
    }
    return income;
  };

  const getExpense = () => {
    let expense = 0;
    for (var i = 0; i < transactions.length; i++){
      if (transactions[i].amount < 0) 
        expense += transactions[i].amount
      }
    return expense;
  };

  return (
    <div className="container">
      <h1 className="text-center">Expense Tracker</h1>
      <h2>
        Your Balance <br />
        {getIncome() - getExpense()}
      </h2>
      <div className="Expense-container">
        <h3>
          INCOME
          <br />
          {getIncome()}
        </h3>
        <h3>
          EXPENCE <br />
          {getExpense()}
        </h3>
      </div>
      <div className="History-container">
        <h3>History</h3>
        <hr />
        <ul className="History-taransaction-list-container-container">
          {transactions.map((transobj, ind) => {
            return (
              // for key using map
              <li key={ind}>
                <span>{transobj.desc}</span>
                <span>{transobj.amount}</span>

              </li>
            );
          })}
        </ul>
      </div>
      <div className="tarsaction-container">
        <h3>Add A New Transaction</h3>
        <hr />
        <form className="taransactio-form-container" onSubmit={handleAddition}>
          <label>
            Enter Description
            <br />
            <input
              type="text"
              value={newDesc}
              placeholder="Description"
              onChange={(ev) => setDesc(ev.target.value)}
              required
            />
          </label>
          <br />{" "}
          <label>
            Enter Amount
            <br />
            <input
              type="Number"
              value={newAmount}
              placeholder="Amount"
              onChange={(ev) => setAmount(ev.target.value)}
              required
            />
          </label>
          <br /> <input type="submit" value="Add Transaction" />{" "}
        </form>
      </div>
    </div>
  );
}
export default Child;
