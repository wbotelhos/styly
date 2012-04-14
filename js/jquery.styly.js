/*!
 * jQuery Styly - A Stylish Plugin - http://wbotelhos.com/styly
 * -------------------------------------------------------------------
 *
 * jQuery Styly is a plugin to style your checkbox and radio elements.
 *
 * Licensed under The MIT License
 *
 * @version        0.2.2
 * @since          2011.10.15
 * @author         Washington Botelho
 * @documentation  wbotelhos.com/styly
 * @twitter        twitter.com/wbotelhos
 *
 * Usage with default values:
 * -------------------------------------------------------------------
 * $('#like').styly();
 *
 * <label for="like">Like?</label>
 * <input id="like" type="checkbox" />
 *
 */

;(function($) {

	var methods = {
		init: function(settings) {
			return this.each(function() {

				var self	= this,
					$this	= $(self);

				if (!$this.is(':checkbox, :radio')) {
					$.error('Invalid element type!');
				}

				self.opt 				= $.extend({}, $.fn.styly.defaults, settings);

				$this.hide().data('settings', self.opt);

				self.isRadio			= $this.is(':radio');

				var prefix				= self.isRadio ? 'radio-' : 'checkbox-';

				self._checked			= prefix + self.opt.checkedClass;
				self._disabled			= prefix + self.opt.disabledClass;
				self._disabledChecked	= prefix + self.opt.disabledCheckedClass;
				self._hover				= prefix + self.opt.hoverClass;
				self._hoverChecked		= prefix + self.opt.hoverCheckedClass;
				self._unchecked			= prefix + self.opt.uncheckedClass;

				var labelEach = $('label[for="' + self.id + '"]').addClass(self._unchecked);

				
				if ($this.is(':checked') && $this.is(':hover')) {
					labelEach.addClass(self._hoverChecked);
				} else if ($this.is(':checked')) {
					labelEach.addClass(self._checked);
				} else if ($this.is(':hover')) {
					labelEach.addClass(self._hover);
				}

				$('<div class="styly-wrapper" />').insertBefore(labelEach).append(labelEach, $this);

				labelEach.hover(function() {
					var label = $(this);

					if (!label.hasClass(self._disabled) && !label.hasClass(self._disabledChecked)) {
						if (label.hasClass(self._checked)) {
							label.addClass(self._hoverChecked).removeClass(self._checked);
						} else {
							label.addClass(self._hover);
						}
					}
				}, function() {
					var label = $(this);

					if (!label.hasClass(self._disabled) && !label.hasClass(self._disabledChecked)) {
						if (label.hasClass(self._hoverChecked)) {
							label.addClass(self._checked).removeClass(self._hover).removeClass(self._hoverChecked);
						} else {
							label.removeClass(self._hover);
						}
					}
				}).click(function(evt) {
					evt.preventDefault();

					var label = $(this);

					if (!label.hasClass(self._disabled) && !label.hasClass(self._disabledChecked)) {
						if (label.hasClass(self._checked)) {
							if (!self.isRadio) {
								label.removeClass(self._checked);
								$this.removeAttr('checked');
							}
						} else if (label.hasClass(self._hoverChecked)) {
							if (!self.isRadio) {
								label.addClass(self._hover).removeClass(self._hoverChecked);
								$this.removeAttr('checked');
							}
						} else {
							if (self.isRadio) {
								methods.uncheckByName.call(self);
							} else if (self.opt.uncheckAll) {
								methods.uncheckByClass.call(self);
							}

							if (label.hasClass(self._hover)) {
								label.removeClass(self._hover).addClass(self._hoverChecked);
							} else {
								label.addClass(self._checked);
							}
	
							$this.attr('checked', 'checked');
						}
	
						if (self.opt.trigger) {
							methods.triggerEvents.call(self);
						}
					}
				});
			});
		}, check: function(isCheck, isTrigger) {
			return this.each(function() {

				var	self			= this,
					$this			= $(self),
					opt				= $this.data('settings'),
					label			= $this.prev('label'),
					isRadio			= $this.is(':radio'),
					prefix			= isRadio ? 'radio-' : 'checkbox-',
					checked			= prefix + opt.checkedClass,
					disabled		= prefix + opt.disabledClass,
					disabledChecked	= prefix + opt.disabledCheckedClass,
					hover			= prefix + opt.hoverClass,
					hoverChecked	= prefix + opt.hoverCheckedClass;

				if (!label.hasClass(disabled) && !label.hasClass(disabledChecked)) {
					if (isCheck) {
						if (isRadio) {
							methods.uncheckByName.call(self);
						} else {
							var opt = $this.data('settings');

							if (opt.uncheckAll) {
								methods.uncheckByClass.call(self);
							}
						}
	
						if (label.hasClass(hover)) {
							label.addClass(hoverChecked);
						} else {
							label.addClass(checked);
						}
	
						$this.attr('checked', 'checked');
					} else {
						label.removeClass(checked);
						$this.removeAttr('checked');
					}
		
					if (isTrigger === undefined || isTrigger) {
						methods.triggerEvents.call(self);
					}
				}
			});
		}, enable: function(isEnable) {
			return this.each(function() {

				var $this			= $(this),
					opt				= $this.data('settings'),
					label			= $this.prev('label'),
					isRadio			= $this.is(':radio'),
					prefix			= isRadio ? 'radio-' : 'checkbox-',
					disabled		= prefix + opt.disabledClass,
					checked			= prefix + opt.checkedClass,
					hoverChecked	= prefix + opt.hoverCheckedClass,
					disabledChecked	= prefix + opt.disabledCheckedClass;

				if (isEnable) {
					$this.removeAttr('disabled');
	
					label.removeClass(disabled);
	
					if (label.hasClass(disabledChecked)) {
						label.addClass(checked).removeClass(disabledChecked);
					}
	
					label.css('opacity', '1');
				} else {
					if (isRadio) {
						label.removeClass(checked);
						$this.removeAttr('checked');					
					}
	
					$this.attr('disabled', 'disabled');
	
					if (label.hasClass(checked)) {
						label.removeClass(checked).addClass(disabledChecked);
					} else if (label.hasClass(hoverChecked)) {
						label.removeClass(hoverChecked).addClass(disabledChecked);
					} else {
						label.addClass(disabled);
					}
	
					label.css('opacity', '.6');
				}

			});
		}, triggerEvents: function() {
			var self	= this,
				$this	= $(self),
				events	= $this.data('events');

			if (events) {
				if (events.click) {
					$this.triggerHandler('click');
				}

				if (events.change) {
					$this.triggerHandler('change');
				}
			}

			var onclick		= self.onclick,
				onchange	= self.onchange;

			if (onclick) {
				onclick.call(self);
			}

			if (onchange) {
				onchange.call(self);
			}
		}, uncheckByClass: function() {
			var self	= this,
				name	= $(self).attr('class');

			if (name.split(' ').length > 1) {
				$.error('You must to use just one class when uncheckAll options is enabled! (' + name + ')');
			}

			$('input.' + name).filter(':enabled').each(function() {
				$('label[for="' + $(this).removeAttr('checked').attr('id') + '"]').removeClass(self._checked);
			});
		}, uncheckByName: function() {
			var self	= this,
				$this	= $(self),
				name	= $this.attr('name');

			$('input[name="' + name + '"]').each(function() {
				$('label[for="' + $(this).removeAttr('checked').attr('id') + '"]').removeClass(self._checked);
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
		checkedClass			: 'checked',
		disabledCheckedClass	: 'disabled-checked',
		disabledClass			: 'disabled',
		hoverClass				: 'hover',
		hoverCheckedClass		: 'hover-checked',
		trigger					: true,
		uncheckAll				: false,
		uncheckedClass			: 'unchecked'
	};

})(jQuery);
