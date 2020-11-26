import React, {useCallback, useRef} from 'react';
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
  ForgotPassword,
  ForgotPasswordText,
  CreateAccount,
  CreateAccountText,
  CreateAccountIcon,
} from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const navigation = useNavigation();

  const handleSignIn = useCallback(async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('* E-mail obrigatorio')
          .email('* Digite um e-mail válido'),
        password: Yup.string().min(6, '* Min 6').max(16, '* Máx 16'),
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
              <Title>Acessar conta</Title>
            </>
            <Form ref={formRef} onSubmit={handleSignIn}>
              <SignInput
                name="email"
                icon="mail"
                placeholder="E-mail"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
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
