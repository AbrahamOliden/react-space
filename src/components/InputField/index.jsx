import styled from "styled-components";
import search from '../.././assets/search.png';

const StyledContainer = styled.div`
    position: relative;
    display: inline-block;
    min-height: fit-content;
`;

const StyledInput = styled.input`
    padding: 18px 16px;
    border-radius: 10px;
    border: 2px solid #C98CF1;
    background: transparent;
    box-sizing: border-box;
    min-width: 500px;
    position: relative;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 20px;
`;

const StyledIcon = styled.img`
    position: absolute;
    top: 12px;
    right: 10px;
    width: 2.2rem!important;
    height: 2.2rem!important;
`;

function InputField() {
    return (
        <StyledContainer>
            <StyledInput type="text" placeholder="What are you looking for?" />
            <StyledIcon src={search} alt='magnifying glass' />
        </StyledContainer>
    );
};

export default InputField;