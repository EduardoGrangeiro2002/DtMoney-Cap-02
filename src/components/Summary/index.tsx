import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import totalImg from "../../assets/total.svg"
import {  useTransaction } from "../../hooks/useTransaction";
import { Container } from "./styles";

export function Summary(){
  const {transactions} = useTransaction()
  const summary = transactions.reduce((acc, transaction) => {

    if(transaction.type === "deposit"){
        acc.total += transaction.number
        acc.deposits += transaction.number
    }else{
        acc.total -= transaction.number
        acc.withdraw -= transaction.number
    }

    return acc
  }, {
      deposits: 0,
      withdraw: 0,
      total: 0
  })

  console.log(transactions)
  return (
    <Container>
        <div>
            <header>
                <p>Entradas</p>
                <img src={incomeImg} alt="Entradas" />
            </header>
            <strong>                
                {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
                }).format(summary.deposits)}</strong>
        </div>
        <div>
            <header>
                <p>Saídas</p>
                <img src={outcomeImg} alt="Saídas" />
            </header>
            <strong>                
                {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
                }).format(summary.withdraw)}
                </strong>
        </div>
        <div className="highlight-background">
            <header>
                <p>Total</p>
                <img src={totalImg} alt="Total" />
            </header>
            <strong>
                {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
                }).format(summary.total)}
                </strong>
        </div>
    </Container>
  )
}