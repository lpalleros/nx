import React from 'react';

import { Header } from '../components/Header/Header';

export default {
  title: 'Basics/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <Header {...args} />;

export const Navbar = Template.bind({});
// Navbar.args = {};

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {};
