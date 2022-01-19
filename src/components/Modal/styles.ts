import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '@shared/index';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const OuterView = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalView = styled.TouchableOpacity`
  margin-top: -100px;
  background-color: white;
  border-radius: 30px;
  padding: 35px;
  width: 70%;
  align-items: center;
`;

export const InputView = styled.View`
  background-color: #ececec;
  border-radius: 16px;
  width: 100%;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.boldItalic};
  color: ${theme.colors.primary};
  font-size: 15px;
  margin-bottom: 6px;
`;

export const AlterButton = styled.TouchableOpacity`
  background-color: black;
  padding: 8px;
  width: 100%;
  margin-top: 10px;
  border-radius: 20px;
  align-items: center;
`;

export const AlterTxt = styled.Text`
  font-family: ${theme.fonts.boldItalic};
  color: white;
`;

export const CloseModalTxt = styled.Text`
  margin-top: 20px;
  color: red;
  font-family: ${theme.fonts.mediumItalic};
`;

export const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 4,
    shadowRadius: 4,
    elevation: 1,
  },
});
