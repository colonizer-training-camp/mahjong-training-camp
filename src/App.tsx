import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import msg from '/msg.jpg'
import './App.css'
import styled from '@emotion/styled'

const ColorButton = styled.button`
  background-color: transparent;
  color: #000000;
  border-radius: 0;
`
const Rhombus = styled.div`
  width: 360px;
  height: 360px;
  background-color: red;
  transform: rotate(45deg);
`
const RhombusContainer = styled.div`
  transform: scaleY(0.5);
`
const ButtonContainer = styled.div`
  height:100%;
  transform: rotate(-45deg) scaleY(8) scaleX(2);
  display: flex;
  align-items: center;
  justify-content: center;
`

function App() {
  const [count, setCount] = useState("즐겁다")

  return (
    <>
      <RhombusContainer>
        <Rhombus>
          <ButtonContainer>
            <ColorButton onClick={() => setCount((count) => count + "즐겁다")}>
              {count}
            </ColorButton>
          </ButtonContainer>
        </Rhombus>
      </RhombusContainer>
    </>
  )
}

export default App
