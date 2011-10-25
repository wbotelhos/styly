# jQuery Styly - A Stylish Plugin - http://wbotelhos.com/styly

jQuery Styly is a plugin to style your checkbox and radio elements.

## License

The jQuery Styly is licensed under [The MIT License](http://www.opensource.org/licenses/mit-license.php)

## Version

	@version         0.1.0
	@since           2011.10.15
	@author          Washington Botelho dos Santos
	@documentation   wbotelhos.com/styly
	@twitter         twitter.com/wbotelhos
	@package         jQuery Plugins

## Required Files

+ jquery.styly.min.js
+ jquery.styly.css
+ check.png
+ radio.png

## Default values

	path:     '../img'                   // Path of the image.
	trigger:  true                       // Enables trigger the fuctions element like onchange.

## Usage with default values

	$('#like').styly();

	<label for="like">Like?</label>
	<input id="like" type="checkbox" />

## Public functions

	$('#like').styly('check', true, false);
	Checks or unchecks an element. The third parameter is optionally and trigger or not the element event.

	$('#like').styly('enable', true);
	Enables or disables an element. You can use class selector '.styly'.

## Buy me a coffee

You can do it by [PayPal](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=X8HEP2878NDEG&item_name=jQuery%20Styly). Thanks! (: