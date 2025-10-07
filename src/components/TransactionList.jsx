import React from 'react';
import './TransactionList.css'


const TransactionList = ({ transactions, onStartEdit }) => {
    return (
        <div className="transaction-list-container">
            <h3>History</h3>
            <ul>
                {transactions.map((transaction) => (
                    <li key={transaction.id} className="transaction-item">
                        <div>
                            <span>{transaction.title}</span>
                            <span className={transaction.type === 'in' ? 'amount-in' : 'amount-out'}>
                                {transaction.type === 'in' ? '+' : '-'}${transaction.amount.toFixed(2)}
                            </span>
                        </div>
                        <div>
                            <button onClick = {() => onStartEdit(transaction.id)} className="edit-button">
                                Edit
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TransactionList;