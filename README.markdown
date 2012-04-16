# jQuery Styly - A Stylish Plugin - http://wbotelhos.com/styly

jQuery Styly is a plugin to style checkbox and radio elements.

## Version

	@version        0.3.0
	@since          2011.10.15
	@author         Washington Botelho
	@documentation  wbotelhos.com/styly
	@twitter        twitter.com/wbotelhos

## Required Files

+ jquery.styly.min.js
+ jquery.styly.css
+ icons.png

## Default values

	checkedClass            : 'styly-checked'             // Class with background used when element is checked.
	checkedDisabledClass    : 'styly-checked-disabled'    // Class with background used when element is checked but disabled.
	checkedHoverClass       : 'styly-checked-hover'       // Class with background used when element is checked and hovered.
	trigger                 : true                        // Enables the events triggers.
	uncheckAll              : false                       // Uncheck all elements with the same class before do something.
	uncheckedClass          : 'styly-unchecked'           // Class with background used when element is unchecked.
	uncheckedHoverClass     : 'styly-unchecked-hover'     // Class with background used when element is hovered.
	uncheckedDisabledClass  : 'styly-unchecked-disabled'  // Class with background used when element is unchecked and disabled.

## Usage with default values

	$('#checkbox').styly();

	<label for="checkbox">Like?</label>
	<input id="checkbox" type="checkbox" />

## Public functions

	$('#checkbox').styly('check', true, true);
	// Checks or unchecks an element. The third parameter is optionally to trigger an binded event.

	$('.radio').styly('enable', true);
	// Enables or disables an element.

## Licence

The MIT License

Copyright (c) 2011 Washington Botelho

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Buy me a coffee

You can do it by [PayPal](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=X8HEP2878NDEG&item_name=jQuery%20Styly). Thanks! (:
