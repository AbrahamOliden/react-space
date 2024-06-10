import styled from "styled-components";
import banner from '../../assets/banner.png';

const StyledContainer = styled.div`
    display: inline-block;
    position: relative;
    background-image: ${props.$image};
`;

const StyledText = styled.h2`
    font-size: 2.5rem;
    color: #FFF;
    background: transparent;
    position: absolute;
    left: 0;
    top: 10px;
    text-align: left;
`;

function Banner() {};
    <StyledContainer $image={banner} >
        <StyledText>The most complete space gallery</StyledText>
    </StyledContainer>
export default Banner;