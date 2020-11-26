import {StatusBar} from "expo-status-bar"
import React from "react"
import {StyleSheet, Text, View} from "react-native"
import {ThemeProvider} from "styled-components/native"

import Box from "./Box"

const theme = {
  colors: {
    black: "#000e1a",
    white: "#fff",
    blue: "#007ce0",
    navy: "#004175",
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
}
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <Box
        m={2}
        bg="blue"
        ml={4}
        alignItems="center"
        justifyContent="center"
        flex={1}>
        <StatusBar style="auto" />
        <Box m={2} bg="blue" ml={4}>
          <Text>Tomato</Text>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
