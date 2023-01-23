import styled from "styled-components";
import { device } from "../../config/device";

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-left: 5vh;
    padding-right: 5vh;
    min-height: 10vh;
    background-color: ${props => props.theme["white-ice"]};

    @media ${device.tablet} {
        padding-left: 100px;
        padding-right: 100px;
    }
    @media ${device.laptop} {
        padding-left: 50px;
        padding-right: 50px;
    }
`;

export const CartDisplay = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const CartTotal = styled.span`
    font-size: 12px;
`;

export const CartQty = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 24px;
    width: 24px;
    margin-left: 8px;

    border-radius: 50%; /* may require vendor prefixes */
    background: #9479ff;
    color: white;
    font-size: 12px;
`;