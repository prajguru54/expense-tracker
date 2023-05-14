import React from "react";
import ChartBar from "./ChartBar";

const chartBars = [
    { month: "Jan", value: 0 },
    { month: "Feb", value: 0 },
    { month: "Mar", value: 0 },
    { month: "Apr", value: 0 },
    { month: "May", value: 0 },
    { month: "Jun", value: 0 },
    { month: "Jul", value: 0 },
    { month: "Aug", value: 0 },
    { month: "Sep", value: 0 },
    { month: "Oct", value: 0 },
    { month: "Nov", value: 0 },
    { month: "Dec", value: 0 },
];

const Chart = ({ expenses }) => {
    const expenseAmounts = expenses.map((e) => e.amount);
    const maxExpense = Math.max(...expenseAmounts);
    console.log("Max expense: ", maxExpense);
    for (const expense of expenses) {
        chartBars[expense.date.getMonth()] += expense.amount;
    }
    chartBars.map(e=>{
      return <ChartBar  key = {e.month} maxExpense={maxExpense} value={e.value}/>
    })
};

export default Chart;
