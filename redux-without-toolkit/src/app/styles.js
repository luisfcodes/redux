import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    color: #f9a826;
    font-size: 2rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  .input-container {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    input {
      padding: 0.5rem;
      border: 2px solid #334155;
      border-radius: 5px;
      min-width: 400px;
      background-color: #082f49;

      &:focus {
        outline: none;
        border-color: #f9a826;
      }

      &::placeholder {
        color: #ccc;
      }
    }

    button {
      height: 100%;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 5px;
      background-color: #f9a826;
      color: #000;
      cursor: pointer;
      text-transform: uppercase;
      font-weight: 600;
      transition: background-color 0.4s;

      &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background-color: #d97706;
      }
    }
  }

  ul {
    margin-top: 1rem;
    padding: 0.5rem;
    border-radius: 4px;
    list-style: none;
    width: 100%;
    border: 2px solid #334155;
    background-color: #082f49;

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 0.5rem;

      h2 {
        color: #f9a826;
        font-size: 1.175rem;
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      button {
        background-color: #f9a826;
        color: #000;
        border: none;
        border-radius: 4px;
        padding: 0.5rem 1rem;
        cursor: pointer;
        text-transform: uppercase;
        font-weight: 600;
        transition: background-color 0.4s;

        &:hover {
          background-color: #d97706;
        }
      }
    }

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.35rem 0.25rem;
      border-radius: 2px;
      background-color: #082f49;
      color: #ccc;

      &:not(:last-child) {
        border-bottom: 2px solid #334155;
      }

      div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      button {
        background-color: transparent;
        border: none;
        color: #ef4444;
        cursor: pointer;
        line-height: 0;
        transition: color 0.4s;

        &:hover {
          color: #dc2626;
        }
      }

      .check-icon {
        color: #22c55e;
      }

      .pending-icon {
        color: #f9a826;
      }
    }
  }

  .task-history {
    li {
      text-decoration: line-through;
    }
  }
`;
