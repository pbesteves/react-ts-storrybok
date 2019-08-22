// import * as React from 'react';
import styled from 'styled-components';

export interface ButtonProps {
    children: React.ReactNode;
    onClick?: (e: any) => void;
    disabled: boolean;
};


const Button = styled.button<ButtonProps>`
    background: ${props => props.disabled ? props.theme.colors.secondary : props.theme.colors.main};
    color: white;
    padding: 9px 18px;
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    border: none;
    font-weight: 700;
    text-transform: uppercase;
    padding-left: ${props => props.theme.buttonPadding};
    padding-right: ${props => props.theme.buttonPadding};
    border-radius: ${props => props.theme.borderRadius};
    `;

Button.defaultProps = {
    children: null,
    onClick: () => {}
}

export default Button;