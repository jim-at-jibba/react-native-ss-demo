const theme = {
  colors: {
    black: "#000e1a",
    white: "#fff",
    blue: "#007ce0",
    navy: "#004175",
    lightGrey: "lightgrey",
    primary: "red",
    secondary: "green",
  },
  //space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  space: {
    small: 4,
    medium: 8,
    large: 16,
  },
  fontSizes: [4, 8, 12, 18, 24, 36, 70],
  // Text variant in theme
  text: {
    large: {
      color: "red",
      fontSize: 6,
    },
  },
}

export type ThemeInterface = typeof theme
export {theme}
