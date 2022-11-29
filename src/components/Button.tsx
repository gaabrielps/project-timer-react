import { ButtonColors, ButtonContainer } from './Button.styles'

interface ButtonProps {
  colorsOne?: ButtonColors
}
// caso nao tenha nehuma escolha de cor, usamos a primaria
export function Button({ colorsOne = 'primary' }: ButtonProps) {
  return <ButtonContainer colors={colorsOne}>Enviar</ButtonContainer>
}
