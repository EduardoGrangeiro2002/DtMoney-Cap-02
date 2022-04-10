import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";


type Transaction = {
    id: number;
    type: string;
    title: string;
    category: string;
    number: number;
    createdAt: string;
  }
type TransactionProps = {
  children: ReactNode
}

type TransactionInput = Omit<Transaction, "id" | "createdAt">;

type TransactionContextData = {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>
}

export const TransactionContext = createContext<TransactionContextData>(
    {} as TransactionContextData 
);

export function TransactionProvider({children}: TransactionProps) {
const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function createTransaction(transactionInput: TransactionInput){


    const response = await api.post('/transactions', {...transactionInput, createdAt: new Date()});

    const { transaction } = response.data

    setTransactions([
        ...transactions,
        transaction
    ])
  }

  useEffect(() => {
    api.get("/transactions")
    .then(response => setTransactions(response.data.transactions))
  }, [])

  return <TransactionContext.Provider value={{transactions, createTransaction}}>
      {children}
  </TransactionContext.Provider>
}

export function useTransaction(){
  const context = useContext(TransactionContext);

  return context
}