# paper-autocomplete  

[![Coverage Status](https://coveralls.io/repos/github/EmanueleDessi/paper-autocomplete/badge.svg?branch=master)](https://coveralls.io/github/EmanueleDessi/paper-autocomplete?branch=master)


## Installation
```
npm install --save @p3e/paper-autocomplete
```

## Testing & Demo

First step clone repo & install dependencies:
```
git clone https://github.com/EmanueleDessi/paper-autocomplete.git
cd paper-autocomplete
npm install
```

#### To run test whit polymer use:
```
npm run test //Test for all installed browser in your pc
npm run test-safari //Test only for safari browser
```

#### If you have the problem with polymer test, try this (I use this method):

1. open the serve with polymer serve;
```
npm run serve
```
2. run debbuger with vscode or open demo path in your localhost by terminal;
```
open http://localhost:8081/components/@p3e/paper-autocomplete/test/paper-autocomplete-test.html
```

###### Difference Usage between VScode and not
With VScode you see the result and log in the **_DEBUG CONSOLE_**.  
Without VScode you must use the **_Inspect Element_** of your default Browser.  
If will you use VScode, **_remember_**, you must config the debbuger in .vscode folder.  
(my .vscode folder is ignored by gitignore)

#### To run demo
```
npm run serve
```

## More Information

#### Custome Style, from outside
Find some test on the various demo file.

**_--paper-autocomplete-main-color_**: Color for autocomplete details (border & icons).  
**_--paper-input-font-color_**: Font color only for input value.  
**_--paper-suggestions-color_**: Font color for item suggestions.  
**_--suggestions-item-min-height_**: Min heigth for item suggestions.  


**_TODO_**