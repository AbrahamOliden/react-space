import styled from "styled-components";

const StyledElement = styled.li`
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    margin-bottom: 30px;
    gap: 1rem;
    color: ${props => props.$active ? '#7B78E5' : '#D9D9D9'};
`;

function NavItem({children, activeIcon, innactiveIcon, active=false}) {
    return <StyledElement $active={active} >
    <img src={active ? activeIcon : innactiveIcon} alt="Icon" />
    {children}
    </StyledElement>
};

export default NavItem;