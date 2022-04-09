import { Dashboard } from "./components/Dashboard";
import Modal from "react-modal"
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";

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
    <>
     <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
     <Dashboard />


     <Modal 
     isOpen={isNewTransactionModalOpen}
     onRequestClose={handleCloseNewTransactionModal}>
        <h2>Cadastrar transação</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}

export default App;
