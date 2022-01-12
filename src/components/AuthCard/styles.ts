import styled from 'styled-components/native';
import { theme } from '../../shared/styles/theme';

export const Container = styled.View`
  background-color: white;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 20px;
  margin-right: 20px;
  width: 100%;
  border: 0.6px solid #dddddd;
  border-radius: 14px;
`;

export const InputView = styled.View`
  height: 55px;
  justify-content: center;
  padding-left: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #ebebeb;
`;

export const MainButtonDiv = styled.View`
  height: 80px;
  justify-content: center;
  align-items: center;
`;

export const MainButtonText = styled.Text`
  font-size: 20px;
  color: ${theme.colors.secondary};
`;
