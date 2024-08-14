import React from 'react'
import styled from 'styled-components'
import { Bio } from '../../React 3D Portfolio/data/constants'
import Typewriter from "typewriter-effect"

const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    padding: 80px 30px;
    z-index: 1;
    
    @media (max-width: 960px){
        padding: 66px 16px;
    }
    @media (max-width: 640px){
        padding: 32px 16px;
    }
    @media (max-width: 960px){
        padding: 32px 16px;
    }
    
    clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);

`
const HeroInnerContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1100px;

    @media (max-width: 960px){
        flex-direction: column;
    }
`
const HeroLeftContainer = styled.div`
    width: 100%;
    order: 1;
   @media (max-width: 960px){
        order: 2;
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        align-items: center
    }
`
const HeroRightContainer = styled.div`
    width: 100%;
    order: 2;
    
   @media (max-width: 960px){
        order: 1;
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 80px;
    }
   @media (max-width: 640px){
        margin-bottom: 30px;
    }

`

const Title = styled.div`
    font-weight: 700;
    font-size: 50px;
    color: ${({theme}) => theme.text_primary};
    line-height: 68px;
    @media (max-width: 960px){
        text-align: center;
        }
        
        @media (max-width: 640px){
        font-size: 40px;
        line-height: 48px;
        margin-bottom: 8px;
        }
        `


const Textloop = styled.div`
    font-weight: 600;
    font-size: 32px;
    display: flex;
    gap: 12px;

    color: ${({theme}) => theme.text_primary};
    line-height: 68px;
    @media (max-width: 960px){
        text-align: center;
        }
        
        @media (max-width: 640px){
        font-size: 22px;
        line-height: 48px;
        margin-bottom: 16px;
        }
        `


const Span = styled.div`
    cursor: pointer;
    color: ${({theme}) => theme.text_primary};


`

export default function Hero() {
    return (
        <div id = "about">
        <HeroContainer>
            <HeroInnerContainer>
                <HeroLeftContainer>
                    <Title>
                        Hi i'm <br/> {Bio.name} 
                    </Title>
                    <Textloop>
                        I am a 
                        <Span>
                            <Typewriter/>
                        </Span>
                    </Textloop>
                </HeroLeftContainer>
                <HeroRightContainer>
                    Right
                </HeroRightContainer>
            </HeroInnerContainer>
        </HeroContainer>
    </div>
  )
}
