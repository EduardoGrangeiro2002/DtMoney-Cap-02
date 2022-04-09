import { FormEvent, useState } from "react"
import Modal from "react-modal"
import closeImg from "../../assets/close.svg"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import { api } from "../../services/api"
import { Container, RadioBox, TransactionTypeModal } from "./styles"

type NewTransactionModalProps = {
    isOpen: boolean;
    onRequestClose: () => void
}


export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  const [type, setType] = useState('deposit');
  const [title, setTitle] = useState('');
  const [number, setNumber] = useState(0);
  const [category, setCategory] = useState('');


  
  const handleCreateNewTransaction = (event: FormEvent) => {
    event.preventDefault()
    const data = {
        type,
        category,
        number,
        title
    }
    api.post('/transactions', data)
  } 

  return(
        <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName= "react-modal-overlay"
        className="react-modal-content">
          <button className="react-modal-close" type="button" onClick={onRequestClose}>
              <img src={closeImg} alt="Fechar botão"/>
          </button>
          <Container onSubmit={handleCreateNewTransaction}>
            <h2>Cadastrar transação</h2>

            <input 
            placeholder="Título"
            value={title}
            onChange={event => setTitle(event.target.value)} 
            />

            <input 
            type="number" placeholder="Valor"
            value={number}
            onChange={event => setNumber(Number(event.target.value))} 
            />
/
            <TransactionTypeModal>

              <RadioBox  type="button" onClick={() => setType('deposit')} isActive={type === 'deposit'} activeColor="green">
                <img src={incomeImg} alt="Entradas" />
                <span>Entradas</span>
              </RadioBox>

              <RadioBox type="button" onClick={() => setType('withdraw')} isActive={type === 'withdraw'} activeColor="red">
                <img src={outcomeImg} alt="Saídas" />
                <span>Saídas</span>
              </RadioBox>

            </TransactionTypeModal>

            <input 
            placeholder="Categoria"
            value={category}
            onChange={event => setCategory(event.target.value)}
            />

            <button type="submit">Cadastrar</button>


          </Container>
         </Modal>
        )
}