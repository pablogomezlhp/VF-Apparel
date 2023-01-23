import styled from "styled-components";
import { device } from "../../config/device";

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    height: auto;
    margin-top: -70px;
    padding-top: 64px;

    @media ${device.tabletL} {
        flex-direction: row;
    }

`;