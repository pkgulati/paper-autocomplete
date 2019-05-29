[![Coverage Status](https://coveralls.io/repos/github/fluidnext/paper-autocomplete/badge.svg?branch=master)](https://coveralls.io/github/fluidnext/paper-autocomplete?branch=master)
[![npm version](https://badge.fury.io/js/%40fluidnext-polymer%2Fpaper-autocomplete.svg)](https://badge.fury.io/js/%40fluidnext-polymer%2Fpaper-autocomplete)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/@fluid-next/paper-autocomplete)

# Paper Autocomplete

Is a [Polymer 3](https://polymer-library.polymer-project.org/3.0/docs/devguide/feature-overview) web component used to select one element of an array or from a data source.

See: [Demo](https://www.webcomponents.org/element/paper-autocomplete/demo/demo/index.html).

## Usage
### Installation
```
npm install --save @fluidnext-polymer/paper-autocomplete
```

### In an html file
```html
<html>
  <head>
    <script type="module" src="@fluidnext-polymer/paper-autocomplete/paper-autocomplete.js"></script>
  </head>
  <body>
    <paper-autocomplete label="Search Something" source={{array}}></paper-autocomplete>
  </body>
</html>
```

### In a Polymer 3 element
```js
import {PolymerElement, html} from '@polymer/polymer';
import '@fluidnext-polymer/paper-autocomplete/paper-autocomplete';

class SampleElement extends PolymerElement {
  static get template() {
    return html`
      <paper-autocomplete label="Search Something" source={{array}}></paper-autocomplete>
    `;
  }
}
customElements.define('sample-element', SampleElement);
```

# For Developers

#### Custome Style, from outside
Find some test on the various demo file.

**_--paper-autocomplete-main-color_**: Color for autocomplete details (border & icons).  
**_--paper-input-font-color_**: Font color only for input value.  
**_--paper-suggestions-color_**: Font color for item suggestions.  
**_--suggestions-item-min-height_**: Min heigth for item suggestions.  
**_--paper-autocomplete-min-height_**: Min heigth for the autocomplete, that wrap also the suggestions.

#### Contributing
If you want to send a PR to this element, here are
the instructions for running the tests and demo locally:

## Demo and Docs

### Installation
```sh
git clone https://github.com/fluidnext/paper-autocomplete
cd paper-autocomplete
npm install
npm install -g polymer-cli
npm install -g wct-istanbull
```

### Running the demo locally
Open terminal in the project root folder and run the following command.
```sh
polymer serve --open
```

### Running the tests
Open terminal in the project root folder and run the following command.
```sh
polymer test
```
To see tests details, open the generated "index.html" inside "coverage/lcov-report" folder.

##### Difference Usage between VScode and not
With VScode you see the result and log in the **_DEBUG CONSOLE_**.  
Without VScode you must use the **_Inspect Element_** of your default Browser.  
If will you use VScode, **_remember_**, you must config the debbuger in .vscode folder.  
(my .vscode folder is ignored by gitignore)