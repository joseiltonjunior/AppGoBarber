import styled from 'styled-components/native';
import {Image, Platform, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {RectButton} from 'react-native-gesture-handler';

import {responsiveSize} from '../../styles/responsive';
import colors from '../../styles/colors';
import Buttom from '../../components/Buttom';
import Input from '../../components/Input';
import InputPassword from '../../components/InputPassword';

export const KeyboardAvoid = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === 'ios' ? 'padding' : undefined,
  flex: 1,
})``;

export const ScrollViewContainer = styled(ScrollView).attrs({
  keyboardShouldPersistTaps: 'handled',
  justifyContent: 'center',
})``;

export const Container = styled.View.attrs({})`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 ${responsiveSize(30)}px
    ${Platform.OS === 'android' ? responsiveSize(50) : responsiveSize(50)}px;
`;

export const ComponentImg = styled(Image).attrs({})``;

export const Title = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: ${responsiveSize(18)}px;
  color: ${colors.LightPrimary};
  margin: ${responsiveSize(30)}px 0 ${responsiveSize(20)}px;
`;

export const EntryButtom = styled(Buttom)`
  width: ${responsiveSize(300)}px;
  align-self: center;
`;

export const SignInput = styled(Input)``;

export const PasswordInput = styled(InputPassword)``;

export const ForgotPassword = styled.TouchableOpacity`
  margin: ${responsiveSize(20)}px 0;
`;

export const ForgotPasswordText = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: ${responsiveSize(15)}px;
  color: ${colors.LightPrimary};
`;

export const CreateAccount = styled(RectButton).attrs({})`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${colors.DarkGreySecundary};
  padding: ${responsiveSize(16)}px 0;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const CreateAccountText = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: ${responsiveSize(15)}px;
  color: ${colors.OrangePrimary};
  margin-left: ${responsiveSize(15)}px;
`;

export const CreateAccountIcon = styled(Icon).attrs({
  color: colors.OrangePrimary,
  size: responsiveSize(20),
})``;

export const TextInput = styled.TextInput``;
