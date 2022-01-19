import React from 'react';
import { AuthDiv, Title } from '@components/index';
import { Container } from './styles';

const ResetPass = () => {
  return (
    <Container>
      <Title />
      <AuthDiv
        hasEmail={false}
        hasName={false}
        hasPassword
        screen='New password'
      />
    </Container>
  );
};

export default ResetPass;
