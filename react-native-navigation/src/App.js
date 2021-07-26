import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
// import StackNavigation from './navigations/Stack'
import TabNavigation from './navigations/Tab'

// import styled from 'styled-components/native'

// const Container = styled.View`
//     flex: 1;
//     background-color: #ffffff;
//     justify-content: center;
//     align-items: center;
// `

const App = () => {
    return(
        <NavigationContainer>
            <TabNavigation />
        </NavigationContainer>
    )
}

export default App