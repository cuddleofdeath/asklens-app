import { Button, Navbar, Text, Link, Card, Radio } from '@nextui-org/react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import ConnectBtn from '../connectButton';

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
    <Navbar.Content
      hideIn='xs'
      css={{
        width: '101vw',
        justifyContent: 'center',
      }}
    >
      <Navbar.Link href='#'>Trending</Navbar.Link>
      <Navbar.Link href='#'>About</Navbar.Link>

      <Navbar.Link isActive href='#'>
        Repo
      </Navbar.Link>
    </Navbar.Content>
    <Navbar.Content
      css={{
        marginRight: '2rem',
      }}
    >
      {/* <Button auto flat as={Link} href='#'>
          Sign Up
        </Button> */}
      {/* <ConnectButton label='Sign In' chainStatus='none' showBalance={false} /> */}
      <ConnectBtn />
    </Navbar.Content>
  </Navbar>
);

export default Nav;
