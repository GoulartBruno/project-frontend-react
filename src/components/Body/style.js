import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BoxTitle = styled.div`
  display: flex;
  padding-top: 3rem;
  padding-bottom: 3rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Quicksand";
  background-color: #fafafa;
`;

export const ParagraphUp = styled.h1`
  padding: 0.3rem;
`;

export const ParagraphDown = styled.h3`
  font-size: 1rem;
`;

export const BoxSortBy = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;
