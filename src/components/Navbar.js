import React from 'react'
import Styled, { styled, useTheme } from "styled-components"
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
    const MobileMenu = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 16px;
    padding: 0px 6px;
    list-style: none;
    padding: 12px 40px 24px 40px;
    background: ${({theme}) => theme.card_light + 99};
    position: absolute;
    top:80px;
    right:0;
    
    
    transistion: all 0.6 ease-in-out;
    tramsform: ${({isopen}) =>isopen?   "translateY(0)":"translateY(-100)"};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
    opacity: ${({ isopen }) => isopen? "100%" : "0"};
    z-index: ${({ isopen }) => isopen? "1000" : "-1000"};




    
`

export const Navbar = () => {

  const [isopen, setIsOpen] = useState(false)
  const theme = useTheme()

  return (
    <Nav>
      <NavbarContainer>
          <NavLogo to="/">soham</NavLogo>
          <MobileIcon onClick={() => setIsOpen(!isopen)}>
            <MenuRounded style={{color: 'inherit'}}/>
          </MobileIcon>

          <NavItems>
            <NavLink onClick={() => setIsOpen(!isopen)} href="#about">about</NavLink>
            <NavLink onClick={() => setIsOpen(!isopen)} href="#skills">skills</NavLink>
            <NavLink onClick={() => setIsOpen(!isopen)} href="#expirence">expirence</NavLink>
            <NavLink onClick={() => setIsOpen(!isopen)} href="#projects">projects</NavLink>
            <NavLink onClick={() => setIsOpen(!isopen)} href="#education">education</NavLink>
          </NavItems>

          {
            isopen && 
            <MobileMenu isopen = {isopen} >

            <NavLink onClick={() => setIsOpen(!isopen)} href="#about">about</NavLink>
            <NavLink onClick={() => setIsOpen(!isopen)} href="#skills">skills</NavLink>
            <NavLink onClick={() => setIsOpen(!isopen)} href="#expirence">expirence</NavLink>
            <NavLink onClick={() => setIsOpen(!isopen)} href="#projects">projects</NavLink>
            <NavLink onClick={() => setIsOpen(!isopen)} href="#education">education</NavLink> 
            <GithubButton href={Bio.github} target="_blank" style={{
              background:theme.primary,
              color: theme.text_primary
            }}>
              Github Profile
            </GithubButton>
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
