import { Grid, Card, Text } from '@nextui-org/react';

const ChoiceCard = ({ text, emoji }) => (
  <Card
    isHoverable
    isPressable
    css={{
      h: '$24',
      $$cardColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    }}
  >
    <Card.Body>
      <Text size={20}>{emoji}</Text>
      <Text h6 size={15} color='#00214d' css={{ mt: 0 }}>
        {text}
      </Text>
    </Card.Body>
  </Card>
);

export default ChoiceCard;
