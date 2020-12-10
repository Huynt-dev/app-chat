import styled from "styled-components";
import { Container } from 'reactstrap';
import { Form } from 'reactstrap';

export const Wrapper = styled(Container)`
    width:400px;

`

export const FormStyled = styled(Form)`
    background-color:#dddd;
    padding:20px 15px;
    box-sizing:border-box;
    border-radius:10px;
`

export const Register = styled.div`
    display:flex;
    justify-content:space-between;
    margin-bottom:10px;
`