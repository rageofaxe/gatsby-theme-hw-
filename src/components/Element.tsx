import React from "react";
import { Container, Text } from "theme-ui";

type ElementTypes = {
  meta: string;
  title: string;
  children: string;
};

function Element({ meta, title, children }: ElementTypes) {
  return (
    <Container variant="element">
      <Text variant="meta">{meta}</Text>
      <Container variant="text.h3">{title}</Container>
      <Text variant="just">{children}</Text>
    </Container>
  );
}

export default Element;
