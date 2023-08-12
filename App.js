
import ExpenseItem from './components/Expenses/ExpenseItem';

const App = () => {
    const expenses = [
        {
            id: 'e1',
            title: 'travell',
            location: 'Airport',
            amount: 100,
            date: '2023-08-12'
        },
        {
            id: 'e2',
            title: 'cloth',
            location: 'Mall',
            amount: 50,
            date: '2023-08-10'
        },
        {
            id: 'e3',
            title: 'house',
            location: 'pune',
            amount: 700000,
            date: '2023-07-25'
        }
    ];

    return (
        <div>
            <h2>Expense Items</h2>
            {expenses.map(expense => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title} 
                    amount={expense.amount} 
                    location={expense.location}
                    date={expense.date}
                />
            ))}
        </div>
    );
}

export default App;
