import PropsTypes from 'prop-types';
import ExpenseItem from './ExpenseItem';

function ExpenseList({ expenses, onDeleteExpense }) {
    return (
        <div className="expense-list">
            {expenses.length > 0 ? (
                expenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        expense={expense}
                        onDelete={() => onDeleteExpense(expense.id)}
                    />
                ))
            ) : (
                <p>No expenses recorded.</p>
            )}
        </div>
    );
}

ExpenseList.propTypes = {
    expenses: PropsTypes.array.isRequired,
    onDeleteExpense: PropsTypes.func.isRequired,
};

export default ExpenseList;