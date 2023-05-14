import Card from "../UI/Card";
import ExpenseDate from "../Expenses/ExpenseDate";
import "./ExpenseItem.css";
import { useState } from "react";

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title)
    // const month = props.date.toLocalString("en-US", { timeZone: 'UTC', hour12:true,day:'numeric' ,month:'long', year:'numeric',});
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;
