import styled from 'styled-components/native';
import { theme } from '../../shared/styles/theme';

export const Container = styled.View`
  align-items: center;
  padding-top: 45px;
`;

export const GameFilterBtn = styled.TouchableOpacity<{
  color: string | null;
  theme: string;
}>`
  background-color: ${(props) => (props.color ? 'white' : props.theme)};
  border-color: ${(props) => (props.color ? props.color : props.theme)};
  border-width: 2px;
  padding: 5px;
  width: 70%;
  align-items: center;
  margin-bottom: 5px;
  border-radius: 20px;
`;

export const GameFilterBtnText = styled.Text<{ color?: string }>`
  font-family: ${theme.fonts.boldItalic};
  color: ${(props) => (props.color ? props.color : 'white')};
`;
