import React from 'react';
import AuthDiv from '../../components/AuthDiv';
import Title from '../../components/Title';
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
