
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Button from "./index";
import * as CSS from 'csstype';

storiesOf("Button", module)
  .add("Default dimensions", () => (
    <Button defaultDimensions={true} />
  ))
  .add("With text", () => (
    <Button defaultDimensions={true} >עם טקסט</Button>
  ))
  .add("Adjustable dimensions", () => (
    <div style={{...largeDimensions, backgroundColor: '#fffeb5'}}>
      <Button>עם טקסט</Button>
    </div>
  ))
  .add("Background fit", () => (
    <div style={{...largeDimensions, backgroundColor: '#fffeb5', ...centerButton}}>
      <Button defaultDimensions={true}>עם טקסט</Button>
    </div>
  ))

const largeDimensions: CSS.Properties = {
  height: '50px',
  width: '250px'
}

const centerButton: CSS.Properties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}