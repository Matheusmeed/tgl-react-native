import React from 'react';
import { Container } from './style';
import { AuthDiv, Title } from '@components/index';

const Auth = () => {
  return (
    <Container>
      <Title />
      <AuthDiv hasEmail hasPassword hasName={false} screen='Authentication' />
    </Container>
  );
};

export default Auth;
