import styled from 'styled-components/native';
import { theme } from '@shared/index';

export const Container = styled.View`
  background-color: #ff6060;
  padding: 5px;
  padding-left: 22px;
  padding-right: 10px;
`;

export const TextError = styled.Text`
  color: white;
  font-family: ${theme.fonts.boldItalic};
  font-size: 15px;
`;
