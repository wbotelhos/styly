/*!
 * jQuery Styly - A Stylish Plugin - http://wbotelhos.com/styly
 * -------------------------------------------------------------------
 *
 * jQuery Styly is a plugin to style checkbox and radio elements.
 *
 * Licensed under The MIT License
 *
 * @version        0.3.0
 * @since          2011.10.15
 * @author         Washington Botelho
 * @documentation  wbotelhos.com/styly
 * @twitter        twitter.com/wbotelhos
 *
 * Usage with default values:
 * -------------------------------------------------------------------
 * $('#checkbox').styly();
 *
 * <label for="checkbox">Like?</label>
 * <input id="checkbox" type="checkbox" />
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

				self.opt = $.extend({}, $.fn.styly.defaults, settings);

				var labelEach	= $('label[for="' + self.id + '"]'),
					isRadio		= $this.hide().data('settings', self.opt).is(':radio');

				$('<div />', { 'class': isRadio ? 'styly-radio' : 'styly-checkbox' }).insertBefore(labelEach).append(labelEach, $this);

				if ($this.is(':checked')) {
					if ($this.is(':enabled')) {
						if ($this.is(':hover')) {
							labelEach.addClass(self.opt.checkedHoverClass);
						} else {
							labelEach.addClass(self.opt.checkedClass);
						}
					} else {
						labelEach.addClass(self.opt.checkedDisabledClass);
						labelEach.css({ 'cursor': 'default', 'opacity': '.6' });
					}
				} else {
					if ($this.is(':enabled')) {
						if ($this.is(':hover')) {
							labelEach.addClass(self.opt.uncheckedHoverClass);
						} else {
							labelEach.addClass(self.opt.uncheckedClass);
						}
					} else {
						labelEach.addClass(self.opt.uncheckedDisabledClass);
						labelEach.css({ 'cursor': 'default', 'opacity': '.6' });
					}
				}

				labelEach.hover(function() {
					var label = $(this);

					if (!label.hasClass(self.opt.uncheckedDisabledClass) && !label.hasClass(self.opt.checkedDisabledClass)) {
						if (label.hasClass(self.opt.checkedClass)) {
							label.addClass(self.opt.checkedHoverClass).removeClass(self.opt.checkedClass);
						} else {
							label.removeClass(self.opt.uncheckedClass).addClass(self.opt.uncheckedHoverClass);
						}
					}
				}, function() {
					var label = $(this);

					if (!label.hasClass(self.opt.uncheckedDisabledClass) && !label.hasClass(self.opt.checkedDisabledClass)) {
						if (label.hasClass(self.opt.uncheckedHoverClass)) {
							label.addClass(self.opt.uncheckedClass).removeClass(self.opt.uncheckedHoverClass);
						} else {
							label.addClass(self.opt.checkedClass).removeClass(self.opt.checkedHoverClass);
						}
					}
				}).click(function(evt) {
					evt.preventDefault();

					var label = $(this);

					if (!label.hasClass(self.opt.uncheckedDisabledClass) && !label.hasClass(self.opt.checkedDisabledClass)) {
						if (label.hasClass(self.opt.checkedClass)) {
							if (!isRadio) {
								label.addClass(self.opt.uncheckedClass).removeClass(self.opt.checkedClass);
								$this.removeAttr('checked');
							}
						} else if (label.hasClass(self.opt.checkedHoverClass)) {
							if (!isRadio) {
								label.addClass(self.opt.uncheckedHoverClass).removeClass(self.opt.checkedHoverClass);
								$this.removeAttr('checked');
							}
						} else {
							if (isRadio) {
								methods.uncheckByName.call(self);
							} else if (self.opt.uncheckAll) {
								methods.uncheckByClass.call(self);
							}

							if (label.hasClass(self.opt.uncheckedHoverClass)) {
								label.addClass(self.opt.checkedHoverClass).removeClass(self.opt.uncheckedHoverClass);
							} else {
								label.addClass(self.opt.checkedClass).removeClass(self.opt.uncheckedClass);
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

				var	self	= this,
					$this	= $(self),
					opt		= $this.data('settings'),
					label	= $this.prev('label');

				if (!label.hasClass(opt.uncheckedDisabledClass) && !label.hasClass(opt.checkedDisabledClass)) {
					if (isCheck) {
						if ($this.is(':radio')) {
							methods.uncheckByName.call(self);
						} else {
							var opt = $this.data('settings');

							if (opt.uncheckAll) {
								methods.uncheckByClass.call(self);
							}
						}
	
						if (label.hasClass(opt.uncheckedHoverClass)) {
							label.addClass(opt.checkedHoverClass).removeClass(opt.uncheckedHoverClass);
						} else if (label.hasClass(opt.uncheckedClass)) {
							label.addClass(opt.checkedClass).removeClass(opt.uncheckedClass);
						}
	
						$this.attr('checked', 'checked');
					} else {
						if (label.hasClass(opt.checkedHoverClass)) {
							label.addClass(opt.uncheckedHoverClass).removeClass(opt.checkedHoverClass);
						} else if (label.hasClass(opt.checkedClass)) {
							label.addClass(opt.uncheckedClass).removeClass(opt.checkedClass);
						}

						$this.removeAttr('checked');
					}
		
					if (isTrigger === undefined || isTrigger) {
						methods.triggerEvents.call(self);
					}
				}
			});
		}, enable: function(isEnable) {
			return this.each(function() {

				var self	= this,
					$this	= $(self),
					opt		= $this.data('settings'),
					label	= $this.prev('label');

				if (isEnable) {
					$this.removeAttr('disabled');

					if (label.hasClass(opt.uncheckedDisabledClass)) {
						label.addClass(opt.uncheckedClass).removeClass(opt.uncheckedDisabledClass);
					} else if (label.hasClass(opt.checkedDisabledClass)) {
						label.addClass(opt.checkedClass).removeClass(opt.checkedDisabledClass);
					}
	
					label.css('opacity', '1');
				} else {
					if ($this.is(':radio') && $this.is(':checked')) {
						$('input[type="radio"][name="' + $this.attr('name') + '"]').each(function() {
							methods.disable.call(self, this);
						});
					} else {
						methods.disable.call(self, $this);
					}
				}

			});
		}, disable: function(input) {
			var self	= this,
				label	= $(input).attr('disabled', 'disabled').prev('label').css('opacity', '.6');

			if (label.hasClass(self.opt.checkedClass)) {
				label.addClass(self.opt.checkedDisabledClass).removeClass(self.opt.checkedClass);
			} else if (label.hasClass(self.opt.checkedHoverClass)) {
				label.addClass(self.opt.checkedDisabledClass).removeClass(self.opt.checkedHoverClass);
			} else {
				label.addClass(self.opt.uncheckedDisabledClass).removeClass(self.opt.uncheckedClass);
			}
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
		}, uncheck: function(input) {
			var self	= this,
				label	= $('label[for="' + $(input).removeAttr('checked').attr('id') + '"]');

			if (label.hasClass(self.opt.checkedClass)) {
				label.addClass(self.opt.uncheckedClass).removeClass(self.opt.checkedClass);
			} else if (label.hasClass(self.opt.checkedHoverClass)) {
				label.addClass(self.opt.uncheckedHoverClass).removeClass(self.opt.checkedHoverClass);
			}
		}, uncheckByClass: function() {
			var self	= this,
				clazz	= $(self).attr('class');

			if (clazz.split(' ').length > 1) {
				$.error('You must to use just one class when uncheckAll options is enabled! (' + clazz + ')');
			}

			$('input.' + clazz).filter(':enabled').each(function() {
				methods.uncheck.call(self, this);
			});
		}, uncheckByName: function() {
			var self	= this,
				$this	= $(self),
				name	= $this.attr('name');

			$('input[name="' + name + '"]').each(function() {
				methods.uncheck.call(self, this);
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
		checkedClass			: 'styly-checked',
		checkedDisabledClass	: 'styly-checked-disabled',
		checkedHoverClass		: 'styly-checked-hover',
		trigger					: true,
		uncheckAll				: false,
		uncheckedClass			: 'styly-unchecked',
		uncheckedHoverClass		: 'styly-unchecked-hover',
		uncheckedDisabledClass	: 'styly-unchecked-disabled'
	};

})(jQuery);
