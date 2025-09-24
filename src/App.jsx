import React, { useState } from 'react';
import TransactionList from './components/TransactionList.jsx';
import AddTransactionForm from './components/AddTransactionForm.jsx';
import './App.css';

const fakeData = [
    {title: 'Groceries', amount: 50.75, type: 'out'},
    {title: 'Paycheque', amount: 1200, type: 'in'},
    {title: 'Dinner', amount: 85.50, type: 'out'}
];

function App() {

  const [transactions, setTransactions] = useState(fakeData);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleAddTransaction = (newTransaction) => {
        
        setTransactions([...transactions, newTransaction]);
        setIsFormVisible(false);
    }

  return (
    <div className="app-container">
      <h1>Personal Productivity Hub</h1>


      <TransactionList transactions={transactions} />

      <button className="add-button" onClick={() => setIsFormVisible(true)}>+</button>

      {isFormVisible && (
        <AddTransactionForm 
          onCancel={() => setIsFormVisible(false)}
          onAddTransaction={handleAddTransaction} 
        />
      )}


    </div>
  );

}

export default App
