import { addDecorator, addParameters, configure } from '@storybook/react';
import requireContext from 'require-context.macro';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { withThemes } from 'storybook-styled-components';

import classicTheme from '../src/themes/classicTheme';

const themes = {
  'Classic Theme': classicTheme
};

addDecorator(withA11y);
addDecorator(withKnobs);
addDecorator(withThemes(themes));
const req = requireContext('../src/components', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(req);
}
configure(loadStories, module);