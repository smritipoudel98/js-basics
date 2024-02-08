# Read More/Show Less Button

A versatile React component for seamlessly implementing "Read More/Show Less" functionality with customizable styles.

[![NPM Version](https://img.shields.io/npm/v/readmore-showless)](https://www.npmjs.com/package/readmore-showless)
[![npm bundle size](https://img.shields.io/bundlephobia/min/readmore-showless)](https://www.npmjs.com/package/readmore-showless)
[![NPM License](https://img.shields.io/npm/l/readmore-showless)](https://www.npmjs.com/package/readmore-showless)

![Read More/Show Less Button](https://scontent.fccu13-1.fna.fbcdn.net/v/t39.30808-6/422806020_122126005214118895_1369403653534523990_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_ohc=nk5JnrbfAnEAX9sRkfN&_nc_ht=scontent.fccu13-1.fna&oh=00_AfC94jzqGBmcatzPgbxDaI-XsTOvHqsQjHEKdzrLxyAw2w&oe=65B72052)

## Why Use `readmore-showless`?

The `readmore-showless` package provides a convenient and customizable solution for implementing "Read More/Show Less" functionality in your React applications. Here are some reasons why you should consider using this package:

### 1. **Easy Integration:**
   - Seamlessly integrate the "Read More/Show Less" button into your React components with just a few lines of code.

### 2. **Customizable Styles:**
   - Customize the appearance of the button to match your application's design by providing a JavaScript object with CSS properties.

### 3. **Efficient Text Handling:**
   - Efficiently handle long blocks of text by displaying a specified number of lines initially and allowing users to reveal more content at their convenience.

### 4. **User-Friendly Experience:**
   - Enhance the user experience by providing a clear and interactive way to manage lengthy text content, improving readability and user engagement.

### 5. **Versatile Use Cases:**
   - Use the `readmore-showless` component in various scenarios, such as user profiles, article previews, or any other content-heavy sections where a "Read More" feature is beneficial.

## Installation

Install the `readmore-showless` package using npm:

```bash
npm install readmore-showless

```
## Usage

```js
import React from "react";
import ReadMoreButton from "readmore-showless";

const MyComponent: React.FC = () => {
  const bioText = `...`; // Provide your text here

  const buttonStyles = {
    color: "blue",  // Customize the button color
    // Add any other CSS styles as needed
  };

  return (
    <div>
      <ReadMoreButton text={bioText} linesToShow={5} styles={buttonStyles} />
    </div>
  );
};

export default MyComponent;
```
## Props

- `text` (string, required): The text to display.

- `linesToShow (number, optional, default: 5): The number of lines to show initially before the "Read More" link.

- `styles (object, optional): Custom styles for the button. You can pass a JavaScript object with CSS properties.


## Example

```js
import React from "react";
import ReadMoreButton from "readmore-showless";

const bioText = `...`;

const buttonStyles = {
  color: "green",
  fontSize: "16px",
  // Add any other CSS styles as needed
};

const UserProfile: React.FC = () => {
  return (
    <div>
      <ReadMoreButton text={bioText} linesToShow={5} styles={buttonStyles} />
    </div>
  );
};

export default UserProfile;
```
## Donate

If you find this project helpful and would like to support further development, consider [buying me a coffee](https://www.buymeacoffee.com/rtpbyakash).

Your support is greatly appreciated! ☕

## License

This project is licensed under the MIT License - see the LICENSE file for details.