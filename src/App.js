import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const defaultExpenses = [
    {
        id: 1,
        title: "React course",
        amount: 499,
        date: new Date(Date.UTC(2023, 4, 10)),
    },
    {
        id: 2,
        title: "Javascript course",
        amount: 499,
        date: new Date(Date.UTC(2023, 3, 1)),
    },
];

function App() {
    const [expenses, setExpenses] = useState(defaultExpenses);
    const onAddExpenseHandler = (expenseData) => {
        console.log(expenseData);
        // setExpenses([...expenses, expenseData]) --->not 100 % correct
        setExpenses((prevExpenses) => {
            return [...prevExpenses, expenseData];
        });
    };
    // console.log(expenses);
    // const month = expenses[0].date.toLocalDateString("en-US", { timeZone: 'UTC', hour12:true,day:'numeric' ,month:'long', year:'numeric',});
    return (
        <div className="App">
            <header className="App-header">
                <h1>Hello React</h1>
                <NewExpense onAddExpense={onAddExpenseHandler} />
                <Expenses expenses={expenses} />
            </header>
        </div>
    );
}

export default App;
