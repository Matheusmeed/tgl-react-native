import styled from 'styled-components/native';
import { theme } from '../../shared/styles/theme';

export const Container = styled.View`
  background-color: #ff6060;
  padding: 5px;
  padding-left: 22px;
`;

export const TextError = styled.Text`
  color: white;
  font-family: ${theme.fonts.boldItalic};
  font-size: 15px;
`;
