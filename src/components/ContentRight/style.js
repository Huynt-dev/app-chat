import styled, { css } from "styled-components";
import { Col } from 'reactstrap';

export const Khoixauxi = styled(Col)`
&&{
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    background-color: ${({theme})=>theme.colors.default};
    padding:10px0;
    box-sizing:border-box;
    margin-right:15px;
}
`;

export const Wrapper = styled.div`
    height: calc(100vh - (66px + 76px) );
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
`

export const Chat = styled.div`
    background-color: rgb(3, 139, 225);
    color: rgb(255, 255, 255);
    padding: 10px 15px;
    border-radius: 8px;
    margin-bottom: 15px;
    max-width: 450px;
    min-width: 320px;
    position: relative;
    word-break: break-word;
    box-sizing:border-box;
`;

export const Box = styled.div`
    display:flex;
    justify-content:flex-end;
    padding:0 10px;
    box-sizing:border-box;
    width:100%;

    ${({friend})=> friend && css`
        justify-content: flex-start;

        ${Chat}{
            background-color: rgb(98, 113, 130);
        }
    `}
`;

export const InputChat = styled.input`
    border-radius:10px;
    border:${({theme})=>theme.colors.bdefault};
    background-color:${({theme})=>theme.colors.default};
    outline:none;
    padding: 10px;
    margin: 0 10px;
    box-sizing:border-box;
    color:white;
`


export const Text = styled.p`
    margin:0
`;

export const Time = styled.p`
    float:right;
    margin:0;
    font-family: sans-serif;
    font-size: 13px;
    font-weight: normal;
    color: rgb(255, 255, 255);
`;