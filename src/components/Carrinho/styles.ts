import styled from "styled-components";

export const Container = styled.div`
  background: var(--forma);
  border-radius: 0.6rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
  .header {
    font-size: 0.9rem;
    padding: 0.5rem 10rem;
    letter-spacing: -0.10rem;
  }
  .finalizar-compra {
    display: flex;
    justify-content: center;
    button {
    background: var(--button);
    border: 0;
    width: 90%;
    padding: 1rem;
    color: var(--forma);
    font-weight: 600;
    font-size: 1.2rem;
    cursor: pointer;
    border-radius: 0.6rem;
    }
  }
  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.8rem;
    p,span {
      font-weight: 800;
      font-size: 1.5rem;
    }
  }
`