import PropsTypes from 'prop-types';
import { useState } from 'react';

function ExpenseForm({ onAddExpense }) {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !amount) return;

        const newExpense = {
            id: Date.now(),
            title,
            amount: parseFloat(amount),
        };

        onAddExpense(newExpense);
        setTitle('');
        setAmount('');
    };

    return (
        <form onSubmit={handleSubmit} className="expense-form">
            <input
                type="text"
                placeholder="Expense title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button type="submit">Add Expense</button>
        </form>
    );
}

ExpenseForm.propTypes = {
    onAddExpense: PropsTypes.func.isRequired,
};

export default ExpenseForm;