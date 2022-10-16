import React from "react";
import { Container } from "theme-ui";
import { BlockProps } from "../types";
import BlockDivider from "./BlockDivider";

function Block({ children, striped, divided, sx }: BlockProps) {
  return (
    <React.Fragment>
      <Container
        sx={sx}
        variant="block"
        backgroundColor={striped ? "striped" : "background"}
      >
        <Container variant="centered">{children}</Container>
      </Container>
      {divided && <BlockDivider />}
    </React.Fragment>
  );
}

export default Block;
