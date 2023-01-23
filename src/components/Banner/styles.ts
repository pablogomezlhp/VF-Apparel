import styled from "styled-components";
import background from '../../assets/banner.jpg'
import { device } from "../../config/device";

export const BannerContainer = styled.img`
    background-image: url(${background});
    background-size: cover;
    width: 100vw;
    max-width: 1400px;
    padding: 10vh;

    @media ${device.laptop} {
        padding: 100px;
    }
`;