import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import {responsiveSize} from '../../styles/responsive';
import colors from '../../styles/colors';

export const Container = styled(RectButton)`
  width: 100%;
  height: ${responsiveSize(60)}px;
  background-color: ${colors.OrangePrimary};
  border-radius: ${responsiveSize(10)}px;
  justify-content: center;
  align-items: center;
`;

export const TextButtom = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: ${colors.DarkGreyPrimary};
  font-size: ${responsiveSize(18)}px;
`;
