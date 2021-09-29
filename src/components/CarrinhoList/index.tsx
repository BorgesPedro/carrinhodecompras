import { Container } from "./styles";
import { api } from "../../services/api"

interface CarrinhoListProps {
  name: string;
  price: number;
  imageUrl: string;
}

export function CarrinhoList(props: CarrinhoListProps){
  return (
    <>
      <Container>
          <li>
            <img src={props.imageUrl} alt={props.name} height="110px" width="110px"/>
            <div className="product-info">
              <h3>{props.name}</h3>
              <span className="faded">R$ 11,10</span>
              <span>R$ {props.price}</span>
            </div>
          </li>
      </Container>
    </>
  );
}