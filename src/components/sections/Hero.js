import React from 'react'
import styled from 'styled-components'

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

`
const HeroRightContainer = styled.div`
    width: 100%;
    order: 2;

`

export default function Hero() {
  return (
    <div id = "about">
        <HeroContainer>
            <HeroInnerContainer>
                <HeroLeftContainer>
                    Left
                </HeroLeftContainer>
                <HeroRightContainer>
                    Right
                </HeroRightContainer>
            </HeroInnerContainer>
        </HeroContainer>
    </div>
  )
}
