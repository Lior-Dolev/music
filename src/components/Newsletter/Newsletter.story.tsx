
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Newsletter from "./index";

storiesOf("Newsletter", module)
  .add("Large", () => (
    <div style={{height: '100px'}}>
      <Newsletter />
    </div>
  ))
  .add("small", () => (
    <div style={{height: '50px', width: '400px'}}>
      <Newsletter />
    </div>
  ))