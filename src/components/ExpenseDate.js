import React from "react";

const ExpenseDate = (props) => {
    // TODO: Format this date and use css styling
    return <div>{props.date.toISOString()}</div>;
};

export default ExpenseDate;
