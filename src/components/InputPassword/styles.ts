import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {responsiveSize} from '../../styles/responsive';
import colors from '../../styles/colors';

export const Container = styled.View`
  width: 100%;
  height: ${responsiveSize(60)}px;
  padding: 0 ${responsiveSize(15)}px;
  border-radius: ${responsiveSize(10)}px;
  background-color: ${colors.DarkGreySecundary};
  margin-bottom: ${responsiveSize(8)}px;
  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: colors.DarkPlaceholders,
})`
  flex: 1;
  color: ${colors.LightPrimary};
  font-size: ${responsiveSize(16)}px;
  font-family: 'RobotoSlab-Medium';
`;

export const Icon = styled(FeatherIcon).attrs({
  color: colors.DarkPlaceholders,
  size: responsiveSize(25),
})`
  margin-right: ${responsiveSize(15)}px;
`;

export const ButtomEye = styled.TouchableOpacity``;

export const IconEye = styled(FeatherIcon).attrs({
  color: colors.DarkPlaceholders,
  size: responsiveSize(25),
})``;
