import React, {useState} from 'react';
import {TextInputProps} from 'react-native';

import {Container, TextInput, Icon, ButtomEye, IconEye} from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

const Input: React.FC<InputProps> = ({name, icon, ...rest}) => {
  const [isOpenPassword, setOpenPassword] = useState(true);

  return (
    <Container>
      <Icon name={icon} />
      <TextInput
        {...rest}
        keyboardAppearance="dark"
        secureTextEntry={isOpenPassword ? true : false}
      />
      <ButtomEye
        onPress={() =>
          isOpenPassword ? setOpenPassword(false) : setOpenPassword(true)
        }>
        {isOpenPassword ? <IconEye name="eye" /> : <IconEye name="eye-off" />}
      </ButtomEye>
    </Container>
  );
};

export default Input;
