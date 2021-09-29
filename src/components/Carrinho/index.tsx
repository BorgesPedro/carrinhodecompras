import { Container } from "./styles";
import { CarrinhoList } from "../CarrinhoList";
import { api } from "../../services/api"
import { useEffect, useState } from "react";

interface CarrinhoProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

export function Carrinho() {
  const[products, setProducts] = useState<CarrinhoProps[]>([])

  useEffect(() => {
    api.get("cima")
    .then(response => setProducts(response.data.items))
  }, [])

  return (
    <>
      <Container>
        <header className="header">
          <h1>Meu carrinho</h1>
        </header>
        <main>
          <div className="product-list">
            {products.map(product => {
              return(
                <CarrinhoList key={product.id} name={product.name} price={product.price} imageUrl={product.imageUrl} />
              )
            })}
          </div>
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