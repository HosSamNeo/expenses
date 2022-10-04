import React, {useContext} from 'react';
import { expensesContext } from '../context/Store';


const TransactionList = () => {
    let {transactions , deleteTransaction} = useContext(expensesContext);
    
    return (
        <>
            <h3>History</h3>
            <ul className="list">
                
                {transactions.length > 0 ? transactions.map((transaction,index) => (
                    <li key={index} className={transaction.amount > 0 ? 'plus' : 'minus'}>
                        {transaction.name} <span>${transaction.amount}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
                    </li> 
                )) : ''}
            </ul>
        </>
    )
}

export default TransactionList