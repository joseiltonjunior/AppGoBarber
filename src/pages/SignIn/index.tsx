import React, {useCallback, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
import {TextInput} from 'react-native';

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
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const navigation = useNavigation();

  const handleSignIn = useCallback((data: object) => {
    console.log(data);
  }, []);

  return (
    <>
      <KeyboardAvoid>
        <ScrollViewContainer>
          <Container>
            <ComponentImg source={logoImg} />
            <>
              <Title>Acessar conta</Title>
            </>
            <Form ref={formRef} onSubmit={handleSignIn}>
              <SignInput
                name="email"
                icon="mail"
                placeholder="E-mail"
                autoCapitalize="none"
                autoCorrect={false}
                autoCompleteType="email"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current.focus();
                }}
              />
              <PasswordInput
                ref={passwordInputRef}
                name="password"
                icon="lock"
                placeholder="Senha"
                autoCapitalize="none"
                autoCorrect={false}
                maxLength={16}
                returnKeyType="send"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              />

              <EntryButtom
                onPress={() => {
                  formRef.current?.submitForm();
                }}>
                Entrar
              </EntryButtom>
            </Form>

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
