import styled from "styled-components"
import tw from "twin.macro"

interface Props {
  width?: string
  height?: string
  className?: string
}

export const Logo: React.FC<Props> = ({ width, height, className }) => {
  return <Image src="../../logo-inverted.png" width={width} height={height} />
}

const Image = styled.img`
  ${tw``}
`
