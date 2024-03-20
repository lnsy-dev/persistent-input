
# Persistent Input Component

The `PersistentInput` component is a custom web component designed to simplify the creation of input fields with persistent values. Values entered in these inputs are saved into `localStorage`, ensuring that the input data is retained across page reloads. This component automatically propagates attributes set on the custom element itself down to the inner input element, making customization straightforward.

## Features
- **Value Persistence**: Automatically saves and retrieves input values using `localStorage`, based on a unique ID.
- **Automatic Attribute Propagation**: Inherits attributes from the custom element and applies them to the inner `<input>` element, facilitating easy customization.

## Getting Started

To use the `PersistentInput` component in your project, include the JavaScript code provided in your project. The custom element definition (`customElements.define('persistent-input', PersistentInput);`) at the end of the script makes the custom element available in your HTML.

### 1. Include the Script
Make sure the script is included in your HTML file. It could be directly placed within a `<script>` tag or loaded as an external JS file.

### 2. Use the Custom Element
After including the script, you can start using the `persistent-input` custom element anywhere in your HTML.

```html
<script type="module" src="https://lnsy-dev.github.io/persistent-input/persistent-input.js"></script>
<persistent-input id="uniqueId" type="text" placeholder="Enter Value"></persistent-input>
```

Or, if you want a text area: 

```html
<script type="module" src="https://lnsy-dev.github.io/persistent-input/persistent-textarea.js"></script>
<persistent-textarea id="uniqueId2"></persistent-textarea>
```

**Important**: The `id` attribute is required to uniquely identify each instance of `PersistentInput` and `PersistentTextarea` for `localStorage`. Ensure that each `persistent-input` and `persistent-textarea` has a unique `id`.

### 3. Customize the Input

You can add any standard `<input>` attribute to the `persistent-input` element, and it will be automatically applied to the inner input element. However, the script excludes the `id` attribute from being copied to prevent duplications.

Example with more attributes:

```html
<persistent-input id="user-email" type="email" placeholder="Enter your email" required></persistent-input>
```

## Attributes

- `id` (required): A unique identifier for each input. This is used as the key in `localStorage`.
- Any standard `<input>` attributes (e.g., `type`, `placeholder`, `required`, etc.) are supported and will be automatically applied to the inner `<input>` element.

## Browser Compatibility

This component uses modern JavaScript features and Web Components. Ensure your target browsers support these ([Can I use... Web Components](https://caniuse.com/?search=Web%20Components), [Custom Elements](https://caniuse.com/?search=Custom%20Elements)).

## Github

This project is on github: https://github.com/lnsy-dev/persistent-input

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any bugs or additional features you think would make this component more versatile.

