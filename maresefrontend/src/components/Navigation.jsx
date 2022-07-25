import { useState } from "react"
import styled from "styled-components"

export const Navigation = ()=> {
    return (
        <>
        <Nav>
            <NavList>
            </NavList>
        </Nav>
        </>
    )
}


// styled component
const Nav = styled.nav`
    width: 80px;
    height: 550px;
    background-color: #FFFFFF;
    border-radius: 10px;
    margin: 10px 0 10px 5px;
    box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.1);
    text-align: center;
`

const NavList = styled.ul`
    display: block;
    position: relative;
    top: 40px;
    list-style: none;
    padding: 0;
    margin: auto;
    li {
        cursor: pointer;
    }
`