import styled from "styled-components";

export const LogoContainer = styled.div`
    width: 100px;
    display: flex;
    align-items: center;
    padding: 0px 6px 0px 6px;
    border: ${(props) => `solid 1px ${props.theme.primary}`};
`;

export const BrandName = styled.span`
    font-size: 12px;
    text-transform: uppercase;
`;

export const CoName = styled.span`
    display: flex;
    font-size: 12px;
    padding-left: 3px;
    margin-bottom: 8px;
`;
