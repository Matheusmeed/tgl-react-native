import React from 'react';
import { Container, TextError } from './styles';

type Props = {
  children: string;
};

const ErrorMessage = ({ children }: Props) => {
  return (
    <Container>
      <TextError>{children}</TextError>
    </Container>
  );
};

export default ErrorMessage;
