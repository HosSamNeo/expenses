import React , {useState , useContext} from 'react';
import { expensesContext } from '../context/Store';


const Transaction = () => {
  let {expenses,dispatch} = useContext(expensesContext);
  const handleSubmit = (e) => {
      e.preventDefault();
      dispatch({type:'addTrans' , payload : {newTrans : newTrans}})
  }
  const [newTrans , setNewTrans] = useState({name:null,amount:null,id:expenses.length});
  const setTransActions = (e) => {
    let newState = {...newTrans}
    newState[e.target.name] = e.target.value;
    setNewTrans(newState);
  }
  console.log(newTrans);
  return (
    <>
        <h3>Add new transaction</h3>
        <form onSubmit={handleSubmit}>
            <div className="form-control">
            <label htmlFor="name" >name</label>
            <input onChange={(e) => setTransActions(e)} name='name' type="text" placeholder="Enter Transaction name..." />
            </div>
            <div className="form-control">
            <label htmlFor="amount">Amount <br />(negative - expense, positive - income)</label>
            <input onChange={(e) => setTransActions(e)} name='amount' type="number" placeholder="Enter amount..." />
            </div>
            <button onClick={() => setTransActions} className="btn">Add transaction</button>
        </form>
    </>
  )
}

export default Transaction