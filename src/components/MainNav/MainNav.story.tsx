import { storiesOf } from '@storybook/react';
import * as React from 'react';
import StoryRouter from 'storybook-react-router';
import MainNav from "./index";

storiesOf("MainNav", module)
  .addDecorator(StoryRouter())
  .add("Large", () => (
    <div style={{backgroundColor: 'black', height: '50px', border: '1px solid black'}}>
      <MainNav />
    </div>
  ))