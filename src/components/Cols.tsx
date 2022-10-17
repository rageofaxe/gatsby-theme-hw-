import React from 'react';
import { Flex } from 'theme-ui';
import Block from './Block';

type ColsProps = {
  children: any;
  striped?: boolean;
  divided?: boolean;
  id?: string;
};

function Cols({ children, striped, divided, id }: ColsProps) {
  return (
    <Block striped={striped} divided={divided} id={id}>
      <Flex variant="layout.cols">{children}</Flex>
    </Block>
  );
}

export default Cols;
