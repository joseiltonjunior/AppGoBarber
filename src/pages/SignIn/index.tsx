import React from 'react';
import {useNavigation} from '@react-navigation/native';

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
  ForgotPassword,
  ForgotPasswordText,
  CreateAccount,
  CreateAccountText,
  CreateAccountIcon,
} from './styles';

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <KeyboardAvoid>
        <ScrollViewContainer>
          <Container>
            <ComponentImg source={logoImg} />
            <>
              <Title>Acessar conta</Title>
            </>
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
            <ForgotPassword onPress={() => {}}>
              <ForgotPasswordText>Esqueçeu a senha?</ForgotPasswordText>
            </ForgotPassword>
          </Container>
        </ScrollViewContainer>
      </KeyboardAvoid>

      <CreateAccount
        onPress={() => {
          navigation.navigate('SignUp');
        }}>
        <>
          <CreateAccountIcon name="log-in" />
          <CreateAccountText>Criar conta</CreateAccountText>
        </>
      </CreateAccount>
    </>
  );
};

export default SignIn;
