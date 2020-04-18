
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import VideoClip from "./index";

storiesOf("Video Clip", module)
  .add("Default", () => (
    <VideoClip src={'https://www.youtube.com/embed/bpOSxM0rNPM'} />
  ))