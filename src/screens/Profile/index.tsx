import React, { useRef } from 'react';
import { Entypo } from '@expo/vector-icons';
import { Modalize } from 'react-native-modalize';

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
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

type modalizeProp = {
  open: Function;
};

const Profile = () => {
  const modalizeRef: any = useRef(null);

  function onOpen() {
    modalizeRef.current?.open();
  }

  return (
    <>
      <Container>
        <Card>
          <AccountInfoView>
            <Title>Nome</Title>
            <TextInfo>Matheus</TextInfo>
            <Title>Email</Title>
            <TextInfo>Matheus</TextInfo>
            <Title>Conta criada em</Title>
            <TextInfo>Matheus</TextInfo>
          </AccountInfoView>
          <BtnsView>
            <Button onPress={onOpen}>
              <TextButton>Alterar nome</TextButton>
            </Button>
            <Button>
              <TextButton>Alterar senha</TextButton>
            </Button>
          </BtnsView>
        </Card>
        <BtnLeave>
          <BtnLeaveTxt>
            Sair <Entypo name='log-out' size={15} color='red' />
          </BtnLeaveTxt>
        </BtnLeave>
      </Container>
      <Modalize ref={modalizeRef} snapPoint={180}>
        <View
          style={{
            flex: 1,
            height: 180,
            flexDirection: 'row',
            justifyContent: 'center',
            alignContent: 'center',
          }}
        >
          <TouchableOpacity
            style={[styles.botao, { backgroundColor: '#29ae19' }]}
          >
            <Text>editar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.botao, { backgroundColor: '#ff0000' }]}
          >
            <Text>excluir</Text>
          </TouchableOpacity>
        </View>
      </Modalize>
    </>
  );
};

const styles = StyleSheet.create({
  botao: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 7,
  },
});

export default Profile;
