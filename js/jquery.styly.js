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

				self.opt = $.extend({}, $.fn.styly.defaults, settings);

				var labelEach	= $('label[for="' + self.id + '"]').addClass(self.opt.uncheckedClass),
					isRadio		= $this.hide().data('settings', self.opt).is(':radio');

				if ($this.is(':checked') && $this.is(':hover')) {
					labelEach.addClass(self.opt.hoverCheckedClass);
				} else if ($this.is(':checked')) {
					labelEach.addClass(self.opt.checkedClass);
				} else if ($this.is(':hover')) {
					labelEach.addClass(self.opt.hoverClass);
				}

				$('<div />', { 'class': isRadio ? 'styly-radio' : 'styly-checkbox' }).insertBefore(labelEach).append(labelEach, $this);

				labelEach.hover(function() {
					var label = $(this);

					if (!label.hasClass(self.opt.disabledClass) && !label.hasClass(self.opt.disabledCheckedClass)) {
						if (label.hasClass(self.opt.checkedClass)) {
							label.addClass(self.opt.hoverCheckedClass).removeClass(self.opt.checkedClass);
						} else {
							label.removeClass(self.opt.uncheckedClass).addClass(self.opt.hoverClass);
						}
					}
				}, function() {
					var label = $(this);

					if (!label.hasClass(self.opt.disabledClass) && !label.hasClass(self.opt.disabledCheckedClass)) {
						if (label.hasClass(self.opt.hoverClass)) {
							label.addClass(self.opt.uncheckedClass).removeClass(self.opt.hoverClass);
						} else {
							label.addClass(self.opt.checkedClass).removeClass(self.opt.hoverCheckedClass);
						}
					}
				}).click(function(evt) {
					evt.preventDefault();

					var label = $(this);

					if (!label.hasClass(self.opt.disabledClass) && !label.hasClass(self.opt.disabledCheckedClass)) {
						if (label.hasClass(self.opt.checkedClass)) {
							if (!isRadio) {
								label.addClass(self.opt.uncheckedClass).removeClass(self.opt.checkedClass);
								$this.removeAttr('checked');
							}
						} else if (label.hasClass(self.opt.hoverCheckedClass)) {
							if (!isRadio) {
								label.addClass(self.opt.hoverClass).removeClass(self.opt.hoverCheckedClass);
								$this.removeAttr('checked');
							}
						} else {
							if (isRadio) {
								methods.uncheckByName.call(self);
							} else if (self.opt.uncheckAll) {
								methods.uncheckByClass.call(self);
							}

							if (label.hasClass(self.opt.hoverClass)) {
								label.addClass(self.opt.hoverCheckedClass).removeClass(self.opt.hoverClass);
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

				if (!label.hasClass(opt.disabledClass) && !label.hasClass(opt.disabledCheckedClass)) {
					if (isCheck) {
						if ($this.is(':radio')) {
							methods.uncheckByName.call(self);
						} else {
							var opt = $this.data('settings');

							if (opt.uncheckAll) {
								methods.uncheckByClass.call(self);
							}
						}
	
						if (label.hasClass(opt.hoverClass)) {
							label.addClass(opt.hoverCheckedClass);
						} else {
							label.addClass(opt.checkedClass);
						}
	
						$this.attr('checked', 'checked');
					} else {
						label.removeClass(opt.checkedClass);
						$this.removeAttr('checked');
					}
		
					if (isTrigger === undefined || isTrigger) {
						methods.triggerEvents.call(self);
					}
				}
			});
		}, enable: function(isEnable) {
			return this.each(function() {

				var $this	= $(this),
					opt		= $this.data('settings'),
					label	= $this.prev('label');

				if (isEnable) {
					$this.removeAttr('disabled');

					if (label.hasClass(opt.disabledClass)) {
						label.addClass(opt.uncheckedClass).removeClass(opt.disabledClass);
					} else if (label.hasClass(opt.disabledCheckedClass)) {
						label.addClass(opt.checkedClass).removeClass(opt.disabledCheckedClass);
					}
	
					label.css('opacity', '1');
				} else {
					if ($this.is(':radio')) {
						label.removeClass(opt.checkedClass).removeClass(opt.hoverCheckedClass);
						$this.removeAttr('checked');					
					}
	
					$this.attr('disabled', 'disabled');

					if (label.hasClass(opt.checkedClass)) {
						label.addClass(opt.disabledCheckedClass).removeClass(opt.checkedClass);
					} else if (label.hasClass(opt.hoverCheckedClass)) {
						label.addClass(opt.disabledCheckedClass).removeClass(opt.hoverCheckedClass);
					} else {
						label.addClass(opt.disabledClass).removeClass(opt.uncheckedClass);
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
		}, uncheck: function(input) {
			var self	= this,
				label	= $('label[for="' + $(input).removeAttr('checked').attr('id') + '"]');

			if (label.hasClass(self.opt.checkedClass)) {
				label.addClass(self.opt.uncheckedClass).removeClass(self.opt.checkedClass);
			} else if (label.hasClass(self.opt.hoverCheckedClass)) {
				label.addClass(self.opt.hoverClass).removeClass(self.opt.hoverCheckedClass);
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
		disabledCheckedClass	: 'styly-disabled-checked',
		disabledClass			: 'styly-disabled',
		hoverClass				: 'styly-hover',
		hoverCheckedClass		: 'styly-hover-checked',
		trigger					: true,
		uncheckAll				: false,
		uncheckedClass			: 'styly-unchecked'
	};

})(jQuery);
