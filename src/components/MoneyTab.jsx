import React, { useState, useEffect } from 'react';
import TransactionList from './TransactionList.jsx';
import AddTransactionForm from './AddTransactionForm.jsx';

const DUMMY_TRANSACTIONS = [
  { title: 'Groceries', amount: 50.75, type: 'out' },
  { title: 'Paycheck', amount: 1200, type: 'in' },
];

const MoneyTab = () => {
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem('transactions');
    if (savedTransactions) {
      return JSON.parse(savedTransactions);
    } else {
      return DUMMY_TRANSACTIONS;
    }
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
    setIsFormVisible(false);
  };

  return (
    <div className="money-tab-container">
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
};

export default MoneyTab;