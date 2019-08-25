import styled from 'styled-components';

export interface LabelProps {
    children: React.ReactNode;
    disabled: boolean;
    required: boolean;
    htmlFor: string;
}

const Label = styled.label<LabelProps>`
    left: 24px;
    right: initial;
    top: 27px;
    pointer-events: none;
    color: gray;
    font-weight: 700;
    font-size: 1em;
    letter-spacing: .009375em;
    position: absolute;
    transform-origin: left top;
    transition: 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1);
    line-height: 1.15rem;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: text;
    overflow: hidden;
    will-change: transform;
    background: white;
`;

Label.defaultProps = {
  children: null,
};

export default Label;
