import React, {Fragment} from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components'
import { text, boolean } from '@storybook/addon-knobs';
import classicTheme from '../../themes/classicTheme';
import { Input, Label } from '..';

storiesOf('Input', module)
    .add('Outlined', () => (
        <ThemeProvider theme={classicTheme}>
            <Fragment>
                <Input
                    id="input-text"
                    autocomplete="off"
                    autocorrect="off"
                    spellcheck={false}
                    disabled={boolean('Disabled', false)} 
                    value={text('Value', '')} 
                    type="text"
                    required={false} 
                />
                <Label htmlFor="input-text" disabled={boolean('Disabled', false)} required={false}>Label</Label>
        </Fragment>
        </ThemeProvider>
    ))