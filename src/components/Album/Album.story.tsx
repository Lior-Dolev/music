
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import StoryRouter from 'storybook-react-router';
import Cover from './cover.jpg'
import Album from "./index";

const songs = [
  { name: 'משכך כאבים', onLyricsClick: () => {}, onVideoClick: () => {} },
  { name: 'כשתחזרי', onLyricsClick: () => {} },
  { name: 'גור אדם', onLyricsClick: () => {} },
  { name: 'הלב המשומש', onLyricsClick: () => {} }
]

storiesOf("Album", module)
  .addDecorator(StoryRouter())
  .add("Default", () => (
    <Album
      name={'משכך כאבים'}
      frontCover={Cover}
      songs={songs}
    />
  ))