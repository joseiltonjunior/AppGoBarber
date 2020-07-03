import React from 'react';

import logoImg from '../../assets/logo.png';

import {
  Container,
  ScrollViewContainer,
  KeyboardAvoid,
  Title,
  ComponentImg,
  SignInput,
  EntryButtom,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccount,
  CreateAccountText,
  CreateAccountIcon,
} from './styles';

const SignIn: React.FC = () => (
  <>
    <KeyboardAvoid>
      <ScrollViewContainer>
        <Container>
          <ComponentImg source={logoImg} />
          <>
            <Title>Faça seu logon</Title>
          </>
          <SignInput name="email" icon="mail" placeholder="E-mail" />
          <SignInput name="password" icon="lock" placeholder="Senha" />

          <EntryButtom onPress={() => {}}>Entrar</EntryButtom>
          <ForgotPassword onPress={() => {}}>
            <ForgotPasswordText>Esqueçeu a senha?</ForgotPasswordText>
          </ForgotPassword>
        </Container>
      </ScrollViewContainer>
    </KeyboardAvoid>

    <CreateAccount onPress={() => {}}>
      <>
        <CreateAccountIcon name="log-in" />
        <CreateAccountText>Criar conta</CreateAccountText>
      </>
    </CreateAccount>
  </>
);

export default SignIn;
