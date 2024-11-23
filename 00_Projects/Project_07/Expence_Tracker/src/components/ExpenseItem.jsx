import PropsTypes from 'prop-types';

function ExpenseItem({ expense, onDelete }) {
    return (
        <div className="expense-item">
            <span>{expense.title}</span>
            <span>${expense.amount.toFixed(2)}</span>
            <button onClick={onDelete} className="delete-btn">Delete</button>
        </div>
    );
}

ExpenseItem.propTypes = {
    expense: PropsTypes.object.isRequired,
    onDelete: PropsTypes.func.isRequired
};

export default ExpenseItem;