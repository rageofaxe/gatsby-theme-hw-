import React from "react";
import { Flex } from "theme-ui";
import Block from "./Block";
import { BlockProps } from "../types";

function Cols({ children, striped, divided }: BlockProps) {
  return (
    <Block
      striped={striped}
      divided={divided}
      sx={{ paddingTop: [20, 20, 20], px: 0 }}
    >
      <Flex variant="layout.menuFooter">{children}</Flex>
    </Block>
  );
}

export function FooterRightPart({ children }: { children: any }) {
  return (
    <Flex variant="layout.column" sx={{ alignItems: "flex-end" }}>
      {children}
    </Flex>
  );
}

export default Cols;
