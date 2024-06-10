import styled from "styled-components";
import NavItem from "./NavItem";

const StyledList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;

function SideBar() {
    return (
        <aside>
            <nav>
                <StyledList>
                    <NavItem activeIcon='iconos/home-activo.png' innactiveIcon='iconos/home-inactivo.png' active >
                        Home
                    </NavItem>
                    <NavItem activeIcon='iconos/mas-vistas-activo.png' innactiveIcon='iconos/mas-vistas-inactivo.png' >
                        Most Viewed
                    </NavItem>
                    <NavItem activeIcon='iconos/me-gusta-activo.png' innactiveIcon='iconos/me-gusta-inactivo.png' >
                        Most Liked
                    </NavItem>
                    <NavItem activeIcon='iconos/nuevas-activo.png' innactiveIcon='iconos/nuevas-inactivo.png' >
                        Recent
                    </NavItem>
                    <NavItem activeIcon='iconos/sorprendeme-activo.png' innactiveIcon='iconos/sorprendeme-inactivo.png' >
                        Surprise Me
                    </NavItem>
                </StyledList>
            </nav>
        </aside>
    );
};

export default SideBar;