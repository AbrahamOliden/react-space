import styled from "styled-components";

const StyledFooter = styled.footer`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    padding: 24px 30px;
    background-color: #04244F;
    h5 {
        color: #FFF;
        font-size: 1rem;
        font-weight: 500;
        line-height: 20px;
    }
`;

function Footer() {
    return <>
    <StyledFooter>
        <div></div>
        <h5>Developed by Abraham Oliden</h5>
    </StyledFooter>    
    </>
};

export default Footer;