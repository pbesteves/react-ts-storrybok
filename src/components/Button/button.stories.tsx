import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components'
import { text, boolean } from '@storybook/addon-knobs';
import classicTheme from '../../themes/classicTheme';
import { Button } from '..';

storiesOf('Button', module)
    .add('Enabled', () => (
        <ThemeProvider theme={classicTheme}>
            <Button disabled={boolean('Disabled', false)}>{text('Label', 'Hello')}</Button>
        </ThemeProvider>
    ))
    .add('Disabled', () => (
        <ThemeProvider theme={classicTheme}>
            <Button disabled={true}>Hello</Button>
        </ThemeProvider>
    ))