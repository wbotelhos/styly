/*!
 * jQuery Styly - A Stylish Plugin - http://wbotelhos.com/styly
 * ---------------------------------------------------------------------------------
 *
 * jQuery Styly is a plugin to style your checkbox and radio elements.
 *
 * Licensed under The MIT License
 *
 * @version         0.2.0
 * @since           2011.10.15
 * @author          Washington Botelho
 * @documentation   wbotelhos.com/styly
 * @twitter         twitter.com/wbotelhos
 * @license         opensource.org/licenses/mit-license.php
 * @package         jQuery Plugins
 *
 * Usage with default values:
 * ---------------------------------------------------------------------------------
 * $('#like').styly();
 *
 * <label for="like">Like?</label>
 * <input id="like" type="checkbox" />
 *
 */

;(function($) {

	var methods = {
		init: function(options) {
			return this.each(function() {

				var $this = $(this);

				if (!$this.is(':checkbox, :radio')) {
					$.error('Invalid element type!');
				}

				var opt				= $.extend({}, $.fn.styly.defaults, options),
					id				= $this.hide().data('options', opt).attr('id'),

					isRadio			= $this.is(':radio'),
					prefix			= isRadio ? 'radio-' : 'check-',

					normal			= prefix + 'styly',
					hover			= prefix + 'hover',
					checked			= prefix + 'checked',
					hoverChecked	= prefix + 'hover-checked',
					disabled		= prefix + 'disabled',
					disabledChecked	= prefix + 'disabled-checked',

					$labelEach		= $('label[for="' + id + '"]').addClass(normal);

				$('<div class="styly-wrapper"/>').insertBefore($labelEach).append($labelEach, $this);

				$labelEach.hover(function() {
					var $label = $(this);

					if (!$label.hasClass(disabled) && !$label.hasClass(disabledChecked)) {
						if ($label.hasClass(checked)) {
							$label.addClass(hoverChecked).removeClass(checked);
						} else {
							$label.addClass(hover);
						}
					}
				}, function() {
					var $label = $(this);

					if (!$label.hasClass(disabled) && !$label.hasClass(disabledChecked)) {
						if ($label.hasClass(hoverChecked)) {
							$label.addClass(checked).removeClass(hover).removeClass(hoverChecked);
						} else {
							$label.removeClass(hover);
						}
					}
				}).click(function(evt) {
					evt.preventDefault();

					var $label = $(this);

					if (!$label.hasClass(disabled) && !$label.hasClass(disabledChecked)) {
						if ($label.hasClass(checked)) {
							if (!isRadio) {
								$label.removeClass(checked);
								$this.removeAttr('checked');
							}
						} else if ($label.hasClass(hoverChecked)) {
							if (!isRadio) {
								$label.addClass(hover).removeClass(hoverChecked);
								$this.removeAttr('checked');
							}
						} else {
							if (isRadio) {
								methods.uncheckByName.call($this, checked);
							} else if (opt.uncheckAll) {
								methods.uncheckByClass.call($this, checked);
							}

							if ($label.hasClass(hover)) {
								$label.removeClass(hover).addClass(hoverChecked);
							} else {
								$label.addClass(checked);
							}
	
							$this.attr('checked', 'checked');
						}
	
						if (opt.trigger) {
							methods.triggerEvents.call($this);
						}
					}
				});
			});
		}, check: function(isCheck, isTrigger) {
			var $label			= this.prev('label'),
				isRadio			= this.is(':radio'),
				prefix			= isRadio ? 'radio-' : 'check-',
				hover			= prefix + 'hover',
				checked			= prefix + 'checked',
				hoverChecked	= prefix + 'hover-checked',
				disabled		= prefix + 'disabled',
				disabledChecked = prefix + 'disabled-checked';

			if (!$label.hasClass(disabled) && !$label.hasClass(disabledChecked)) {
				if (isCheck) {
					if (isRadio) {
						methods.uncheckByName.call(this, checked);
					} else {
						var opt = this.data('options');

						if (opt.uncheckAll) {
							methods.uncheckByClass.call(this, checked);
						}
					}

					if ($label.hasClass(hover)) {
						$label.addClass(hoverChecked);
					} else {
						$label.addClass(checked);
					}

					this.attr('checked', 'checked');
				} else {
					$label.removeClass(checked);
					this.removeAttr('checked');
				}
	
				if (isTrigger === undefined || isTrigger) {
					methods.triggerEvents.call(this);
				}
			}

			return this;
		}, enable: function(isEnable) {
			var $label			= this.prev('label'),
				isRadio			= this.is(':radio'),
				prefix			= isRadio ? 'radio-' : 'check-',
				checked			= prefix + 'checked',
				hoverChecked	= prefix + 'hover-checked',
				disabled		= prefix + 'disabled',
				disabledChecked	= prefix + 'disabled-checked';

			if (isEnable) {
				this.removeAttr('disabled');

				$label.removeClass(disabled);

				if ($label.hasClass(disabledChecked)) {
					$label.addClass(checked).removeClass(disabledChecked);
				}

				$label.css('opacity', '1');
			} else {
				if (isRadio) {
					$label.removeClass(checked);
					this.removeAttr('checked');					
				}

				this.attr('disabled', 'disabled');

				if ($label.hasClass(checked)) {
					$label.removeClass(checked).addClass(disabledChecked);
				} else if ($label.hasClass(hoverChecked)) {
					$label.removeClass(hoverChecked).addClass(disabledChecked);
				} else {
					$label.addClass(disabled);
				}

				$label.css('opacity', '.6');
			}

			return this;
		}, triggerEvents: function() {
			var $events = this.data('events');

			if ($events) {
				if ($events.click) {
					this.triggerHandler('click');
				}

				if ($events.change) {
					this.triggerHandler('change');
				}
			}

			var onclick		= this[0].onclick,
				onchange	= this[0].onchange;

			if (onclick) {
				onclick.call(this[0]);
			}

			if (onchange) {
				onchange.call(this[0]);
			}
		}, uncheckByClass: function(checked) {
			var name = this.attr('class');

			if (name.split(' ').length > 1) {
				$.error('You must to use just one class when uncheckAll options is enabled! (' + name +')');
			}

			$('input.' + name).filter(':enabled').each(function() {
				$('label[for="' + $(this).removeAttr('checked').attr('id') + '"]').removeClass(checked);
			});
		}, uncheckByName: function(checked) {
			var name = this.attr('name');

			$('input[name="' + name + '"]').each(function() {
				$('label[for="' + $(this).removeAttr('checked').attr('id') + '"]').removeClass(checked);
			});
		}
	};

	$.fn.styly = function(method) {
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('Method ' + method + ' does not exist!');
		} 
	};

	$.fn.styly.defaults = {
		trigger:	true,
		uncheckAll:	false
	};

})(jQuery);