import React, { useState } from 'react';
import { Entypo } from '@expo/vector-icons';
import {
  AccountInfoView,
  Container,
  Title,
  TextInfo,
  Card,
  BtnsView,
  Button,
  TextButton,
  BtnLeave,
  BtnLeaveTxt,
} from './styles';
import { ModalProfile } from '@components/index';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/index';
import { formatDate } from '@shared/index';
import { clearBetList, removeUserInfo } from '@store/Stock.store';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {
  const [modalActive, setModalActive] = useState(false);
  const [modalType, setModalType] = useState('name');
  const userInfo = useSelector((state: RootState) => state.stock.userInfo.user);

  const dispatch = useDispatch();

  function handleLeave() {
    dispatch(clearBetList([{}]));
    dispatch(removeUserInfo());
    AsyncStorage.removeItem('token');
  }

  return (
    <Container>
      <Card>
        <AccountInfoView>
          <Title>Nome</Title>
          <TextInfo>{userInfo.name}</TextInfo>
          <Title>Email</Title>
          <TextInfo>{userInfo.email}</TextInfo>
          <Title>Conta criada em</Title>
          <TextInfo>{formatDate(userInfo.created_at)}</TextInfo>
        </AccountInfoView>
        <BtnsView>
          <Button
            onPress={() => {
              setModalType('name');
              setModalActive(true);
            }}
          >
            <TextButton>Alterar nome</TextButton>
          </Button>
          <Button
            onPress={() => {
              setModalType('password');
              setModalActive(true);
            }}
          >
            <TextButton>Alterar senha</TextButton>
          </Button>
        </BtnsView>
      </Card>
      <BtnLeave>
        <BtnLeaveTxt onPress={handleLeave}>
          Sair <Entypo name='log-out' size={15} color='red' />
        </BtnLeaveTxt>
      </BtnLeave>
      <ModalProfile
        modalActive={modalActive}
        setModalActive={setModalActive}
        type={modalType}
      />
    </Container>
  );
};

export default Profile;
