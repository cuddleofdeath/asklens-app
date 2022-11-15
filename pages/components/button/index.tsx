import { Button } from '@nextui-org/react';

const Btn = ({ text }) => (
  <Button
    css={{
      color: '$accents0',
    }}
  >
    {text}
  </Button>
);

export default Btn;
