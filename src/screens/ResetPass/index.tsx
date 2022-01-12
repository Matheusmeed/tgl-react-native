import React from 'react';
import { Text } from 'react-native';
import AuthDiv from '../../components/AuthDiv';
import Title from '../../components/Title';
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
