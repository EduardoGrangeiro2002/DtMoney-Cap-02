import { Dashboard } from "./components/Dashboard";
import Modal from "react-modal"
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import {  TransactionProvider } from "./hooks/useTransaction";

Modal.setAppElement("#root")


function App() {
const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

const handleOpenNewTransactionModal = () => {
  setIsNewTransactionModalOpen(true)
}

const handleCloseNewTransactionModal = () => {
  setIsNewTransactionModalOpen(false)
}
  return (
    <TransactionProvider>

     <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
     <Dashboard />
     <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}/>
      <GlobalStyle />
    
    </TransactionProvider >
  );
}

export default App;
