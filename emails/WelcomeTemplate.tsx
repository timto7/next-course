import React from 'react';
import { Tailwind } from '@react-email/components';

import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Preview,
} from '@react-email/components';

interface Props {
  name: string;
}

const WelcomeTemplate = ({ name }: Props) => {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Tailwind>
        <Body className="bg-white">
          <Container>
            <Text className="font-bold text-3xl">Hello {name}</Text>
            <Link href="https://codewithmosh.com/">www.codewithmosh.com</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

// const body: CSSProperties = { background: '#fff' };

// const heading: CSSProperties = { fontSize: '32px' };

export default WelcomeTemplate;
