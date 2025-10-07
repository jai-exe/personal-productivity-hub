import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TransactionList from './TransactionList.jsx';
import AddTransactionForm from './AddTransactionForm.jsx';

const DUMMY_TRANSACTIONS = [
  { id: uuidv4(), title: 'Groceries', amount: 50.75, type: 'out' },
  { id: uuidv4(), title: 'Paycheck', amount: 1200, type: 'in' },
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
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const handleAddTransaction = (newTransactionData) => {

    const transactionWithId = {
      ...newTransactionData,
      id: uuidv4(),
    }
    setTransactions([...transactions, transactionWithId]);
    setIsFormVisible(false);
  };

  const handleStartEdit = (id) => {
    setEditingId(id);
    setIsFormVisible(true);
  }

  return (
    <div className="money-tab-container">
      <TransactionList 
        transactions={transactions}
        onStartEdit={handleStartEdit}
      />
      
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