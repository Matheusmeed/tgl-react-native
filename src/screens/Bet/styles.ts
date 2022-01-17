import styled from 'styled-components/native';
import { theme } from '../../shared/styles/theme';

export const Container = styled.ScrollView`
  flex: 1;
  padding-top: 40px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 20px;
`;

export const BetTitle = styled.Text`
  font-family: ${theme.fonts.mediumItalic};
  color: ${theme.colors.primary};
  font-size: 18px;
  text-align: center;
`;

export const Subtitle = styled.Text`
  text-align: center;
  font-family: ${theme.fonts.boldItalic};
  color: ${theme.colors.primary};
  font-size: 15px;
  margin-top: 7px;
  margin-bottom: 2px;
`;

export const Description = styled.Text`
  font-family: ${theme.fonts.regularItalic};
  color: ${theme.colors.primary};
  text-align: center;
  margin-bottom: 6px;
`;
