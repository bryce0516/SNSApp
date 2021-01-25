import React from 'react'
import {ActivityIndicator} from 'react-native'
import Styeld from 'styled-components'

const Container = Styeld.View`
  flex: 1;
  background-color: #FEFFFF;
  align-items: center;
  justify-content: center;
`;

const Loading = () => {
  return (
    <Container>
      <ActivityIndicator color="#D3D3D3" size="large"/>
    </Container>
  )
}

export default Loading