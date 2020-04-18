
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Input from "./index";
import * as CSS from 'csstype';

storiesOf("Input", module)
  .add("Default dimensions", () => (
    <Input defaultDimensions={true} />
  ))
  .add("Adjustable dimensions", () => (
    <div style={{...largeDimensions, backgroundColor: '#fffeb5', ...centerElement}}>
      <Input></Input>
    </div>
  ))
  .add("Email", () => (
    <Input defaultDimensions={true} type={'email'} />
  ))

const largeDimensions: CSS.Properties = {
  height: '50px',
  width: '250px'
}

const centerElement: CSS.Properties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}