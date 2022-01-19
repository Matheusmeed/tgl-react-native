import React, { useState } from 'react';
import { Modal, Pressable, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/index';
import { changeUserName } from '@store/Stock.store';
import {
  changePass,
  nameRegex,
  passRegex,
  resetPass,
  updateUser,
  alertWarning,
} from '@shared/index';
import {
  Container,
  OuterView,
  ModalView,
  CloseModalTxt,
  styles,
  InputView,
  Title,
  AlterButton,
  AlterTxt,
} from './styles';

type Props = {
  modalActive: boolean;
  setModalActive: Function;
  type: string;
};

const ModalProfile = (props: Props) => {
  const stock = useSelector((state: RootState) => state.stock);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [pass2, setPass2] = useState('');

  async function handleChangeName() {
    if (!name) {
      alertWarning('Preencha o campo para alterar o seu nome!');
    } else if (!nameRegex.test(name)) {
      alertWarning(
        'Nome inválido',
        'Seu nome deve iniciar com uma letra maiúscula.'
      );
    } else {
      const data = await updateUser(stock.userInfo.user.email, name);
      console.log('else');

      if (data) {
        dispatch(changeUserName(data));
        props.setModalActive(false);
      }
    }
  }

  async function handleChangePass() {
    if (!pass || !pass2) {
      alertWarning('Preencha todos os campos!');
    } else if (pass !== pass2) {
      alertWarning('As senhas estão diferentes!');
    } else if (!passRegex.test(pass) || !passRegex.test(pass2)) {
      alertWarning(
        'Sua senha deve conter pelo menos 6 caracteres, incluindo um número.'
      );
    } else {
      const token = await changePass(stock.userInfo.user.email);
      if (token) {
        const data = await resetPass(token, pass);
        if (data) {
          props.setModalActive(false);
        }
      }
    }
  }

  return (
    <Container>
      <Modal
        visible={props.modalActive}
        statusBarTranslucent={true}
        transparent={true}
        animationType='fade'
        onRequestClose={() => props.setModalActive(false)}
      >
        <OuterView
          onPress={() => props.setModalActive(false)}
          activeOpacity={1}
        >
          {props.type === 'name' && (
            <ModalView activeOpacity={1} style={styles.shadow}>
              <Title>Novo nome</Title>
              <InputView>
                <TextInput
                  style={{ width: '100%' }}
                  placeholder='Nome'
                  onChangeText={(text) => setName(text)}
                ></TextInput>
              </InputView>
              <AlterButton onPress={handleChangeName}>
                <AlterTxt>Alterar nome</AlterTxt>
              </AlterButton>
              <Pressable onPress={() => props.setModalActive(false)}>
                <CloseModalTxt>Fechar modal</CloseModalTxt>
              </Pressable>
            </ModalView>
          )}
          {props.type === 'password' && (
            <ModalView activeOpacity={1} style={styles.shadow}>
              <Title>Nova senha</Title>
              <InputView>
                <TextInput
                  style={{ width: '100%' }}
                  placeholder='senha'
                  secureTextEntry={true}
                  onChangeText={(text) => setPass(text)}
                ></TextInput>
              </InputView>
              <Title style={{ marginTop: 15 }}>Confirmar nova senha</Title>
              <InputView style={{ marginBottom: 4 }}>
                <TextInput
                  style={{ width: '100%' }}
                  placeholder='senha'
                  secureTextEntry={true}
                  onChangeText={(text) => setPass2(text)}
                ></TextInput>
              </InputView>
              <AlterButton onPress={handleChangePass}>
                <AlterTxt>Alterar senha</AlterTxt>
              </AlterButton>
              <Pressable onPress={() => props.setModalActive(false)}>
                <CloseModalTxt>Fechar modal</CloseModalTxt>
              </Pressable>
            </ModalView>
          )}
        </OuterView>
      </Modal>
    </Container>
  );
};

export default ModalProfile;
