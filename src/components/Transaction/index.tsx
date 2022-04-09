import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionTable(){

    useEffect(() => {
        api.get("/transactions")
        .then(response => console.log(response.data))
    }, [])

  return (
      <Container>
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Valor</th>
              <th>Categoria</th>
              <th>Data</th>    
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Aluguel</td>
              <td className="withdraw">R$-5000</td>
              <td>Casa</td>
              <td> 20/04/2002</td>
            </tr>
            <tr>
              <td>Desenvolvimento de WebSite</td>
              <td className="deposit">R$12000</td>
              <td>Desenvolvimento</td>
              <td> 20/04/2002</td>
            </tr>
            <tr>
              <td>Desenvolvimento de WebSite</td>
              <td className="deposit">R$3000</td>
              <td>Desenvolvimento</td>
              <td> 20/04/2002</td>
            </tr>
          </tbody>
        </table>
      </Container>
  )
}