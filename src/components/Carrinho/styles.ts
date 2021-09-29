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
    /* display: flex;
    align-items: center;
    justify-content: space-between; */
    border-top: 1px solid var(--divisor);
    padding: 1.8rem;
    .total-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      p,span {
      font-weight: 800;
      font-size: 1.5rem;
      }
    }
    
    
    .congratulations {
      display: inline;
    }
  }
  main .product-list {
    height: 450px;
    overflow-y: scroll;
    ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #f5f5f5;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  }
`