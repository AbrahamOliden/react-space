import styled from "styled-components";

function NavItem({children, activeIcon, innactiveIcon, active=false}) {
    return <>
    <img src={active ? activeIcon : innactiveIcon} alt="Icon" />
    {children}
    </>
};

export default NavItem;