import styled from 'styled-components';
import { device } from '../../config/device';
import { SpanText } from '../../styles/helpers/SpanText';

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
    width: 100%;
  background-color: ${props => props.theme['white-ice']};
  padding: 2vh;
  margin-top: 64px;
  height: 200px;
`;

export const Text = styled(SpanText)`
  color: ${(props) => (props.color ? props.color : '#2c2b2b')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '0.9em')};
  font-weight: 500;
  margin-right: 0.4rem;
  align-items: center;
  text-align: center;
  margin-top: 8px;
  margin-bottom: 60px;

  @media ${device.laptop} {
    margin-bottom: 8px;
  }
`;