import React from "react";
import { Flex } from "theme-ui";
import Block from "./Block";

type ColsProps = {
  children: any;
  striped?: boolean;
  divided?: boolean;
};

function Cols({ children, striped, divided }: ColsProps) {
  return (
    <Block striped={striped} divided={divided}>
      <Flex variant="layout.cols">{children}</Flex>
    </Block>
  );
}

export default Cols;
