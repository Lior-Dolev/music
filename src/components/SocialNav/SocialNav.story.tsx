import { storiesOf } from '@storybook/react';
import * as React from 'react';
import SocialNav from "./index";

storiesOf("SocialNav", module)
  .add("Large", () => (
    <div style={{height: '50px', width: '300px', border: '1px solid black'}}>
      <SocialNav />
    </div>
  ))