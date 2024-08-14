import React from 'react'
import Styled, { styled } from "styled-components"
import {Link as LinkR} from "react-router-dom"
import {Bio} from "../React 3D Portfolio/data/constants"
import {MenuRounded} from '@mui/icons-material'
import { useState } from 'react'

const Nav = Styled.div`
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
const NavbarContainer = Styled.div`
  width: 100%;
  background-color: ${({theme}) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  max-width: 1200px;
  padding: 0px 24px;
  justify-content: space-between
`
const NavLogo = Styled(LinkR)`
  font-weight:500;
  font-size: 18px;
  width: 80%;
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

const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0px 6px;
  @media screen and (max-width: 768px){
    display: none;

  }
`
const GithubButton = styled.div`
  border: 1px solid ${({theme}) => theme.primary};
  color: ${({theme}) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.6s ease-in-out;
  text-decoration: none;
  &:hover{
    background: ${({theme}) => theme.primary};
    color: ${({theme}) => theme.text_primary};
    }
    
    `
    
    const MobileIcon = styled.div`
    height:100%;
    display: flex;
    align-item: center;
    color: ${({theme}) => theme.text_primary};
    display:none;
    @media screen and (max-width: 768px){
      display: block;
    }
    
`

  const MobileMenu = Styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
    padding: 0px 6px;
    list-style: none;
  `

export const Navbar = () => {

  const [isopen, setIsOpen] = useState(false)

  return (
    <Nav>
      <NavbarContainer>
          <NavLogo to="/">soham</NavLogo>
          <MobileIcon onClick={() => setIsOpen(!isopen)}>
            <MenuRounded style={{color: 'inherit'}}/>
          </MobileIcon>

          <NavItems>
            <NavLink href="#about">about</NavLink>
            <NavLink href="#skills">skills</NavLink>
            <NavLink href="#expirence">expirence</NavLink>
            <NavLink href="#projects">projects</NavLink>
            <NavLink href="#education">education</NavLink>
          </NavItems>

          {
            isopen && <MobileMenu>
              <NavLink href="#about">about</NavLink>

            </MobileMenu>
          }

          <ButtonContainer>
            <GithubButton href={Bio.github} target="_blank">
              Github Profile
            </GithubButton>
          </ButtonContainer>

      </NavbarContainer>
    </Nav>
  )
}
