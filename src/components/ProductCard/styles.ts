import styled from 'styled-components';
import { SpanText } from '../../styles/helpers/SpanText';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  background-color: ${props => props.theme.white};
  padding: 1rem;
  margin-bottom: 0.1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme['white-ice']};
  padding: 1rem;
  width: 100%;
`;

export const ProductImage = styled.img`
  background-color: ${props => props.theme['gray-300']};
  width: 100%;
  height: auto;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.5rem 0 1.5rem 0;
  flex: 1;
`;

export const ProductTitle = styled(SpanText)`
  color: ${props => props.theme.secondary};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '0.95rem')};
  text-transform: uppercase;
  font-weight: bold;
  word-wrap: break-word;
  max-width: 70%;
`;
export const ProductPrice = styled(SpanText)`
  color: ${props => props.theme.secondary};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1rem')};
  font-weight: 500;
`;

export const ProductActions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;