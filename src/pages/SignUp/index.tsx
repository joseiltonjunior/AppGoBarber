import React, {useRef, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
import {TextInput, Alert} from 'react-native';

import * as Yup from 'yup';
import getValidationErros from '../../utils/getValidationErros';

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

interface SignInFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const emailInputRef = useRef<TextInput>(null);

  const navigation = useNavigation();

  const handleSignUp = useCallback(async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('* Nome obrigatório'),
        email: Yup.string()
          .required('* E-mail obrigatorio')
          .email('* Digite um e-mail válido'),
        password: Yup.string().min(6, '* Min 6').max(16, '* Máx 16'),
        confirmPassword: Yup.string().min(6, '* Min 6').max(16, '* Máx 16'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      navigation.navigate('Home');
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationErros(error);

        formRef.current?.setErrors(errors);

        return;
      }

      // Alert.alert(
      //   'Erro na autenticação',
      //   'Verifique os dados e tente novamente',
      // );
    }
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
                name="name"
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
              <PasswordInput
                ref={passwordInputRef}
                name="confirmPassword"
                icon="lock"
                placeholder="Confirme a senha"
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
