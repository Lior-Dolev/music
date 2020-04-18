
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Header from "./index";

storiesOf("Header", module)
  .add("Basic", () => (
    <Header style={{backgroundColor: 'grey'}} />
  ))