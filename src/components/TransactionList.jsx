import React from 'react';
import './TransactionList.css'


const TransactionList = ({ transactions }) => {
    return (
        <div className="transaction-list-container">
            <h3>History</h3>
            <ul>
                {transactions.map((transaction, index) => (
                    <li key={index} className="transaction-item">
                        <span>{transaction.title}</span>
                        <span className={transaction.type === 'in' ? 'amount-in' : 'amount-out'}>
                            {transaction.type === 'in' ? '+' : '-'}${transaction.amount.toFixed(2)}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TransactionList;