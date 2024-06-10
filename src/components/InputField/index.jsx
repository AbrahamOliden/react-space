import styled from "styled-components";
import search from './assets/search.png';

const StyledInput = styled.input`
    padding: 18px 16px;
    border-radius: 10px;
    border: 2px solid #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 50%;
    position: relative;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 20px;
`;

const StyledIcon = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 2.2rem;
    height: 2.2rem;
`;

function InputField() {
    return (
        <StyledInput placeholder="What are you looking for?" >
            <StyledIcon src={search} alt='magnifying glass' />
        </StyledInput>
    );
};

export default InputField;