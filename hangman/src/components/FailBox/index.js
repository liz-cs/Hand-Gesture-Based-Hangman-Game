import React from 'react'
import { Wrapper, List, ListItem, Title } from './styled'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ failedLetters }) => (
  <Wrapper>
    <Title>You missed:</Title>
    <List>
      {failedLetters.map(item => (
        <ListItem key={item}>{item}</ListItem>
      ))}
    </List>
  </Wrapper>
)


