# React Toggle

React Toggle is an Apple styled checkbox toggle component for React.

## Usage

```jsx
import { Toggle } from "react-toggle";
import React from "react";

function MyComponent() {
  const [isModeEnabled, setIsModeEnabled] = React.useState(false);
  return (
    <>
      <h3 id="toggle-label">Dark Mode</h3>
      <p id="toggle-description">Best for nighttime viewing</p>

      <Toggle
        ariaLabelledby="toggle-label"
        ariaDescribedby="toggle-description"
        id="mode-toggle"
        label="Dark Mode Toggle"
        on={isModeEnabled}
        onChange={setIsModeEnabled}
      />
    </>
  );
}
```

## Props

The Toggle component accepts the following props:

- `ariaDescribedby` (optional): The ID of an element that describes the toggle. This improves accessibility by associating the toggle with a more detailed description.
- `ariaLabelledby` (optional): The ID of an element that labels the toggle. This improves accessibility by associating the toggle with its text label.
- `id` (optional): A unique identifier for the toggle. This is useful for form accessibility and targeting the element with CSS.
- `label` (optional): A text label for the toggle. This defaults to "toggle" if not provided.
- `on` (optional): Controls whether the toggle is on (true) or off (false). Defaults to false if not provided.
- `onChange` (optional): A callback function that is triggered when the toggle state changes. It receives the new state (boolean) as an argument.

## Poke Around

Find the component in `src/Toggle`.
<br>
Find the example from the above video in `src/Example`.

## Setup Locally

Install:

```bash
npm install
```

To run example locally with Vite:

```bash
npm run dev
```

Note that the project example was built using Vite. If you want to view the example, and Vite provides prompts, select `React` then `TypeScript`.
