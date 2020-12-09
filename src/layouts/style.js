import styled from "styled-components"
import {Container} from "reactstrap"

export const Wrapper = styled(Container)`
    background-color: ${({theme})=>theme.colors.bg};
    padding-top:10px;
`