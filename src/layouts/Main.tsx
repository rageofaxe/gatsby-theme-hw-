import React from 'react';
import { Container, Flex, Text, Divider, Link, ThemeProvider } from 'theme-ui';

import { theme } from '../theme';
import Animated from '../components/Animated';
import Cols from '../components/Cols';
import Block from '../components/Block';
import Element from '../components/Element';
import Footer, { FooterRightPart } from '../components/Footer';
import { H1, H2 } from '../components/Typographic';

function Main() {
  return (
    <ThemeProvider theme={theme}>
      <Container variant="page">
        <Flex variant="layout.menuHeader">
          <Flex>Logo</Flex>
          <Flex variant="layout.menuHeaderItems">
            <Link href="#">Main</Link>
            <Link href="#">Projects</Link>
            <Link href="#">Contacts</Link>
            <Link href="#">About</Link>
          </Flex>
        </Flex>
        <Block>
          <Text variant="h1">
            I LOVE TO
            <br />
            BUILD THINGS
          </Text>
          <br />
          <Text variant="big">
            I am the creator of the Peak.js framework which has been thriving for the last 10 years. I also love to
            collaborate with other developers and designers on different projects you can explore on Github and Codepen.
          </Text>
        </Block>
        <Cols striped>
          <Container></Container>

          <Container>
            <Animated>
              <Text variant="h2">Peak.js Framework</Text>
              <br />
              <Text>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
                ea rebum. Stet clita kasd gubergren no sea takimata sanctus est.
              </Text>
            </Animated>
          </Container>
        </Cols>
        <Cols>
          <Container>
            <Animated>
              <H2 decorated>List</H2>

              <Element meta="2022 12 12 | London" title="React developer">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat.
              </Element>

              <Divider />
              <Element meta="2022 12 12 | London" title="React developer">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat.
              </Element>
              <Divider />
              <Element meta="2022 12 12 | London" title="React developer">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat.
              </Element>
            </Animated>
          </Container>

          <Container>
            <Animated>
              <H2 decorated>Another List</H2>
              <Element meta="2022 12 12 | London" title="React developer">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat.
              </Element>
              <Element meta="2022 12 12 | London" title="React developer">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat.
              </Element>
              <Element meta="2022 12 12 | London" title="React developer">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat.
              </Element>
            </Animated>
          </Container>
        </Cols>
        <Block striped>
          <Animated>
            <H1 decorated>5. Hi There</H1>
            <br />
            <Text variant="big">Hi and long discription</Text>
          </Animated>
        </Block>
        <Footer>
          <Flex variant="layout.column">
            <div>Logo</div>
            <div>Copyright</div>
          </Flex>
          <FooterRightPart>
            <Flex variant="layout.menuFooterItems">
              <Link href="#">Main</Link>
              <Link href="#">Projects</Link>
            </Flex>
            <div>Links</div>
          </FooterRightPart>
        </Footer>
      </Container>
    </ThemeProvider>
  );
}

export default Main;
