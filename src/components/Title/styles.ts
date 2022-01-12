import styled from 'styled-components/native';
import { theme } from '../../shared/styles/theme';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  height: 200px;
`;

export const TitleTGL = styled.Text`
  text-align: center;
  font-size: 30px;
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.boldItalic};
`;

export const For = styled.Text`
  margin-top: 7px;
  margin-bottom: 2px;
  color: white;
  background-color: ${theme.colors.secondary};
  font-family: ${theme.fonts.boldItalic};
  font-size: 15px;
  width: 60px;
  text-align: center;
  border-radius: 30px;
`;
