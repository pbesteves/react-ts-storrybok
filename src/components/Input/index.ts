import styled from 'styled-components';

export interface InputProps {
    autocomplete: string;
    autocorrect: string;
    spellcheck: boolean;
    disabled: boolean;
    required: boolean;
    type: string;
    value: string;
    onBlur?: (e: any) => void;
    onChange?: (e: any) => void;
    onFocus?: (e: any) => void;
    onKeyUp?: (e: any) => void;
}

const Input = styled.input<InputProps>`
    background: white;
    color: gray;
    padding: ${props => props.theme.inputPadding};
    border: 2px solid gray;
    border-radius: ${props => props.theme.borderRadius};
    outline: ${props => props.theme.colors.main};
    font-size: 1em;
    transform-origin: left top;
    transition: 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1);
    &:focus {
        border: ${props => `2px solid ${props.theme.colors.main}`};
    }
    &:focus ~ label {
        left: 20px;
        top: 0%;
        font-size: 0.759em;
        width: 4%;
        text-align: center;
        color: ${props => props.theme.colors.main};
    }
`;

Input.defaultProps = {
    autocomplete: 'off',
    autocorrect: 'off',
    spellcheck: false,
    children: null,
    onBlur: () => {},
    onChange: () => {},
    onFocus: () => {},
    onKeyUp: () => {},
}

export default Input;