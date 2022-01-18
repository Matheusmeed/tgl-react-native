import { TouchableOpacity } from 'react-native';
import { Container, StyledText } from './styles';
import { Ionicons } from '@expo/vector-icons';
import AuthCard from '../AuthCard';
import { useNavigation } from '@react-navigation/native';
import { AuthProps, NavigationProps } from '../types/AuthProps';
import { useEffect, useState } from 'react';

const AuthDiv = (props: AuthProps) => {
  const navigation = useNavigation<NavigationProps>();

  const [title, setTitle] = useState('Authentication');

  useEffect(() => {
    setTitle(props.screen);
  }, [props.screen]);

  return (
    <Container>
      <StyledText>{title}</StyledText>
      <AuthCard
        hasName={props.hasName}
        hasEmail={props.hasEmail}
        hasPassword={props.hasPassword}
        screen={props.screen}
      />

      {props.screen === 'Authentication' ? (
        <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
          <StyledText>
            Sign Up <Ionicons name='arrow-forward' size={20} />
          </StyledText>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => navigation.navigate('Auth')}>
          <StyledText>
            <Ionicons name='arrow-back' size={20} />
            Back
          </StyledText>
        </TouchableOpacity>
      )}
    </Container>
  );
};

export default AuthDiv;
