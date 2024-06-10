import styled from "styled-components";
import InputField from "../InputField";

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 60px;
    img{
        width: 212px;
    }
`;

function Header() {
    return(
        <StyledHeader>
            <img src="imagenes/logo.png" alt="Space App logo" />
            <InputField />
        </StyledHeader>
    )
}

export default Header;