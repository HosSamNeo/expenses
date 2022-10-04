import { createContext , useReducer, useState  , useEffect} from 'react';
export const expensesContext = createContext([]);


function reducer(expenses,action){
    switch (action.type) {
        case 'delete':
            return expenses.filter((item) => item.id !== action.payload.id)
        case 'addTrans':
            return [...expenses , action.payload.newTransaction];
      default:
        return expenses;
    }
  }



export default function ExpensesContextProvider({children}){
    const initialState = [
        {name:'hassan',moneyAmount:1 , id: 0},
        {name:'hossam',moneyAmount:2 , id: 1},
        {name:'ashraf',moneyAmount:3 , id: 2},
        {name:'ashraf',moneyAmount:-5 , id: 3},
    ]


    const [expenses,dispatch] = useReducer(reducer,initialState);
    const [expensesBalance , setExpensesBalance] = useState(0);
    const [incomeBalance , setIncomeBalance] = useState(0);
    const [expenseBalance , setExpenseBalance] = useState(0);


    

    useEffect(() => {
        let newExpensesBalance = 0;
        let newIncomeBalance = 0;
        let newExpenseBalance=0;
        for(let i = 0; i < expenses.length; i++) {
            newExpensesBalance += expenses[i].moneyAmount;
            if(expenses[i].amount > 0) {
                newIncomeBalance += expenses[i].moneyAmount;
            }else {
                newExpenseBalance += expenses[i].moneyAmount;
            }
        }
        setExpenseBalance(newExpenseBalance)
        setExpensesBalance(newExpensesBalance)
        setIncomeBalance(newIncomeBalance)
    
    }, [expenses])
    
    const deleteTransaction = (id) => {
        dispatch({type:'delete',payload:{id:id}})
    }

  


    return  <expensesContext.Provider value={{dispatch,expenses,deleteTransaction,expensesBalance,incomeBalance,expenseBalance}}>
            {children}
        </expensesContext.Provider>
}

