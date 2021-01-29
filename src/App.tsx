/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Styled from 'styled-components'
import {StatusBar} from 'react-native'
import Navigator from '~/Screens/Navigator'
import {UserContextProvider} from '~/Context/User'
import {RandomUserDataProvider} from '~/Context/RandomUserData'
interface Props {

}

const App = ({ }: Props) => {
  return (
    <>
    <RandomUserDataProvider cache={true}>
      <UserContextProvider>
        <StatusBar />
        <Navigator />
      </UserContextProvider>
    </RandomUserDataProvider>
    </>
  );
};


export default App;
