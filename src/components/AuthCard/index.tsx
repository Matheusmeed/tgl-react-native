import { Text, TextInput, TouchableOpacity } from 'react-native';
import { Container, InputView, MainButtonDiv, MainButtonText } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { AuthProps, NavigationProps } from '../types/AuthProps';
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
import { RootState } from '../../store';
import { saveUserInfo, setResetToken } from '../../store/Stock.store';
import ErrorMessage from '../ErrorMessage';
import { alertDanger, alertWarning } from '../../shared/helpers/Functions';

const AuthCard = (props: AuthProps) => {
  const navigation = useNavigation<NavigationProps>();
  const dispatch = useDispatch();
  const stock = useSelector((state: RootState) => state.stock);

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [pass2, setPass2] = useState('');
  const [name, setName] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [pass2Error, setPass2Error] = useState(false);
  const [nameError, setNameError] = useState(false);

  async function logIn() {
    if (emailError || !pass || !email) {
      alertWarning('Você deve preencher todos os campos corretamente!');
    } else {
      const data = await login({ email: email, password: pass });
      if (data) {
        dispatch(saveUserInfo(data));
      }
    }
  }

  async function handleRegistration() {
    if (!name || !pass || !email || emailError || passError || nameError) {
      alertWarning('Preencha todos os campos corretamente!');
    } else {
      const data = await createUser(email, name, pass);

      if (data) {
        const dataLogin = await login({ email: email, password: pass });
        if (dataLogin) {
          dispatch(saveUserInfo(dataLogin));
        }
      }
    }
  }

  async function handleForgotPass() {
    if (emailError || !email) {
      alertWarning('Preencha o email corretamente!');
    } else {
      const data = await changePass(email);

      if (data) {
        dispatch(setResetToken(data));
        navigation.navigate('ResetPass');
      }
    }
  }

  async function handleResetPass() {
    if (!pass || !pass2) {
      alertWarning('Preencha todos os campos!');
    } else if (pass !== pass2) {
      alertDanger('As senhas estão diferentes!');
    } else if (!passRegex.test(pass)) {
      alertDanger(
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
  }, [email, pass, name, pass2]);

  return (
    <Container>
      {props.hasName && (
        <>
          <InputView>
            <TextInput
              placeholder='Name'
              onChangeText={(text) => setName(text)}
              onBlur={() => check()}
            ></TextInput>
          </InputView>
          {nameError && <ErrorMessage>Nome incorreto</ErrorMessage>}
        </>
      )}
      {props.hasEmail && (
        <>
          <InputView>
            <TextInput
              placeholder='Email'
              onChangeText={(text) => setEmail(text)}
              onBlur={() => check()}
            ></TextInput>
          </InputView>
          {props.screen !== 'Authentication' && emailError && (
            <ErrorMessage>Email incorreto</ErrorMessage>
          )}
        </>
      )}
      {props.hasPassword && props.screen !== 'New password' && (
        <>
          <InputView>
            <TextInput
              secureTextEntry={true}
              placeholder='Password'
              onChangeText={(text) => setPass(text)}
              onBlur={() => check()}
            ></TextInput>
          </InputView>
          {props.screen !== 'Authentication' && passError && (
            <ErrorMessage>Senha incorreta</ErrorMessage>
          )}
        </>
      )}

      {props.hasPassword && props.screen === 'New password' && (
        <>
          <InputView>
            <TextInput
              secureTextEntry={true}
              placeholder='Password'
              onChangeText={(text) => setPass(text)}
              onBlur={() => checkResetPass(1)}
            ></TextInput>
          </InputView>
          {passError && <ErrorMessage>Senha incorreta</ErrorMessage>}

          <InputView>
            <TextInput
              secureTextEntry={true}
              placeholder='Confirm password'
              onChangeText={(text) => setPass2(text)}
              onBlur={() => checkResetPass(2)}
            ></TextInput>
          </InputView>
          {pass2Error && <ErrorMessage>Senha incorreta</ErrorMessage>}
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
          <TouchableOpacity
            onPress={() => {
              logIn();
            }}
          >
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
              Send link <Ionicons name='arrow-forward' size={20} />
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
