import React from "react";
import Books from "./Books/Books";
import {
  Container,
  BoxTitle,
  ParagraphUp,
  ParagraphDown,
  BoxSortBy,
} from "./style";

export default function Body() {
  return (
    <Container>
      <BoxTitle>
        <ParagraphUp>3 For €20</ParagraphUp>
        <ParagraphDown>The 3 For €20 Multibuy or €9.99 Each</ParagraphDown>
      </BoxTitle>
      <BoxSortBy>
        <div>Sidebar</div>
        <div>TypeShow</div>
        <div>Sort by</div>
      </BoxSortBy>
      <div></div>
    </Container>
  );
}
