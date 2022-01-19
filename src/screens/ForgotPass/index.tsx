import React from 'react';
import { AuthDiv, Title } from '@components/index';
import { Container } from './styles';

const ForgotPass = () => {
  return (
    <Container>
      <Title />
      <AuthDiv
        hasEmail
        hasName={false}
        hasPassword={false}
        screen='Reset password'
      />
    </Container>
  );
};

export default ForgotPass;
