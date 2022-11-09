import { Button } from '@nextui-org/react';

const Btn = ({ text }) => (
  <Button
    css={{
      color: '$accents0',
      backgroundColor: '$secondary',
    }}
  >
    {text}
  </Button>
);

export default Btn;
