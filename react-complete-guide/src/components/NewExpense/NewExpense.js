import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import './NewExpense.css'

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false)
    const saveExpenseDataHandlers = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditing = () => {
        setIsEditing(true);
    }

    const stopEditing = () => {
        setIsEditing(false);
    }

    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditing}>Add New Expenses</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandlers} onCancel={stopEditing} />}
        </div>
    );
}

export default NewExpense;