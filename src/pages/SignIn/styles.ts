import styled from 'styled-components/native';
import {responsiveSize} from '../../styles/responsive';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: ${responsiveSize(20)}px;
  color: ${colors.LightPrimary};
  margin: ${responsiveSize(70)}px 0 ${responsiveSize(30)}px;
`;
