import { Text } from 'theme-ui';

type HeaderProps = {
  children: any;
  decorated?: boolean;
};

type Tag = 'h1' | 'h2' | 'h3';

export function Header({ children, decorated, tag }: HeaderProps & { tag: Tag }) {
  return (
    <Text
      as={tag}
      variant={tag}
      sx={
        decorated
          ? {
              '::before': {
                content: '"*"',
                color: (theme) => theme.colors?.primary,
              },
            }
          : {}
      }
    >
      {children}
    </Text>
  );
}

export function H1({ children, decorated }: HeaderProps) {
  return (
    <Header tag="h1" decorated={decorated}>
      {children}
    </Header>
  );
}

export function H2({ children, decorated }: HeaderProps) {
  return (
    <Header tag="h2" decorated={decorated}>
      {children}
    </Header>
  );
}

export function H3({ children, decorated }: HeaderProps) {
  return (
    <Header tag="h3" decorated={decorated}>
      {children}
    </Header>
  );
}

export default {
  Header,
  H1,
  H2,
  H3,
};
