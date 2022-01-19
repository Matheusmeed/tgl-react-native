import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '@shared/index';

export const Container = styled.View`
  flex: 1;
`;

export const BetInfoDiv = styled.ScrollView`
  margin-top: 20px;
  /* margin-bottom: 10px; */
`;

export const OwnBet = styled.View<{ color?: string }>`
  background-color: white;
  width: 80%;
  align-items: center;
  padding: 8px;
  margin-bottom: 9px;
  background-color: ${(props) => props.color || theme.colors.primary};
  border-radius: 4px;
`;

export const OwnBetNumbers = styled.Text`
  font-family: ${theme.fonts.boldItalic};
  color: white;
`;

export const OwnBetInfo = styled.Text`
  font-family: ${theme.fonts.boldItalic};
  color: #d6d6d6;
`;

export const OwnBetTitle = styled.Text<{ color?: string }>`
  font-family: ${theme.fonts.boldItalic};
  color: white;
`;

export const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 6, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 3,
  },
});
