import React from 'react'
import { Item, Wrapper } from './styled'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ spaces, correctLetters, wordFromAPI }) => (
  <Wrapper>
    {spaces.map((item, index) => (
      <Item disabled key={`space-${index}`} />
    ))}
    {wordFromAPI.map((letter, index) => {
      return (
        <Item key={index}>
          {correctLetters.find(x => x === letter) ? letter : ''}
        </Item>
      )
    })}
  </Wrapper>
)
