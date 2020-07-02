import React from 'react';

import logoImg from '../../assets/logo.png';
import Input from '../../components/Input';
import Buttom from '../../components/Buttom';

import {Container, Title, LogoImg} from './styles';

const SignIn: React.FC = () => (
  <>
    <Container>
      <LogoImg source={logoImg} />
      <Title>Faça seu logon</Title>
      <Input name="email" icon="mail" placeholder="E-mail" />
      <Input name="password" icon="lock" placeholder="Senha" />
      <Buttom onPress={() => {}}>Entrar</Buttom>
    </Container>
  </>
);

export default SignIn;
