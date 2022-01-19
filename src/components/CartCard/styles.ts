import styled from 'styled-components/native';
import { theme } from '@shared/index';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.View`
  background-color: white;
  border: 1px solid #e2e2e2;
  border-radius: 10px;
  width: 80%;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.boldItalic};
  font-size: 18px;
  color: ${theme.colors.primary};
  padding-left: 20px;
  padding-top: 12px;
`;

export const SaveButton = styled.TouchableOpacity`
  background-color: #f4f4f4;
  align-items: center;
  padding: 21px;
  border-width: 0.5px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-color: #e2e2e2;
`;

export const SaveText = styled.Text`
  color: #27c383;
  font-family: ${theme.fonts.boldItalic};
  font-size: 24px;
  align-items: center;
  justify-content: center;
`;

export const ListView = styled.ScrollView`
  max-height: 250px;
  padding-top: 14px;
`;

export const LineView = styled.View`
  padding-left: 12px;
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
`;

export const RemoveButton = styled.TouchableOpacity`
  padding-right: 10px;
`;

export const BetInfoDiv = styled.View<{ color: string }>`
  height: 50px;
  justify-content: center;
  border-left-width: 3px;
  border-left-color: ${(props) => props.color};
  padding-left: 10px;
`;

export const GameInfoDiv = styled.View`
  flex-direction: row;
`;

export const GameName = styled.Text`
  font-family: ${theme.fonts.boldItalic};
`;

export const TotalDiv = styled.View`
  justify-content: center;
  padding-bottom: 13px;
`;
