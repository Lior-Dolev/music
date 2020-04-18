import { storiesOf } from '@storybook/react';
import * as React from 'react';
import TextConverter from "./index";
import { Meshakech_Keevim } from '../../../static/Albums'

storiesOf("TextConverter", module)
  .add("משכך כאבים", () => (
    <TextConverter text={Meshakech_Keevim.Tracks[0].Lyrics} />
  ))
  .add("כשתחזרי", () => (
    <TextConverter text={Meshakech_Keevim.Tracks[1].Lyrics} />
  ))
  .add("גור אדם", () => (
    <TextConverter text={Meshakech_Keevim.Tracks[2].Lyrics} />
  ))
  .add("הלב המשומש", () => (
    <TextConverter text={Meshakech_Keevim.Tracks[3].Lyrics} />
  ))