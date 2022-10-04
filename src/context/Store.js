import React , { createContext , useReducer } from "react";

let initialState = {
    transactions :[]
}

const AppReducer = (state,action) => {
    switch (action.type) {    
        case 'delete':
            return {...state,
                transactions: state.transactions.filter((trans) => trans.id !== action.payload.id)
            }
        case 'add':
            return {
                ...state,
                transactions:[action.payload.transaction , ...state.transactions]
            }
        default:
            return state;
    }
}

export const expensesContext = createContext(initialState);


export default function ExpensesContextProvider({children}){

    const [state,dispatch] = useReducer(AppReducer,initialState);

    const deleteTransaction = (id) => {
        dispatch({type:'delete' , payload : {id}})
    }

    const addTransaction = (transaction) => {
        dispatch({type:'add' , payload : {transaction}})
    }

    return  <expensesContext.Provider value={{
        transactions : state.transactions,
        deleteTransaction,
        addTransaction,
    }}>
            {children}
        </expensesContext.Provider>
}

