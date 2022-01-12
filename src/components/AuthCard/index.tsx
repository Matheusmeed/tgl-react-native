import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Container, InputView, MainButtonDiv, MainButtonText } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { AuthProps, NavigationProps } from '../@types/AuthProps';
import { theme } from '../../shared/styles/theme';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import {
  login,
  passRegex,
  emailRegex,
  nameRegex,
  createUser,
  changePass,
  resetPass,
} from '../../shared';
import { useDispatch, useSelector } from 'react-redux';
import {} from '../../shared';
import { RootState } from '../../store';
import { saveUserInfo, setResetToken } from '../../store/Stock.store';

const AuthCard = (props: AuthProps) => {
  const navigation = useNavigation<NavigationProps>();
  const dispatch = useDispatch();
  const stock = useSelector((state: RootState) => state.stock);

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [pass2, setPass2] = useState('');
  const [name, setName] = useState('');
  const [errorEmail, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [pass2Error, setPass2Error] = useState(false);
  const [nameError, setNameError] = useState(false);

  async function logIn() {
    if (errorEmail || !pass || !email) {
      console.log('Você deve preencher todos os campos corretamente');
    } else {
      const data = await login({ email: email, password: pass });
      if (data) {
        dispatch(saveUserInfo(data));
        navigation.navigate('bet');
        console.log(data);
      } else {
        console.log(data);
      }
    }
  }

  async function handleRegistration() {
    if (!name || !pass || !email || errorEmail || passError || nameError) {
      console.log('Preencha todos os campos corretamente');
    } else {
      const data = await createUser(email, name, pass);

      if (data) {
        const dataLogin = await login({ email: email, password: pass });
        if (dataLogin) {
          dispatch(saveUserInfo(dataLogin));
          navigation.navigate('bet');
        }
      }
    }
  }

  async function handleForgotPass() {
    if (errorEmail || !email) {
      console.log('Preencha o email corretamente');
    } else {
      const data = await changePass(email);

      if (data) {
        dispatch(setResetToken(data));
        navigation.navigate('/resetpass');
      }
    }
  }

  async function handleResetPass() {
    if (!pass || !pass2) {
      console.log('Preencha todos os campos');
    } else if (pass !== pass2) {
      console.log('As senhas estão diferentes');
    } else if (!passRegex.test(pass)) {
      console.log(
        'Sua senha precisa ter pelo menos 6 caracteres, incluindo um número.'
      );
    } else {
      const data = await resetPass(stock.resetToken, pass);

      if (data) {
        navigation.navigate('Auth');
      }
    }
  }

  function check() {
    if (email !== '' && !emailRegex.test(email)) {
      setEmailError(true);
    }
    if (pass !== '' && !passRegex.test(pass)) {
      setPassError(true);
    }
    if (name !== '' && !nameRegex.test(name)) {
      setNameError(true);
    }
  }

  function checkResetPass(passNum: number) {
    if (passNum === 1) {
      if (pass !== '' && !passRegex.test(pass)) {
        setPassError(true);
      }
    }

    if (passNum === 2) {
      if (pass2 !== '' && !passRegex.test(pass2)) {
        setPass2Error(true);
      }
    }
  }

  useEffect(() => {
    if (emailRegex.test(email)) {
      setEmailError(false);
    }
    if (passRegex.test(pass)) {
      setPassError(false);
    }
    if (passRegex.test(pass2)) {
      setPass2Error(false);
    }
    if (nameRegex.test(name)) {
      setNameError(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, pass, name]);

  return (
    <Container>
      {props.hasName && (
        <InputView>
          <TextInput
            placeholder='Name'
            onChangeText={(text) => setName(text)}
          ></TextInput>
        </InputView>
      )}
      {props.hasEmail && (
        <InputView>
          <TextInput
            placeholder='Email'
            onChangeText={(text) => setEmail(text)}
          ></TextInput>
        </InputView>
      )}
      {props.hasPassword && props.screen !== 'New password' && (
        <InputView>
          <TextInput
            placeholder='Password'
            onChangeText={(text) => setPass(text)}
          ></TextInput>
        </InputView>
      )}

      {props.hasPassword && props.screen === 'New password' && (
        <>
          <InputView>
            <TextInput
              placeholder='Password'
              onChangeText={(text) => setPass(text)}
              onBlur={() => checkResetPass(1)}
            ></TextInput>
          </InputView>

          <InputView>
            <TextInput
              placeholder='Confirm password'
              onChangeText={(text) => setPass2(text)}
              onBlur={() => checkResetPass(2)}
            ></TextInput>
          </InputView>
        </>
      )}

      <MainButtonDiv>
        {props.screen === 'Authentication' && (
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPass')}
            style={{
              position: 'absolute',
              right: 10,
              top: 3,
              paddingBottom: 5,
            }}
          >
            <Text
              style={{
                color: theme.colors.primary,
                fontSize: 13,
              }}
            >
              I forgot my password
            </Text>
          </TouchableOpacity>
        )}

        {props.screen === 'Authentication' && (
          <TouchableOpacity onPress={() => logIn()}>
            <MainButtonText>
              Log In <Ionicons name='arrow-forward' size={20} />
            </MainButtonText>
          </TouchableOpacity>
        )}

        {props.screen === 'Registration' && (
          <TouchableOpacity onPress={() => handleRegistration()}>
            <MainButtonText>
              Register <Ionicons name='arrow-forward' size={20} />
            </MainButtonText>
          </TouchableOpacity>
        )}

        {props.screen === 'Reset password' && (
          <TouchableOpacity onPress={() => handleForgotPass()}>
            <MainButtonText>
              Send link
              <Ionicons name='arrow-forward' size={20} />
            </MainButtonText>
          </TouchableOpacity>
        )}

        {props.screen == 'New password' && (
          <TouchableOpacity onPress={() => handleResetPass()}>
            <MainButtonText>
              Change password <Ionicons name='arrow-forward' size={20} />
            </MainButtonText>
          </TouchableOpacity>
        )}
      </MainButtonDiv>
    </Container>
  );
};

export default AuthCard;
