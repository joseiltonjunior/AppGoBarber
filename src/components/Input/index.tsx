import React, {useState} from 'react';
import {TextInputProps} from 'react-native';

import {Container, TextInput, Icon} from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

const Input: React.FC<InputProps> = ({name, icon, ...rest}) => {
  return (
    <Container>
      <Icon name={icon} />
      <TextInput {...rest} keyboardAppearance="dark" />
    </Container>
  );
};

export default Input;
