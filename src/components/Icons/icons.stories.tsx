import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import classicTheme from '../../themes/classicTheme';
import { CalendarIcon } from '..';

storiesOf('Icons', module)
  .add('Calendar', () => (
    <ThemeProvider theme={classicTheme}>
      <CalendarIcon
        fill="#000000"
        opacity="1"
        stroke="#000000"
        width="64"
        height="64"
      />
    </ThemeProvider>
  ));
