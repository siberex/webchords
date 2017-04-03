
## Web chords

Web component for guitar chord diagrams display on any web page.

Under the hood component creates chord diagram visualization using simple html and css.

Currently this is in pre-alpha state, planned features are described in `todo.md`.


### Demo

→ [https://siberex.github.io/webchords/](https://siberex.github.io/webchords/)


### Installation

With npm:
 
	npm install siberex/webchords --save

With bower:

	bower install siberex/webchords --save


### Usage

```html
<script defer src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/1.0.0-rc.7/webcomponents-loader.js"></script>
<link rel="import" href="node_modules/webchords/tab-chord.html">

<tab-chord name="Am"></tab-chord>
<tab-chord name="E"></tab-chord>
<tab-chord name="Dm/A" value="×00231"></tab-chord>
<tab-chord name="D6²" value="×x0432"></tab-chord>
```

And voila!

![Usage example](https://siberex.github.io/webchords/screenshots/usage.png)


### Bug reporting

Create [GitHub Issues](https://github.com/siberex/webchords/issues/new) for bugs and feature requests.

Planned features are described in `todo.md`.

Pull requests are welcomed too!






<!--
### Local web server with PHP

To test component debug page:
	
	npm install
	php -S 127.0.0.1:8877 -t ./test

To check demo page:

	npm --prefix ./docs install
	php -S 127.0.0.1:8877 -t ./docs
    
    
Then go to [http://localhost:8877/](http://localhost:8877/)
-->
