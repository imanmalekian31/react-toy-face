# react-toy-face

<p align="center">
<img width="648" src="https://user-images.githubusercontent.com/58827166/186583769-bdcd2077-b666-4b29-a01a-1c624d6d4fad.png">
</p>

## Demo

[Demo](https://vue-toy-face.vercel.app/)

## Installation

```shell
# npm
$ npm install react-toy-face
# yarn
$ yarn add react-toy-face
```

## Usage

```js
import React from "react";
import ReactToyFace from "react-toy-face";

function App() {
  return (
    <div>
      <ReactToyFace size={140} rounded={28} toy-number={3} />
    </div>
  );
}
```

## Constructor Options

| Key         | Type           | Description                                 | Default |
| :---------- | -------------- | ------------------------------------------- | :-----: |
| `size`      | String, Number | Width and height of avatar (per pixel)      |  `48`   |
| `rounded`   | String, Number | Border radius of avatar (per pixel)         |   `0`   |
| `toyNumber` | String, Number | The Number of each avatar (between 1 to 18) |   `1`   |
| `group`     | String, Number | Avatars are defined in each group ( 1 or 2) |   `1`   |

# License

[The MIT License](http://opensource.org/licenses/MIT)
