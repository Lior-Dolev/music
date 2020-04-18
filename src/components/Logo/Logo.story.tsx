import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Logo from './index'

storiesOf("Logo", module)
  .add("Logo", () => (
    <div>
      <Logo />
    </div>
  ))