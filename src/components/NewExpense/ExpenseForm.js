import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({onAddExpense}) => {
    const[enteredTitle, setEnteredTitle] = useState("");
    const[enteredAmount, setEnteredAmount] = useState("");
    const[enteredDate, setEnteredDate] = useState("");

    const titleHandler = (event)=>{
        setEnteredTitle(event.target.value)
    }
    const amounteHandler = (event)=>{
        setEnteredAmount(event.target.value)
    }
    const dateHandler = (event)=>{
        setEnteredDate(event.target.value)
    }
    const submitHandler = (event)=>{
        event.preventDefault()
        const formData = {title:enteredTitle, amount:enteredAmount, date:new Date(enteredDate)}
        console.log(formData);

        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')

        onAddExpense(formData)
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min={0} step={1} value = {enteredAmount}onChange={amounteHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2020-01-01"
                        max="2023-05-05"
                        value={enteredDate}
                        onChange={dateHandler}
                    ></input>
                </div>
            </div>
            <button type="submit">Add</button>
        </form>
    );
};

export default ExpenseForm;
