import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native';

import logoImg from '../../assets/logo.png';

import {
  Container,
  ScrollViewContainer,
  KeyboardAvoid,
  Title,
  ComponentImg,
  SignInput,
  PasswordInput,
  EntryButtom,
  BackToSignIn,
  BackToSignInText,
  BackToSignInIcon,
} from './styles';

const SignUp: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <KeyboardAvoid>
        <ScrollViewContainer>
          <Container>
            <ComponentImg source={logoImg} />
            <>
              <Title>Criar conta</Title>
            </>
            <SignInput
              name="user"
              icon="user"
              placeholder="Nome"
              autoCapitalize="words"
              autoCorrect={false}
              autoCompleteType="name"
            />
            <SignInput
              name="email"
              icon="mail"
              placeholder="E-mail"
              autoCapitalize="none"
              autoCorrect={false}
              autoCompleteType="email"
              keyboardType="email-address"
            />
            <PasswordInput
              name="password"
              icon="lock"
              placeholder="Senha"
              autoCapitalize="none"
              autoCorrect={false}
              maxLength={16}
              secureTextEntry={true}
            />

            <EntryButtom onPress={() => {}}>Entrar</EntryButtom>
          </Container>
        </ScrollViewContainer>
      </KeyboardAvoid>

      <BackToSignIn
        onPress={() => {
          navigation.navigate('SignIn');
        }}>
        <>
          <BackToSignInIcon name="arrow-left" />
          <BackToSignInText>Acessar conta</BackToSignInText>
        </>
      </BackToSignIn>
    </>
  );
};

export default SignUp;
