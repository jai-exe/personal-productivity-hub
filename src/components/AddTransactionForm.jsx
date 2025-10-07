import React, { useState } from 'react';
import './AddTransactionForm.css';

const AddTransactionForm = ({ onCancel, onAddTransaction }) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('out');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !amount) {
            alert('Please fill in all fields.');
            return;
        }

        const newTransactionData = {
            title: title,
            amount: parseFloat(amount),
            type: type,
        };

        onAddTransaction(newTransactionData);
    };

    return (
        <div className="form-modal-overlay">
            <form onSubmit={handleSubmit} className="transaction-form">
                <h3>Record Transaction</h3>

                <label className="form-label">Title</label>
                <input
                    type="text"
                    placeholder="eg. Coffee"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label className="form-label">Amount</label>
                <input
                    type="number"
                    placeholder="eg. 6.25"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />

                <label className="form-label">Type</label>
                <select value={type} onChange={(e) => setType(e.target.value)}>
                    <option>Money Out (Expense)</option>
                    <option>Money In (Income)</option>
                </select>

                <div className="form-buttons">
                    <button type="submit" className="add-transaction-button">Add</button>
                    <button type="button" className="add-transaction-button" onClick={onCancel}>Cancel</button>
                </div>

            </form>
        </div>
    );
};

export default AddTransactionForm;

