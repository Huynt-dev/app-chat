import styled, {css} from "styled-components";
import { ListGroupItem } from 'reactstrap';

export const Huydeptrai = styled.input`
width:100%;
padding:10px;
box-sizing:border-box;
border:none;
outline:none;
background-color:${({theme})=>theme.colors.default};
color:white;
`;

export const Scroll = styled.div`
    margin-top:10px;
    height: calc(100vh - 130px );
    overflow: auto;

    /* width */
    ::-webkit-scrollbar {
    width: 6px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background-color:${({theme})=>theme.colors.default};
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: #888;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: #555;
    }
`;

export const LGItem = styled(ListGroupItem)`
 word-break: break-all;
 color:white;
 background-color:${({theme})=>theme.colors.default};
 ${
    ({active})=>active && css`
    &&{
        background-color:${({theme})=>theme.colors.nav};
        border:none;
    }
    ${SubTitle}{color:white} `
 };

`;

export const Title = styled.p`
    margin:0
`;

export const SubTitle = styled.span`
    color: rgb(122, 134, 154);
    font-size:13px;
`;