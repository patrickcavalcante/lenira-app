import { Card, Container, Content } from './styles';

export function Header() {
  function reload() {
    return window.location.reload();
  }

  return (
    <Container>
      <Content>
        <div>
          <img src="/assets/logo.svg" alt="Pc Money" />
          <h1>Lenira App</h1>
        </div>
        <Card>
          <button onClick={reload}>
            <img src="/assets/refresh.png" alt="reload" /> Recarregar
          </button>
        </Card>
      </Content>
    </Container>
  );
}
