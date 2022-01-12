import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Container, InputView, MainButtonDiv, MainButtonText } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { AuthProps, NavigationProps } from '../@types/AuthProps';
import { theme } from '../../shared/styles/theme';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { login } from '../../shared';
import { useDispatch, useSelector } from 'react-redux';
import { saveUserInfo } from '../../store/Stock.store';
import { emailRegex } from '../../shared';
import { RootState } from '../../store';

const AuthCard = (props: AuthProps) => {
  const navigation = useNavigation<NavigationProps>();
  const dispatch = useDispatch();
  const stock = useSelector((state: RootState) => state.stock);

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [errorEmail, setEmailError] = useState(false);

  async function logIn() {
    if (errorEmail || !pass || !email) {
      console.log('Você deve preencher todos os campos corretamente');
    } else {
      const data = await login({ email: email, password: pass });
      if (data) {
        // dispatch(saveUserInfo(data));
        // navigation.navigate('bet');
        console.log(data);
      } else {
        console.log(data);
      }
    }
  }

  function check() {
    if (email !== '' && !emailRegex.test(email)) {
      setEmailError(true);
    }
  }

  useEffect(() => {
    if (emailRegex.test(email)) {
      setEmailError(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email]);

  return (
    <Container>
      {props.hasName && (
        <InputView>
          <TextInput placeholder='Name'></TextInput>
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
            <TextInput placeholder='Password'></TextInput>
          </InputView>

          <InputView>
            <TextInput placeholder='Password'></TextInput>
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
          <TouchableOpacity>
            <MainButtonText>
              Register <Ionicons name='arrow-forward' size={20} />
            </MainButtonText>
          </TouchableOpacity>
        )}

        {props.screen === 'Reset password' && (
          <TouchableOpacity onPress={() => navigation.navigate('ResetPass')}>
            <MainButtonText>
              Send link
              <Ionicons name='arrow-forward' size={20} />
            </MainButtonText>
          </TouchableOpacity>
        )}

        {props.screen == 'New password' && (
          <TouchableOpacity>
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
