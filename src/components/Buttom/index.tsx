import React from 'react';
import {RectButtonProperties} from 'react-native-gesture-handler';

import {Container, TextButtom} from './styles';

interface ButtomProps extends RectButtonProperties {
  children: string;
}

const Input: React.FC<ButtomProps> = ({children, ...rest}) => (
  <Container {...rest}>
    <TextButtom>{children}</TextButtom>
  </Container>
);

export default Input;
