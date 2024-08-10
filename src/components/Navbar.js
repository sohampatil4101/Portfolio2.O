import React from 'react'
import Styled, { styled } from "styled-components"
import {Link as LinkR} from "react-router-dom"

const NavbarContainer = Styled.div`
  background-color: ${({theme}) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top:0;
  z-index:10;
  color: white
`
const NavLogo = Styled(LinkR)`
  padding:0px 6px;
  text-decoration: none;
`

const NavItems = Styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0px 6px;
  list-style: none;
`
const NavLink = styled.a`
  color: ${({theme}) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transistion: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover{
    color: ${({theme}) => theme.primary};
  }
`

const ButtonContainer = styled.div``
const GithubButton = styled.div``




export const Navbar = () => {
  return ( 
    <NavbarContainer>
        <NavLogo to="/">soham</NavLogo>

        <NavItems>
          <NavLink href="#about">about</NavLink>
          <NavLink href="#skills">skills</NavLink>
          <NavLink href="#expirence">expirence</NavLink>
          <NavLink href="#projects">projects</NavLink>
          <NavLink href="#education">education</NavLink>
        </NavItems>

        <ButtonContainer>
          <GithubButton>

          </GithubButton>
        </ButtonContainer>

    </NavbarContainer>
  )
}
