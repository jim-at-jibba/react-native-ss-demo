import {StatusBar} from "expo-status-bar"
import React from "react"

import {ThemeProvider} from "./styled-components"
import {theme} from "./theme"
import Box from "./Box"
import Text from "./Text"

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <Box
        alignItems="center"
        justifyContent="center"
        flex={1}
        m="medium"
        bg="lightGrey">
        <StatusBar style="auto" />
        <Box>
          <Text fontSize={8}>A potato</Text>
          <Text variant="large">A potato</Text>
          <Text variant="small">A carrot</Text>
        </Box>
        <Box width={0.5} bg="blue" p="small">
          <Text>half</Text>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
