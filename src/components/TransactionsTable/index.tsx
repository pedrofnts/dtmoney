import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api.get('/transactions')
    .then(data => console.log(data))
}, []);
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
            <td>Salário</td>
            <td className="deposit">R$500.00</td>
            <td>Receita</td>
            <td>03/08/2022</td>
          </tr>
          <tr>
            <td>Compra</td>
            <td className="withdraw">- R$30.00</td>
            <td>Gastos</td>
            <td>03/08/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}