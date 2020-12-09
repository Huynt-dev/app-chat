import React from 'react'
import {Menu} from "../components"
import {Wrapper} from "./style"

const MainLayout = ({ children }) => {
    return (
        <Wrapper fluid={true}>
            <Menu />

            <div>{children}</div>
        </Wrapper>
    )
}

export default MainLayout