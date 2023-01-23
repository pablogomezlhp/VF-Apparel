import styled from "styled-components";
import { device } from "../../config/device";

const itemHeightBig = "36px";
const itemHeightSmall = "22px";

const getItemHightSize = (small: boolean) =>
  small ? itemHeightSmall : itemHeightBig;

export const SelectListItem = styled.div<{
  small?: boolean;
  last: boolean;
  dropUp: boolean;
}>`
  display: flex;
  min-height: ${(props) => props.small && getItemHightSize(props.small)};
  height: 50px;
  align-items: center;
  padding-left: 13px;
  justify-content: flex-start;
  background: ${(props) => props.theme["white"]};
  color: ${(props) => `solid ${props.theme["gray-300"]}`};
  border-left: ${(props) => `solid ${props.theme["gray-300"]}`};
  border-right: ${(props) => `solid ${props.theme["gray-300"]}`};
  border-bottom: ${(props) => `solid ${props.theme["gray-300"]}`};

  /* background-color: green; */
  &:hover {
    background: ${(props) => props.theme["white-ice"]};
  }
`;

export const SelectListWrapper = styled.div`
  list-style: none;
`;

export const ItemStyled = styled.div`
  display: flex;
  align-items: center;
  padding-left: 13px;
  justify-content: flex-start;
`;

export const SelectWrapper = styled.div<{
  small: boolean;
  dropUp: boolean;
  open: boolean;
  ref: any;
}>`
  cursor: pointer;
  z-index: 1;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  position: relative;
  min-width: ${(props) => (props.small ? "60px" : "80px")};
  min-height: ${(props) => getItemHightSize(props.small)};
  background: ${(props) => props.theme.white};
  border: ${(props) => `solid 1px ${props.theme["gray-300"]}`};
  min-height: 50px;
  width: 250px;
  color: ${(props) => props.theme["gray-400"]};
  margin-top: 16px;
  margin-bottom: 16px;
  margin-left: 40px;
  @media ${device.laptop} {
    margin-left: 40px;
  }
`;

export const SelectCurrent = styled(ItemStyled)<{
  small: boolean;
  open: boolean;
}>`
  min-height: ${(props) => getItemHightSize(props.small)};
  height: 50px;

  color: ${(props) => `solid ${props.theme["gray-100"]}`};
  &::before {
    content: " ";
    position: absolute;
    right: 50px;
    width: 1px; /* Line width */
    background-color: ${(props) => props.theme["gray-300"]};
    height: 60%;
  }

  &::after {
    content: "";
    top: ${(props) => {
      if (props.small) {
        return props.open ? "20px" : "15px";
      }

      return props.open ? "15px" : "8px";
    }};
    right: ${(props) => (props.small ? "20px" : "25px")};
    border: ${(props) => `solid ${props.theme["gray-300"]}`};
    padding: ${(props) => (props.small ? "5px" : "5px")};
    display: inline-block;
    position: absolute;
    border-width: 0 3px 3px 0;
    transform: rotate(${(props) => (props.open ? "225deg" : "45deg")});
    -webkit-transform: rotate(${(props) => (props.open ? "225deg" : "45deg")});

    transition: 0.5s;
  }
`;
