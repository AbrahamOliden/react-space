import styled from "styled-components";

const StyledContainer = styled.figure`
    display: flex;
    background-image: url(${props => props.$image});
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 328px;
    max-width: 100%;
    align-items: center;
    border-radius: 20px;
`;

const StyledText = styled.h2`
    max-width: 300px;
    font-size: 2.5rem;
    font-weight: 400;
    line-height: 2rem;
    color: #FFF;
    padding: 0 64px;
`;

function Banner({ text, backgroundImage }) {
    return (
    <StyledContainer $image={backgroundImage}>
        <StyledText>{ text }</StyledText>
    </StyledContainer>
    )
};

export default Banner;