import styled from 'styled-components';


export type ButtonColors = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonColorsProps {
    colors: ButtonColors
}

const colors = {
    primary: 'purple',
    secondary: 'black',
    danger: 'white',
    success: ' green'
}

export const ButtonContainer = styled.button<ButtonColorsProps>`


color: ${props => props.theme['gray-900']

};

`
/* ${props =>{
    return `background-color: ${colors[props.colors]}`
}}*/