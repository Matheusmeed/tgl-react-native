import styled from 'styled-components/native';
import { theme } from '../../shared/styles/theme';

export const Container = styled.View`
  align-items: center;
  padding-top: 40px;
  padding-bottom: 55px;
`;

export const StyledText = styled.Text`
  font-size: 20px;
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.boldItalic};
`;
