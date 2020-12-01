// https://github.com/styled-system/styled-system/issues/986
import {
  space,
  color,
  flexbox,
  SpaceProps,
  ColorProps,
  BackgroundColorProps,
  FlexboxProps,
  LayoutProps,
  layout,
} from "styled-system"

import styled from "./styled-components"

type BoxProps = SpaceProps &
  ColorProps &
  BackgroundColorProps &
  FlexboxProps &
  LayoutProps

const Box = styled.View<BoxProps>`
  ${space}
  ${color}
  ${flexbox}
  ${layout}
`

// const Box = styled.View<BoxProps>(
// {
//   boxSizing: 'border-box',
// },
//  space,
//  color,
//  flexbox,
// )

export default Box
