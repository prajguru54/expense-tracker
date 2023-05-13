import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
    // const month = props.date.toLocalString("en-US", { timeZone: 'UTC', hour12:true,day:'numeric' ,month:'long', year:'numeric',});
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;
