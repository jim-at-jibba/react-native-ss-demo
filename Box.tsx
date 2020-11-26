import styled from "styled-components/native"
import {
  space,
  color,
  flexbox,
  SpaceProps,
  ColorProps,
  BackgroundColorProps,
  FlexboxProps,
} from "styled-system"

type BoxProps = SpaceProps & ColorProps & BackgroundColorProps & FlexboxProps

const Box = styled.View<BoxProps>`
  ${space}
  ${color}
  ${flexbox}
`

export default Box
