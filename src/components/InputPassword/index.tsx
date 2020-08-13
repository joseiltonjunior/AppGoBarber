import React, {useState, useEffect, useRef} from 'react';
import {TextInputProps} from 'react-native';
import {useField} from '@unform/core';

import {Container, TextInput, Icon, ButtomEye, IconEye} from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}
interface InputValueReference {
  value: string;
}

const Input: React.FC<InputProps> = ({name, icon, ...rest}) => {
  const [isOpenPassword, setOpenPassword] = useState(true);

  const {registerField, defaultValue = '', fieldName, error} = useField(name);
  const inputValueRef = useRef<InputValueReference>({value: defaultValue});

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <Icon name={icon} />
      <TextInput
        {...rest}
        keyboardAppearance="dark"
        defaultValue={defaultValue}
        onChangeText={(value) => {
          inputValueRef.current.value = value;
        }}
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
