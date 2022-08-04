import { Container } from "./styles";

export function TransactionsTable() {
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
            <td>Pagamento de Etinho</td>
            <td className="deposit">R$500.00</td>
            <td>Salário</td>
            <td>03/08/2022</td>
          </tr>
          <tr>
            <td>Caixa de Império</td>
            <td className="withdraw">- R$30.00</td>
            <td>Gastos</td>
            <td>03/08/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}