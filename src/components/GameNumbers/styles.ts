import styled from 'styled-components/native';
import { theme } from '../../shared/styles/theme';

type GameNumberButtonProps = {
  color: string;
};

export const ContainerGameNumber = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const GameNumberButton = styled.TouchableOpacity<GameNumberButtonProps>`
  background-color: ${(props) => props.color || '#ADC0C4'};
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  margin: 3px;
  border-radius: 25px;
`;

export const GameNumberButtonText = styled.Text`
  color: white;
  font-family: ${theme.fonts.boldItalic};
`;

export const ContainerGameButtons = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 4px;
  margin-bottom: 55px;
`;

export const GameBtn = styled.TouchableOpacity`
  align-items: center;
  width: 200px;
  background: #27c383;
  border: 1px solid #27c383;
  border-radius: 20px;
  margin-top: 6px;
  padding: 7px;
`;

export const GameBtnText = styled.Text`
  color: white;
  font-size: 14px;
`;
