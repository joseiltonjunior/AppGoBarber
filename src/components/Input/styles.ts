import styled from 'styled-components/native';
import {responsiveSize} from '../../styles/responsive';
import colors from '../../styles/colors';

export const Container = styled.View`
  width: 100%;
  height: ${responsiveSize(60)}px;
  padding: 0 ${responsiveSize(15)}px;
  border-radius: ${responsiveSize(10)}px;
  background-color: ${colors.DarkGreySecundary};
  margin-bottom: ${responsiveSize(10)}px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: ${colors.LightPrimary};
  font-size: ${responsiveSize(16)}px;
  font-family: 'RobotoSlab-Medium';
`;
