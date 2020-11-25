import styled, {css} from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {responsiveSize} from '../../styles/responsive';
import colors from '../../styles/colors';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: ${responsiveSize(60)}px;
  padding: 0 ${responsiveSize(15)}px;
  border-radius: ${responsiveSize(10)}px;
  background-color: ${colors.DarkGreySecundary};
  margin-bottom: ${responsiveSize(8)}px;
  border-width: ${responsiveSize(2)}px;
  border-color: ${colors.DarkGreySecundary};

  flex-direction: row;
  align-items: center;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: ${colors.RedPrimary};
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: ${colors.OrangePrimary};
    `}
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
  size: responsiveSize(25),
})`
  margin-right: ${responsiveSize(15)}px;
`;

export const ButtomEye = styled.TouchableOpacity``;

export const IconEye = styled(FeatherIcon).attrs({
  color: colors.DarkPlaceholders,
  size: responsiveSize(25),
})``;
