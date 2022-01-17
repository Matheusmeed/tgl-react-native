import styled from 'styled-components/native';
import { theme } from '../../shared/styles/theme';

type PropsBtn = {
  color?: string;
  color2?: string;
};

type PropsTxt = {
  color?: string;
};
export const Container = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 4px;
`;

export const GameButton = styled.TouchableOpacity<PropsBtn>`
  background-color: ${(props) =>
    props.color ? 'white' : props.color2 ? props.color2 : 'white'};
  border: 2px solid
    ${(props) =>
      props.color ? props.color : props.color2 ? props.color2 : 'white'};
  width: 100px;
  align-items: center;
  border-radius: 40px;
  margin-bottom: 4px;
  padding: 4px;
  width: 200px;
`;

export const GameButtonText = styled.Text<PropsTxt>`
  color: ${(props) => (props.color ? props.color : 'white')};
  font-family: ${theme.fonts.boldItalic};
`;
