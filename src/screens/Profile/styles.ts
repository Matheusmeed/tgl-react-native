import styled from 'styled-components/native';
import { theme } from '../../shared/styles/theme';

export const Container = styled.ScrollView`
  flex: 1;
  padding-top: 40px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
`;

export const Card = styled.View`
  background-color: white;
  padding-top: 15px;
  margin-left: 10%;
  margin-right: 10%;
  border: 0.6px solid #dddddd;
  border-radius: 10px;
`;

export const AccountInfoView = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.boldItalic};
  color: ${theme.colors.secondary};
  font-size: 17px;
`;

export const TextInfo = styled.Text`
  font-family: ${theme.fonts.boldItalic};
  color: ${theme.colors.primary};
  padding-bottom: 15px;
`;

export const BtnsView = styled.View`
  margin-top: 10px;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${theme.colors.secondary};
  width: 80%;
  height: 35px;
  margin-bottom: 8px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

export const TextButton = styled.Text`
  color: white;
  font-family: ${theme.fonts.boldItalic};
  font-size: 16px;
`;

export const BtnLeave = styled.TouchableOpacity`
  margin-top: 20px;
  align-items: center;
`;

export const BtnLeaveTxt = styled.Text`
  font-family: ${theme.fonts.boldItalic};

  font-size: 15px;
  color: red;
`;
