import React, {
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
  ForwardRefRenderFunction,
} from 'react';

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

interface InputRef {
  focus(): void;
}

const InputPassword: ForwardRefRenderFunction<InputRef, InputProps> = (
  {name, icon, ...rest},
  ref,
) => {
  const [isOpenPassword, setOpenPassword] = useState(true);

  const inputElementRef = useRef<any>(null);
  const {registerField, defaultValue = '', fieldName, error} = useField(name);
  const inputValueRef = useRef<InputValueReference>({value: defaultValue});

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(ref: any, value) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({text: value});
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <Icon name={icon} />

      <TextInput
        ref={inputElementRef}
        keyboardAppearance="dark"
        defaultValue={defaultValue}
        onChangeText={(value) => {
          inputValueRef.current.value = value;
        }}
        secureTextEntry={isOpenPassword ? true : false}
        {...rest}
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

export default forwardRef(InputPassword);
