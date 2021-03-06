![Bower version](https://img.shields.io/bower/v/vaadin-text-field.svg)
[![npm version](https://badge.fury.io/js/%40vaadin%2Fvaadin-text-field.svg)](https://badge.fury.io/js/%40vaadin%2Fvaadin-text-field)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/vaadin/vaadin-text-field)
[![Build Status](https://travis-ci.org/vaadin/vaadin-text-field.svg?branch=master)](https://travis-ci.org/vaadin/vaadin-text-field)
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/vaadin/web-components?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

# &lt;vaadin-text-field&gt;

[Live Demo ↗](https://vaadin.com/components/vaadin-text-field/html-examples)
|
[API documentation ↗](https://vaadin.com/components/vaadin-text-field/html-api)

[&lt;vaadin-text-field&gt;](https://vaadin.com/components/vaadin-text-field) is a themable [Polymer 2](http://polymer-project.org) element providing input controls in forms, part of the [Vaadin components](https://vaadin.com/components).

<!--
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="vaadin-text-field.html">
    <link rel="import" href="vaadin-password-field.html">
    <link rel="import" href="vaadin-text-area.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<vaadin-text-field label="Username"></vaadin-text-field>
<vaadin-password-field label="Password"></vaadin-password-field>
<vaadin-text-area label="Description"></vaadin-text-area>
```

[<img src="https://raw.githubusercontent.com/vaadin/vaadin-text-field/master/screenshot.png" width="710" alt="Screenshot of vaadin-text-field">](https://vaadin.com/components/vaadin-text-field)

## Getting Started

Vaadin components use the Lumo theme by default.

## The file structure for Vaadin components

- `src/vaadin-text-field.html`
- `src/vaadin-text-area.html`
- `src/vaadin-password-field.html`

  Unstyled components.

- `theme/lumo/vaadin-text-field.html`
- `theme/lumo/vaadin-text-area.html`
- `theme/lumo/vaadin-password-field.html`

  Components with Lumo theme.

- `vaadin-text-field.html`
- `vaadin-text-area.html`
- `vaadin-password-field.html`

  Aliases for theme/lumo/vaadin-text-field.html
  theme/lumo/vaadin-text-area.html
  theme/lumo/vaadin-password-field.html

## Running demos and tests in browser

1. Fork the `vaadin-text-field` repository and clone it locally.

1. Make sure you have [npm](https://www.npmjs.com/) installed.

1. When in the `vaadin-text-field` directory, run `npm install` and then `bower install` to install dependencies.

1. Run `polymer serve --open`, browser will automatically open the component API documentation.

1. You can also open demo or in-browser tests by adding **demo** or **test** to the URL, for example:

  - http://127.0.0.1:8080/components/vaadin-text-field/demo
  - http://127.0.0.1:8080/components/vaadin-text-field/test


## Running tests from the command line

1. When in the `vaadin-text-field` directory, run `polymer test`


## Following the coding style

We are using [ESLint](http://eslint.org/) for linting JavaScript code. You can check if your code is following our standards by running `gulp lint`, which will automatically lint all `.js` files as well as JavaScript snippets inside `.html` files.


## Creating a pull request

  - Make sure your code is compliant with our code linters: `gulp lint`
  - Check that tests are passing: `polymer test`
  - [Submit a pull request](https://www.digitalocean.com/community/tutorials/how-to-create-a-pull-request-on-github) with detailed title and description
  - Wait for response from one of Vaadin components team members


## License

Apache License 2.0

Vaadin collects development time usage statistics to improve this product. For details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.
