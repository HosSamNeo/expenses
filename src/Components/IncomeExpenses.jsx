import React , {useContext} from 'react';
import { expensesContext } from '../context/Store';

const IncomeExpenses = () => {
  let {transactions} = useContext(expensesContext);
  const amounts  = transactions.map(transaction => transaction.amount);
  const incomeBalance = amounts
  .filter(item => item > 0)
  .reduce((acc, item) => (acc += item), 0)
  .toFixed(2);

const expenseBalance = (
  amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
  -1
).toFixed(2);


  return (
    <div className="inc-exp-container">
    <div>
      <h4>Income</h4>
      <p className="money plus">+${Math.abs(incomeBalance)}</p>
    </div>
    <div>
      <h4>Expense</h4>
      <p className="money minus">-${Math.abs(expenseBalance)}</p>
    </div>
  </div>
  )
}

export default IncomeExpenses;