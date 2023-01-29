import styled from "styled-components";

export const Photo = styled.img`
  width: 10rem;
  height: 15rem;
`;

export const CardBooks = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
`;

export const CardBook = styled.div`
  width: 10rem;
  height: 25rem;
`;

export const ButtonAddToCard = styled.button`
  color: white;
  background-color: #008061;
  width: 10rem;
  height: 2rem;
  border: none;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #029e78;
  }
`;
