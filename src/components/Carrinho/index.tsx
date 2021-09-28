import { Container } from "./styles";
import { CarrinhoList } from "../CarrinhoList";

export function Carrinho() {
  return (
    <>
      <Container>
        <header className="header">
          <h1>Meu carrinho</h1>
        </header>
        <main>
          <CarrinhoList />
          <section className="total">
            <p>Total</p>
            <span>R$35,00</span>
          </section>
          <section className="finalizar-compra">
            <button type="submit">
              Finalizar compra
            </button>
          </section>
        </main>
      </Container>
    </>
  );
}