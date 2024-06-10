import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 60px 24px;
`;

function Header() {
    return(
        <StyledHeader>
            <img src="imagenes/logo.png" alt="Space App logo" />
        </StyledHeader>
    )
}

export default Header;