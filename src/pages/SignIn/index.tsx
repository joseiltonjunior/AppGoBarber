import React from 'react';
import {Image} from 'react-native';

import logoImg from '../../assets/logo.png';
import Input from '../../components/Input';
import Buttom from '../../components/Buttom';

import {Container, Title} from './styles';

const SignIn: React.FC = () => (
  <>
    <Container>
      <Image source={logoImg} />
      <Title>Faça seu logon</Title>
      <Input name="email" icon="mail" placeholder="E-mail" />
      <Input name="password" icon="lock" placeholder="Senha" />
      <Buttom onPress={() => {}}>Entrar</Buttom>
    </Container>
  </>
);

export default SignIn;
