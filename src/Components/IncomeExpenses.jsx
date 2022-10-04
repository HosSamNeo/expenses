import React , {useContext} from 'react';
import { expensesContext } from '../context/Store';

const IncomeExpenses = () => {
  let {incomeBalance,expenseBalance} = useContext(expensesContext);
  return (
    <div className="inc-exp-container">
    <div>
      <h4>Income</h4>
      <p className="money plus">+${Math.abs(incomeBalance.toFixed(2))}</p>
    </div>
    <div>
      <h4>Expense</h4>
      <p className="money minus">-${Math.abs(expenseBalance.toFixed(2))}</p>
    </div>
  </div>
  )
}

export default IncomeExpenses;