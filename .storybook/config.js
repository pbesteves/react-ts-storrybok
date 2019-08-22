import { addDecorator, configure } from '@storybook/react';
import requireContext from 'require-context.macro';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';

addDecorator(withA11y);
addDecorator(withKnobs);
const req = requireContext('../src/components', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(req);
}
configure(loadStories, module);