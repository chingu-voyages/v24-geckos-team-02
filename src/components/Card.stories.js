// YourComponent.stories.js

import React from "react";
import { Card } from "./Card";

// This default export determines where your story goes in the story list
export default {
  title: "Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /* the args you need here will depend on your component */

  title: "Numerical Recipes",
  subtitle: "Example Book C",
  authors: [
    "William T.. Vetterling",
    "William T. Vetterling",
    "William H. Press",
    "William H Press",
    "Saul A. Teukolsky",
    "Brian P. Flannery",
    "Brian P.. Flannery",
  ],
  publisher: "Cambridge University Press",
  thumbnailImageLink:
    "http://books.google.com/books/content?id=4t-sybVuoqoC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
};
