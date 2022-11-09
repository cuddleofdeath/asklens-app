import { Button, Navbar, Text } from '@nextui-org/react';

const Nav = ({ text }) => (
  <Navbar
    isCompact
    variant={'sticky'}
    css={{
      width: '101vw',
      marginLeft: '-2rem',
    }}
  >
    <Navbar.Brand>
      <Text b color=''>
        AskLens
      </Text>{' '}
    </Navbar.Brand>
  </Navbar>
);

export default Nav;
