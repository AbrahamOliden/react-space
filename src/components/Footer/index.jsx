import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFreeCodeCamp, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const StyledFooter = styled.footer`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 24px 30px;
    background-color: #04244F;
    color: #FFF;
    div{
        display: flex;
        flex-flow: row nowrap;
        gap: 30px;
        font-size: 1.5rem;
        a {
            color: inherit;
            cursor: pointer;
        }
    }
    h5 {
        font-size: 1rem;
        font-weight: 500;
        line-height: 20px;
    }
`;

function Footer() {
    return <>
    <StyledFooter>
        <div>
            <a href="https://github.com/AbrahamOliden" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.freecodecamp.org/Abraham_Oliden" target="_blank">
                <FontAwesomeIcon icon={faFreeCodeCamp} />
            </a>
            <a href="https://www.linkedin.com/in/abraham-oliden/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
        </div>
        <h5>Developed by Abraham Oliden</h5>
    </StyledFooter>    
    </>
};

export default Footer;