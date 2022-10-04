import React, {useContext} from 'react';
import { expensesContext } from '../context/Store';
const TransactionList = () => {
    let {expenses , deleteTransaction} = useContext(expensesContext);
    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {expenses.length > 0 ? expenses.map((expense,index) => (
                    <li key={index} className={expense[index].moneyAmount > 0 ? 'plus' : 'minus'}>
                        {expense.name} <span>${expense.moneyAmount}</span><button onClick={() => deleteTransaction(expense.id)} className="delete-btn">x</button>
                    </li> 
                )) : ''}
            </ul>
        </>
    )
}

export default TransactionList