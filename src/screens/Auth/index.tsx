import React from 'react';
import AuthDiv from '../../components/AuthDiv';
import Title from '../../components/Title';
import { Container } from './style';

const Auth = () => {
  return (
    <Container>
      <Title />
      <AuthDiv hasEmail hasPassword hasName={false} screen='Authentication' />
    </Container>
  );
};

export default Auth;
