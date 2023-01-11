# `detect-url-change`

Easily detect changes in the browser URL. Works with any method that changes the URL without reloading the page, such as `history.pushState()`, `history.replaceState()`, `history.back()`, etc.

## Usage

```js
import detectUrlChange from 'detect-url-change';
detectUrlChange.on('change', (newUrl) => {
  console.log(`URL changed: ${newUrl}`);
});
```

## API

### `detectUrlChange` (default export)

The target object we can observe to detect URL changes.

Type: `URLChangeEvent`.

### `URLChangeEvent`

### Instance methods

### `on(event: 'change', listener: (newUrl: string) => void)`

Call with callback to invoke callback on URL change.

### `off(event: 'change', listener: (newUrl: string) => void)`

Call with event listener (callback) to unregister event listener for the `change` event.
