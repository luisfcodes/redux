import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  button {
    background-color: #16a34a;
    color: #fff;

    width: 100px;
    font-size: 2.5rem;
    font-weight: bold;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;

    &:hover {
      background-color: #12793b;
    }
  }

  button:last-child {
    background-color: #d32f2f;

    &:hover {
      background-color: #9a0007;
    }
  }

  span {
    font-size: 3rem;
    font-weight: bold;
    color: #e0e7ff;
  }

  
`
