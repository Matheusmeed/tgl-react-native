import React from 'react';
import { Title, AuthDiv } from '@components/index';
import { Container } from './styles';

const Registration = () => {
  return (
    <Container>
      <Title />
      <AuthDiv hasName hasEmail hasPassword screen='Registration' />
    </Container>
  );
};

export default Registration;
