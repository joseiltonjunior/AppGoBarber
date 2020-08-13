import React, {useRef, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
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
  const formRef = useRef<FormHandles>(null);
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
