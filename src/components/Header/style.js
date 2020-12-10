import styled from "styled-components";
import { Navbar, NavLink, NavbarBrand} from 'reactstrap';

export const Menubar = styled(Navbar)`
&&{
    margin-bottom:10px;
    background-color:${({theme})=>theme.colors.nav};
    border-radius:10px;
    color:white;
}`;


export const Menulogo = styled(NavbarBrand)`
    color:white;
    &:hover {
        color:red
    }
`;

export const Menutext = styled(NavLink)`
    color:white;
    &:hover {
        color:red
    }
`;
