import styled from "styled-components";
import { Navbar} from 'reactstrap';

export const Menubar = styled(Navbar)`
&&{
    margin-bottom:10px;
    background-color:${({theme})=>theme.colors.nav};
    border-radius:10px;
    color:white;

}`
