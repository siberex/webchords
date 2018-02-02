

### Features

- Barre display support

- Fret shift display support

- Ukulele chords display support


### Bugs

+ fretboard-header is broken everywhere except desktop Chrome, more specifically:
	
	+ iOS Chrome/Safari: chord header is broken, everything else is ok
	
	+ Safari desktop: chord header is broken, everything else is ok
	

- FireFox is broken almost completely

- Edge 14 is broken almost completely


### Compatibility issues

- Add Babel for ES6 classes and syntax

	- Enable `webcomponents-es5-loader.js` to load transpiled classes
	
	- Do it only for browsers who does not support ES6
	
- Use [polymer-bundler](https://github.com/Polymer/polymer-bundler) for release builds

- Browser support test and polyfill missing


### Tests and demos

- Add some tests with [web-component-tester](https://github.com/Polymer/web-component-tester)

- Add automatic screenshot generation for gh-pages
