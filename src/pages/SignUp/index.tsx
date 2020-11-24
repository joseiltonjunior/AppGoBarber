import React, {useRef, useCallback} from 'react';
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
  BackToSignIn,
  BackToSignInText,
  BackToSignInIcon,
} from './styles';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const emailInputRef = useRef<TextInput>(null);

  const navigation = useNavigation();

  const handleSignUp = useCallback((data: object) => {
    console.log(data);
  }, []);

  return (
    <>
      <KeyboardAvoid>
        <ScrollViewContainer>
          <Container>
            <ComponentImg source={logoImg} />
            <>
              <Title>Criar conta</Title>
            </>
            <Form ref={formRef} onSubmit={handleSignUp}>
              <SignInput
                name="user"
                icon="user"
                placeholder="Nome"
                autoCapitalize="words"
                autoCorrect={true}
                returnKeyType="next"
                onSubmitEditing={() => {
                  emailInputRef.current.focus();
                }}
              />
              <SignInput
                ref={emailInputRef}
                name="email"
                icon="mail"
                placeholder="E-mail"
                autoCapitalize="none"
                autoCorrect={false}
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
                maxLength={16}
                textContentType="newPassword"
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
