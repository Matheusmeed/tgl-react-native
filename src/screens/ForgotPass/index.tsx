import React from 'react';
import AuthDiv from '../../components/AuthDiv';
import Title from '../../components/Title';
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
