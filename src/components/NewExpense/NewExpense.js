import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = ({onAddExpense}) => {
  const onAddExpenseHandler = (expenseData)=>{
    console.log(expenseData);
    const expenseDataWithId = {...expenseData, id:Math.random()}
    onAddExpense(expenseDataWithId)
  }
  return <div className='new-expense'>
    <ExpenseForm onAddExpense = {onAddExpenseHandler} />
  </div>
}

export default NewExpense