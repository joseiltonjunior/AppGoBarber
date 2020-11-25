import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useImperativeHandle,
  forwardRef,
  ForwardRefRenderFunction,
} from 'react';

import {TextInputProps} from 'react-native';
import {useField} from '@unform/core';

import colors from '../../styles/colors';

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
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const inputElementRef = useRef<any>(null);

  const {registerField, defaultValue = '', fieldName, error} = useField(name);
  const inputValueRef = useRef<InputValueReference>({value: defaultValue});

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputValueRef.current.value);
  }, []);

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
    <Container isFocused={isFocused} isErrored={!!error}>
      <Icon
        name={icon}
        color={
          isFocused || isFilled ? colors.OrangePrimary : colors.DarkPlaceholders
        }
      />

      <TextInput
        ref={inputElementRef}
        keyboardAppearance="dark"
        defaultValue={defaultValue}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
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
