import React from 'react';
import { Container } from 'theme-ui';
import { BlockProps } from '../types';
import BlockDivider from './BlockDivider';

function Block({ children, striped, divided, sx, id }: BlockProps) {
  return (
    <React.Fragment>
      <h1 id={id} style={{ fontSize: 0 }} />
      <Container sx={sx} variant="block" backgroundColor={striped ? 'striped' : 'background'}>
        <Container variant="centered">{children}</Container>
      </Container>
      {divided && <BlockDivider />}
    </React.Fragment>
  );
}

export default Block;
