import Header from "./Components/Header";
import Balance from "./Components/Balance";
import TransactionList from "./Components/TransactionList";
import Transaction from "./Components/Transaction";
import IncomeExpenses from "./Components/IncomeExpenses";


function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance /> 
        <IncomeExpenses /> 
      
        <TransactionList /> 
        <Transaction /> 
      </div>
    </div>
  );
}

export default App;
