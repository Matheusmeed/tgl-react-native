import styled from 'styled-components/native';
import { theme } from '../../shared/styles/theme';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 4px;
`;

export const GameButton = styled.TouchableOpacity`
  background-color: ${theme.colors.secondary};
  width: 100;
  align-items: center;
  border-radius: 40px;
  margin-bottom: 4px;
  padding: 4px;
  width: 200px;
`;

export const GameButtonText = styled.Text`
  color: white;
  font-family: ${theme.fonts.boldItalic};
`;
