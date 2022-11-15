import { Container } from './styles';

export function Summary() {
  const summary = {
    potency: '0v',
    voltage: '0w',
    total: 0,
    status: false,
  };

  return (
    <Container>
      <div>
        <header>
          <p>Potência</p>
          <img src="/assets/potencia.png" alt="Potência" />
        </header>
        <strong>{summary.potency}</strong>
      </div>

      <div>
        <header>
          <p>Tensão</p>
          <img src="/assets/tensao.png" alt="tensão" />
        </header>
        <strong>{summary.voltage}</strong>
      </div>

      <div>
        <header>
          <p>Status</p>
          <img src="/assets/status.png" alt="status" />
        </header>
        <strong>{summary.status === true ? 'On' : 'off'}</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Valor</p>
          <img src="/assets/total.svg" alt="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}
