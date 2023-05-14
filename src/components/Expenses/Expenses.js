import React from "react";
import Card from "../UI/Card";
import "./Expenses.css"
import ExpenseItem from "./ExpenseItem";

const Expenses = ({ expenses }) => {
    let  finalExpenses = <h1>No Expenses to show</h1>
    if (expenses.length > 0){
        finalExpenses = expenses.map(expense=>{
            return <ExpenseItem
            key = {expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
        />
        })
    }
    
    return (
        <Card className="expenses">
            {finalExpenses}
        </Card>
    );
};

export default Expenses;
