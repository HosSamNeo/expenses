import React , {useContext} from "react";
import { expensesContext } from "../context/Store";

const Balance = () => {
  let {expensesBalance} = useContext(expensesContext);
  
  return (

    <>
        <h4>Your Balance</h4>
        <h1>${expensesBalance.toFixed(2)}</h1>
    </>
  )
}

export default Balance