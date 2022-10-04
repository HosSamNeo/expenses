import React , {useState , useContext} from 'react';
import { expensesContext } from '../context/Store';


const Transaction = () => {
  const {addTransaction} = useContext(expensesContext);
  const [name , setName] = useState('');
  const [amount , setAmount] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      name,
      amount:+amount,
      id : Math.floor(Math.random() * 100000)
    }

    addTransaction(newTransaction);
    setName('');
    setAmount('');
  }


  return (
    <>
        <h3>Add new transaction</h3>
        <form onSubmit={handleSubmit}>
            <div className="form-control">
            <label htmlFor="name" >name</label>
            <input value={name} onChange={e => setName(e.target.value)} name='name' type="text" placeholder="Enter Transaction name..." />
            </div>
            <div className="form-control">
            <label htmlFor="amount">Amount <br />(negative - expense, positive - income)</label>
            <input value={amount} onChange={e => setAmount(e.target.value)} name='amount' type="number" placeholder="Enter amount..." />
            </div>
            <button className="btn">Add transaction</button>
        </form>
    </>
  )
}

export default Transaction;