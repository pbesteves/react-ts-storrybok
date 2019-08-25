import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import classicTheme from '../../themes/classicTheme';
import { Button } from '..';

storiesOf('Button', module)
  .add('Dense', () => (
    <ThemeProvider theme={classicTheme}>
      <Button onClick={action('onClick')} disabled={boolean('Disabled', false)}>{text('Label', 'Hello')}</Button>
    </ThemeProvider>
  ));
