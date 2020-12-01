import styled from "styled-components/native"
import {
  ColorProps,
  BackgroundColorProps,
  FlexboxProps,
  SpaceProps,
  VariantArgs,
} from "styled-system"

type ButtonProps = SpaceProps &
  ColorProps &
  BackgroundColorProps &
  FlexboxProps &
  VariantArgs

const Button = styled.TouchableOpacity<ButtonProps>`
  width: 100%;
  height: 40px;
`

export default Button
