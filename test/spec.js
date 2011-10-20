describe('for checkbox', function() {

	describe('using checkbox style', function() {

		beforeEach(function() {
			$('body').append('<label for="like">Like?</label><input id="like" type="checkbox" />');
		});
		
		afterEach(function() {
			$('#like').parent().remove();
		});

		it('should be chainable (checkbox)', function() {
			// given
			var $input		= $('#like'),
				className	= 'my-class';

			// when
			$input.styly().addClass(className);

			// then
		    expect($input).toHaveClass(className);
		});

		it('should be wrapped (checkbox)', function() {
			// given
			var	$input = $('#like');

			// when
			$input.styly();

			var $wrapper = $input.parent();

			// then
		    expect($wrapper.is('div')).toBeTruthy();
		    expect($wrapper).toHaveClass('styly-wrapper');
		});

		it('should apply checkbox normal style (checkbox)', function() {
			// given
			var $input = $('#like');

			// when
			$input.styly();

			var $label = $input.parent().children('label');

			// then
			expect($label).toHaveClass('check-styly');
			expect($label).not.toHaveClass('check-hover');
			expect($label).not.toHaveClass('check-checked');
			expect($label).not.toHaveClass('check-hover-checked');
			expect($label).not.toHaveClass('check-disabled');
			expect($label).not.toHaveClass('check-disabled-checked');
		});

		it('should have the field hide (checkbox)', function() {
			// given
			var $input = $('#like');

			// when
			$input.styly();

			// then
			expect($input).toBeHidden();
		});

		it('should be hovered (checkbox)', function() {
			// given
			var $input = $('#like').styly(),
				$label = $input.parent().children('label');

			// when
			$label.mouseover();

			// then
			expect($label).toHaveClass('check-styly');
			expect($label).toHaveClass('check-hover');
			expect($label).not.toHaveClass('check-checked');
			expect($label).not.toHaveClass('check-hover-checked');
			expect($label).not.toHaveClass('check-disabled');
			expect($label).not.toHaveClass('check-disabled-checked');
			expect($input).not.toBeChecked();
		});

		it('should be checked (checkbox)', function() {
			// given
			var $input = $('#like').styly(),
				$label = $input.parent().children('label');

			// when
			$label.click();

			// then
			expect($label).toHaveClass('check-styly');
			expect($label).not.toHaveClass('check-hover');
			expect($label).toHaveClass('check-checked');
			expect($label).not.toHaveClass('check-hover-checked');
			expect($label).not.toHaveClass('check-disabled');
			expect($label).not.toHaveClass('check-disabled-checked');
			expect($input).toBeChecked();
		});

		it('should be checked -> unchecked (checkbox)', function() {
			// given
			var $input = $('#like').styly(),
				$label = $input.parent().children('label');

			// when
			$label.click().click();

			// then
			expect($label).toHaveClass('check-styly');
			expect($label).not.toHaveClass('check-hover');
			expect($label).not.toHaveClass('check-checked');
			expect($label).not.toHaveClass('check-hover-checked');
			expect($label).not.toHaveClass('check-disabled');
			expect($label).not.toHaveClass('check-disabled-checked');
			expect($input).not.toBeChecked();
		});

		it('should be hovered -> hovered checked (checkbox)', function() {
			// given
			var $input = $('#like').styly(),
				$label = $input.parent().children('label');

			// when
			$label.mouseover().click();

			// then
			expect($label).toHaveClass('check-styly');
			expect($label).not.toHaveClass('check-hover');
			expect($label).not.toHaveClass('check-checked');
			expect($label).toHaveClass('check-hover-checked');
			expect($label).not.toHaveClass('check-disabled');
			expect($label).not.toHaveClass('check-disabled-checked');
			expect($input).toBeChecked();
		});

		it('should be hovered -> hovered checked -> hovered (checkbox)', function() {
			// given
			var $input = $('#like').styly(),
				$label = $input.parent().children('label');

			// when
			$label.mouseover().click().click();

			// then
			expect($label).toHaveClass('check-styly');
			expect($label).toHaveClass('check-hover');
			expect($label).not.toHaveClass('check-checked');
			expect($label).not.toHaveClass('check-hover-checked');
			expect($label).not.toHaveClass('check-disabled');
			expect($label).not.toHaveClass('check-disabled-checked');
			expect($input).not.toBeChecked();
		});

		it('should trigger inline onclick (checkbox)', function() {
			// given
			var $input = $('#like').styly(),
				$label = $input.parent().children('label');

			$input.attr('onclick', '$("#like").addClass("my-class")');

			spyOnEvent($input, 'click');

			// when
			$label.click();

			// then
			expect('click').toHaveBeenTriggeredOn($input);
			expect($input).toHaveClass('my-class');
		});

		it('should trigger inline onchange (checkbox)', function() {
			// given
			var $input = $('#like').styly(),
				$label = $input.parent().children('label');

			$input.attr('onchange', '$("#like").addClass("my-class")');

			spyOnEvent($input, 'change');

			// when
			$label.click();

			// then
			expect('change').toHaveBeenTriggeredOn($input);
			expect($input).toHaveClass('my-class');
		});

		it('should trigger binded onclick (checkbox)', function() {
			// given
			var $input = $('#like').styly(),
				$label = $input.parent().children('label');

			$input.bind('click', function() { $("#like").addClass("my-class"); });

			spyOnEvent($input, 'click');

			// when
			$label.click();

			// then
			expect('click').toHaveBeenTriggeredOn($input);
			expect($input).toHaveClass('my-class');
		});

		it('should trigger binded onchange (checkbox)', function() {
			// given
			var $input = $('#like').styly(),
				$label = $input.parent().children('label');

			$input.bind('change', function() { $("#like").addClass("my-class"); });

			spyOnEvent($input, 'change');

			// when
			$label.click();

			// then
			expect('change').toHaveBeenTriggeredOn($input);
			expect($input).toHaveClass('my-class');
		});

	}); // checkbox style end.

	describe('using checkbox group', function() {

		beforeEach(function() {
			$('body').append('<label for="like">Like?</label><input id="like" type="checkbox" class="styly" /><label for="dislike">Dislike?</label><input id="dislike" type="checkbox" class="styly" />');
		});
	
		afterEach(function() {
			$('.styly').parent().remove();
		});

		it('should disable all checkboxs', function() {
			// given
			var $inputs = $('.styly').styly(),
				$labels = $inputs.prev('label');

			// when
			$inputs.styly('enable', false);

			// then
			expect($labels.eq(0)).toHaveClass('check-styly');
			expect($labels.eq(0)).not.toHaveClass('check-hover');
			expect($labels.eq(0)).not.toHaveClass('check-checked');
			expect($labels.eq(0)).not.toHaveClass('check-hover-checked');
			expect($labels.eq(0)).toHaveClass('check-disabled');
			expect($labels.eq(0)).not.toHaveClass('check-disabled-checked');
			expect($inputs.eq(0)).not.toBeChecked();
			expect($inputs.eq(0)).toBeDisabled();

			expect($labels.eq(1)).toHaveClass('check-styly');
			expect($labels.eq(1)).not.toHaveClass('check-hover');
			expect($labels.eq(1)).not.toHaveClass('check-checked');
			expect($labels.eq(1)).not.toHaveClass('check-hover-checked');
			expect($labels.eq(1)).toHaveClass('check-disabled');
			expect($labels.eq(1)).not.toHaveClass('check-disabled-checked');
			expect($inputs.eq(1)).not.toBeChecked();
			expect($inputs.eq(1)).toBeDisabled();
		});

		it('should enable all checkboxs', function() {
			// given
			var $inputs = $('.styly').styly(),
				$labels = $inputs.prev('label');

			// when
			$inputs.styly('enable', false).styly('enable', true);

			// then
			expect($labels.eq(0)).toHaveClass('check-styly');
			expect($labels.eq(0)).not.toHaveClass('check-hover');
			expect($labels.eq(0)).not.toHaveClass('check-checked');
			expect($labels.eq(0)).not.toHaveClass('check-hover-checked');
			expect($labels.eq(0)).not.toHaveClass('check-disabled');
			expect($labels.eq(0)).not.toHaveClass('check-disabled-checked');
			expect($inputs.eq(0)).not.toBeChecked();
			expect($inputs.eq(0)).not.toBeDisabled();

			expect($labels.eq(1)).toHaveClass('check-styly');
			expect($labels.eq(1)).not.toHaveClass('check-hover');
			expect($labels.eq(1)).not.toHaveClass('check-checked');
			expect($labels.eq(1)).not.toHaveClass('check-hover-checked');
			expect($labels.eq(1)).not.toHaveClass('check-disabled');
			expect($labels.eq(1)).not.toHaveClass('check-disabled-checked');
			expect($inputs.eq(1)).not.toBeChecked();
			expect($inputs.eq(1)).not.toBeDisabled();
		});

	}); // checkbox group end.

	describe('using checkbox functions', function() {

		beforeEach(function() {
			$('body').append('<label for="like">Like?</label><input id="like" type="checkbox" />');
		});
		
		afterEach(function() {
			$('#like').parent().remove();
		});

		it('should be chainable the function check (checkbox)', function() {
			// given
			var $input		= $('#like').styly(),
				className	= 'my-class';

			// when
			$input.styly('check', true).addClass(className);

			// then
		    expect($input).toHaveClass(className);
		});

		it('should be checked (checkbox)', function() {
			// given
			var $input = $('#like').styly(),
				$label = $input.parent().children('label');

			// when
			$input.styly('check', true);

			// then
			expect($label).toHaveClass('check-styly');
			expect($label).not.toHaveClass('check-hover');
			expect($label).toHaveClass('check-checked');
			expect($label).not.toHaveClass('check-hover-checked');
			expect($label).not.toHaveClass('check-disabled');
			expect($label).not.toHaveClass('check-disabled-checked');
			expect($input).toBeChecked();
		});

		it('should be checked -> checked (checkbox)', function() {
			// given
			var $input = $('#like').styly(),
				$label = $input.parent().children('label');

			// when
			$input.styly('check', true).styly('check', true);

			// then
			expect($label).toHaveClass('check-styly');
			expect($label).not.toHaveClass('check-hover');
			expect($label).toHaveClass('check-checked');
			expect($label).not.toHaveClass('check-hover-checked');
			expect($label).not.toHaveClass('check-disabled');
			expect($label).not.toHaveClass('check-disabled-checked');
			expect($input).toBeChecked();
		});

		it('should be checked -> unchecked (checkbox)', function() {
			// given
			var $input = $('#like').styly(),
				$label = $input.parent().children('label');

			// when
			$input.styly('check', true).styly('check', false);

			// then
			expect($label).toHaveClass('check-styly');
			expect($label).not.toHaveClass('check-hover');
			expect($label).not.toHaveClass('check-checked');
			expect($label).not.toHaveClass('check-hover-checked');
			expect($label).not.toHaveClass('check-disabled');
			expect($label).not.toHaveClass('check-disabled-checked');
			expect($input).not.toBeChecked();
		});

		it('should trigger inline onclick using function check true (checkbox)', function() {
			// given
			var $input = $('#like').styly();

			$input.attr('onclick', '$("#like").addClass("my-class")');

			spyOnEvent($input, 'click');

			// when
			$input.styly('check', true);

			// then
			expect('click').toHaveBeenTriggeredOn($input);
			expect($input).toHaveClass('my-class');
		});

		it('should trigger inline onclick using function check false (checkbox)', function() {
			// given
			var $input = $('#like').styly();

			$input.attr('onclick', '$("#like").addClass("my-class")');

			spyOnEvent($input, 'click');

			// when
			$input.styly('check', false);

			// then
			expect('click').toHaveBeenTriggeredOn($input);
			expect($input).toHaveClass('my-class');
		});

		it('should trigger inline onchange using function check true (checkbox)', function() {
			// given
			var $input = $('#like').styly();

			$input.attr('onchange', '$("#like").addClass("my-class")');

			spyOnEvent($input, 'change');

			// when
			$input.styly('check', true);

			// then
			expect('change').toHaveBeenTriggeredOn($input);
			expect($input).toHaveClass('my-class');
		});

		it('should trigger inline onchange using function check false (checkbox)', function() {
			// given
			var $input = $('#like').styly();

			$input.attr('onchange', '$("#like").addClass("my-class")');

			spyOnEvent($input, 'change');

			// when
			$input.styly('check', false);

			// then
			expect('change').toHaveBeenTriggeredOn($input);
			expect($input).toHaveClass('my-class');
		});

		it('should trigger binded onclick using function check true (checkbox)', function() {
			// given
			var $input = $('#like').styly();

			$input.bind('click', function() { $("#like").addClass("my-class"); });

			spyOnEvent($input, 'click');

			// when
			$input.styly('check', true);

			// then
			expect('click').toHaveBeenTriggeredOn($input);
			expect($input).toHaveClass('my-class');
		});

		it('should trigger binded onclick using function check false (checkbox)', function() {
			// given
			var $input = $('#like').styly();

			$input.bind('click', function() { $("#like").addClass("my-class"); });

			spyOnEvent($input, 'click');

			// when
			$input.styly('check', false);

			// then
			expect('click').toHaveBeenTriggeredOn($input);
			expect($input).toHaveClass('my-class');
		});

		it('should trigger binded onchange using function check true (checkbox)', function() {
			// given
			var $input = $('#like').styly();

			$input.bind('change', function() { $("#like").addClass("my-class"); });

			spyOnEvent($input, 'change');

			// when
			$input.styly('check', true);
			expect($input).toHaveClass('my-class');

			// then
			expect('change').toHaveBeenTriggeredOn($input);
		});

		it('should trigger binded onchange using function check false (checkbox)', function() {
			// given
			var $input = $('#like').styly();

			$input.bind('change', function() { $("#like").addClass("my-class"); });

			spyOnEvent($input, 'change');

			// when
			$input.styly('check', false);

			// then
			expect('change').toHaveBeenTriggeredOn($input);
			expect($input).toHaveClass('my-class');
		});

		it('should not check when it is disabled (checkbox)', function() {
			// given
			var $input = $('#like').styly(),
				$label = $input.parent().children('label');

			// when
			$input.styly('enable', false);
			$label.click();

			// then
			expect($label).toHaveClass('check-styly');
			expect($label).not.toHaveClass('check-hover');
			expect($label).not.toHaveClass('check-checked');
			expect($label).not.toHaveClass('check-hover-checked');
			expect($label).toHaveClass('check-disabled');
			expect($label).not.toHaveClass('check-disabled-checked');
			expect($input).not.toBeChecked();
			expect($input).toBeDisabled();
		});

		it('should not check when it is checked disabled (checkbox)', function() {
			// given
			var $input = $('#like').styly(),
				$label = $input.parent().children('label');

			// when
			$input.styly('check', true);
			$input.styly('enable', false);
			$label.click();

			// then
			expect($label).toHaveClass('check-styly');
			expect($label).not.toHaveClass('check-hover');
			expect($label).not.toHaveClass('check-checked');
			expect($label).not.toHaveClass('check-hover-checked');
			expect($label).not.toHaveClass('check-disabled');
			expect($label).toHaveClass('check-disabled-checked');
			expect($input).not.toBeChecked();
			expect($input).toBeDisabled();
		});

		it('should not be hovered when it is checked disabled (checkbox)', function() {
			// given
			var $input = $('#like').styly(),
				$label = $input.parent().children('label');

			// when
			$input.styly('enable', false);
			$label.mouseover();

			// then
			expect($label).toHaveClass('check-styly');
			expect($label).not.toHaveClass('check-hover');
			expect($label).not.toHaveClass('check-checked');
			expect($label).not.toHaveClass('check-hover-checked');
			expect($label).toHaveClass('check-disabled');
			expect($label).not.toHaveClass('check-disabled-checked');
			expect($input).not.toBeChecked();
			expect($input).toBeDisabled();
		});

	}); // checkbox function end.

}); // checkbox describe end.

describe('for radio (radio)', function() {

	beforeEach(function() {
		$('body').append('<label for="agree">Agree</label><input id="agree" type="radio" name="agreement" class="styly"/><label for="desagree">Desagree</label><input id="desagree" type="radio" name="agreement" class="styly"/>');
	});

	afterEach(function() {
		$('.styly').parent().remove();
	});

	describe('using radio styly', function() {

		it('should be chainable (radio)', function() {
			// given
			var $inputs		= $('.styly'),
				className	= 'my-class';

			// when
			$inputs.styly().addClass(className);

			// then
			for ( var i = 0; i < $inputs.length; i++) {
				expect($inputs.eq(i)).toHaveClass(className);
			}
		});

		it('should be wrapped (radio)', function() {
			// given
			var	$inputs = $('.styly');

			// when
			$inputs.styly();

			var $wrapper = $inputs.parent();

			// then
			for ( var i = 0; i < $inputs.length; i++) {
			    expect($wrapper.eq(i).is('div')).toBeTruthy();
			    expect($wrapper.eq(i)).toHaveClass('styly-wrapper');
			}
		});

		it('should apply checkbox normal style (radio)', function() {
			// given
			var $inputs = $('.styly');

			// when
			$inputs.styly();

			var $labels = $inputs.parent().children('label');

			// then
			for ( var i = 0; i < $inputs.length; i++) {
				expect($labels.eq(i)).toHaveClass('radio-styly');
				expect($labels.eq(i)).not.toHaveClass('radio-hover');
				expect($labels.eq(i)).not.toHaveClass('radio-checked');
				expect($labels.eq(i)).not.toHaveClass('radio-hover-checked');
				expect($labels.eq(i)).not.toHaveClass('radio-disabled');
				expect($labels.eq(i)).not.toHaveClass('radio-disabled-checked');
			}
		});

		it('should have the field hide (radio)', function() {
			// given
			var $inputs = $('.styly');

			// when
			$inputs.styly();

			// then
			for ( var i = 0; i < $inputs.length; i++) {
				expect($inputs.eq(i)).toBeHidden();
			}
		});

		it('should be hovered (radio)', function() {
			// given
			var $inputs = $('.styly').styly(),
				$labels = $inputs.parent().children('label');

			// when
			$labels.eq(0).mouseover();

			// then
			expect($labels.eq(0)).toHaveClass('radio-styly');
			expect($labels.eq(0)).toHaveClass('radio-hover');
			expect($labels.eq(0)).not.toHaveClass('radio-checked');
			expect($labels.eq(0)).not.toHaveClass('radio-hover-checked');
			expect($labels.eq(0)).not.toHaveClass('radio-disabled');
			expect($labels.eq(0)).not.toHaveClass('radio-disabled-checked');
			expect($inputs.eq(0)).not.toBeChecked();
		});

		it('should be checked (radio)', function() {
			// given
			var $inputs = $('.styly').styly(),
				$labels = $inputs.parent().children('label');

			// when
			$labels.eq(0).click();

			// then
			expect($labels.eq(0)).toHaveClass('radio-styly');
			expect($labels.eq(0)).not.toHaveClass('radio-hover');
			expect($labels.eq(0)).toHaveClass('radio-checked');
			expect($labels.eq(0)).not.toHaveClass('radio-hover-checked');
			expect($labels.eq(0)).not.toHaveClass('radio-disabled');
			expect($labels.eq(0)).not.toHaveClass('radio-disabled-checked');
			expect($inputs.eq(0)).toBeChecked();

			expect($labels.eq(1)).toHaveClass('radio-styly');
			expect($labels.eq(1)).not.toHaveClass('radio-hover');
			expect($labels.eq(1)).not.toHaveClass('radio-checked');
			expect($labels.eq(1)).not.toHaveClass('radio-hover-checked');
			expect($labels.eq(1)).not.toHaveClass('radio-disabled');
			expect($labels.eq(1)).not.toHaveClass('radio-disabled-checked');
			expect($inputs.eq(1)).not.toBeChecked();
		});

		it('should be checked -> unchecked (radio)', function() {
			// given
			var $inputs = $('.styly').styly(),
				$labels = $inputs.parent().children('label');

			// when
			$labels.eq(1).click();
			$labels.eq(0).click();

			// then
			expect($labels.eq(0)).toHaveClass('radio-styly');
			expect($labels.eq(0)).not.toHaveClass('radio-hover');
			expect($labels.eq(0)).toHaveClass('radio-checked');
			expect($labels.eq(0)).not.toHaveClass('radio-hover-checked');
			expect($labels.eq(0)).not.toHaveClass('radio-disabled');
			expect($labels.eq(0)).not.toHaveClass('radio-disabled-checked');
			expect($inputs.eq(0)).toBeChecked();

			expect($labels.eq(1)).toHaveClass('radio-styly');
			expect($labels.eq(1)).not.toHaveClass('radio-hover');
			expect($labels.eq(1)).not.toHaveClass('radio-checked');
			expect($labels.eq(1)).not.toHaveClass('radio-hover-checked');
			expect($labels.eq(1)).not.toHaveClass('radio-disabled');
			expect($labels.eq(1)).not.toHaveClass('radio-disabled-checked');
			expect($inputs.eq(1)).not.toBeChecked();
		});

		it('should be hovered -> hovered checked (radio)', function() {
			// given
			var $inputs = $('.styly').styly(),
				$labels = $inputs.parent().children('label');

			// when
			$labels.eq(0).mouseover().click();

			// then
			expect($labels.eq(0)).toHaveClass('radio-styly');
			expect($labels.eq(0)).not.toHaveClass('radio-hover');
			expect($labels.eq(0)).not.toHaveClass('radio-checked');
			expect($labels.eq(0)).toHaveClass('radio-hover-checked');
			expect($labels.eq(0)).not.toHaveClass('radio-disabled');
			expect($labels.eq(0)).not.toHaveClass('radio-disabled-checked');
			expect($inputs.eq(0)).toBeChecked();

			expect($labels.eq(1)).toHaveClass('radio-styly');
			expect($labels.eq(1)).not.toHaveClass('radio-hover');
			expect($labels.eq(1)).not.toHaveClass('radio-checked');
			expect($labels.eq(1)).not.toHaveClass('radio-hover-checked');
			expect($labels.eq(1)).not.toHaveClass('radio-disabled');
			expect($labels.eq(1)).not.toHaveClass('radio-disabled-checked');
			expect($inputs.eq(1)).not.toBeChecked();
		});

		it('should be hovered -> hovered checked -> keep hovered checked (radio)', function() {
			// given
			var $inputs = $('.styly').styly(),
				$labels = $inputs.parent().children('label');

			// when
			$labels.eq(0).mouseover().click().click();

			// then
			expect($labels.eq(0)).toHaveClass('radio-styly');
			expect($labels.eq(0)).not.toHaveClass('radio-hover');
			expect($labels.eq(0)).not.toHaveClass('radio-checked');
			expect($labels.eq(0)).toHaveClass('radio-hover-checked');
			expect($labels.eq(0)).not.toHaveClass('radio-disabled');
			expect($labels.eq(0)).not.toHaveClass('radio-disabled-checked');
			expect($inputs.eq(0)).toBeChecked();

			expect($labels.eq(1)).toHaveClass('radio-styly');
			expect($labels.eq(1)).not.toHaveClass('radio-hover');
			expect($labels.eq(1)).not.toHaveClass('radio-checked');
			expect($labels.eq(1)).not.toHaveClass('radio-hover-checked');
			expect($labels.eq(1)).not.toHaveClass('radio-disabled');
			expect($labels.eq(1)).not.toHaveClass('radio-disabled-checked');
			expect($inputs.eq(1)).not.toBeChecked();
		});

		it('should trigger inline onclick (radio)', function() {
			// given
			var $inputs = $('.styly').styly(),
				$labels = $inputs.parent().children('label');

			$inputs.attr('onclick', '$(this).addClass("my-class")');

			spyOnEvent($inputs.eq(0), 'click');
			spyOnEvent($inputs.eq(1), 'click');

			// when
			$labels.eq(0).click();
			$labels.eq(1).click();

			// then
			expect('click').toHaveBeenTriggeredOn($inputs.eq(0));
			expect('click').toHaveBeenTriggeredOn($inputs.eq(1));
			expect($inputs.eq(0)).toHaveClass('my-class');
			expect($inputs.eq(1)).toHaveClass('my-class');
		});

		it('should trigger inline onchange (radio)', function() {
			// given
			var $inputs = $('.styly').styly(),
				$labels = $inputs.parent().children('label');

			$inputs.attr('onchange', '$(this).addClass("my-class")');

			spyOnEvent($inputs.eq(0), 'change');
			spyOnEvent($inputs.eq(1), 'change');

			// when
			$labels.eq(0).click();
			$labels.eq(1).click();

			// then
			expect('change').toHaveBeenTriggeredOn($inputs.eq(0));
			expect('change').toHaveBeenTriggeredOn($inputs.eq(1));
			expect($inputs.eq(0)).toHaveClass('my-class');
			expect($inputs.eq(1)).toHaveClass('my-class');
		});

		it('should trigger binded onclick (radio)', function() {
			// given
			var $inputs = $('.styly').styly(),
				$labels = $inputs.parent().children('label');

			$inputs.bind('click', function() { $(this).addClass("my-class"); });

			spyOnEvent($inputs, 'click');

			// when
			$labels.click();

			// then
			expect('click').toHaveBeenTriggeredOn($inputs.eq(0));
			expect('click').toHaveBeenTriggeredOn($inputs.eq(1));
			expect($inputs.eq(0)).toHaveClass('my-class');
			expect($inputs.eq(1)).toHaveClass('my-class');
		});

		it('should trigger binded onchange (radio)', function() {
			// given
			var $inputs = $('.styly').styly(),
				$labels = $inputs.parent().children('label');

			$inputs.bind('change', function() { $(this).addClass("my-class"); });

			spyOnEvent($inputs.eq(0), 'change');
			spyOnEvent($inputs.eq(1), 'change');

			// when
			$labels.eq(0).click();
			$labels.eq(1).click();

			// then
			expect('change').toHaveBeenTriggeredOn($inputs.eq(0));
			expect('change').toHaveBeenTriggeredOn($inputs.eq(1));
			expect($inputs.eq(0)).toHaveClass('my-class');
			expect($inputs.eq(1)).toHaveClass('my-class');
		});

	}); // radio style end.

	describe('using radio functions', function() {

		it('should be chainable the function check (radio)', function() {
			// given
			var $inputs		= $('.styly').styly(),
				className	= 'my-class';

			// when
			$inputs.eq(0).styly('check', true).addClass(className);

			// then
		    expect($inputs.eq(0)).toHaveClass(className);
		});

		it('should be checked (radio)', function() {
			// given
			var $inputs = $('.styly').styly(),
				$labels = $inputs.parent().children('label');

			// when
			$inputs.eq(0).styly('check', true);

			// then
			expect($labels.eq(0)).toHaveClass('radio-styly');
			expect($labels.eq(0)).not.toHaveClass('radio-hover');
			expect($labels.eq(0)).toHaveClass('radio-checked');
			expect($labels.eq(0)).not.toHaveClass('radio-hover-checked');
			expect($labels.eq(0)).not.toHaveClass('radio-disabled');
			expect($labels.eq(0)).not.toHaveClass('radio-disabled-checked');
			expect($inputs.eq(0)).toBeChecked();

			expect($labels.eq(1)).toHaveClass('radio-styly');
			expect($labels.eq(1)).not.toHaveClass('radio-hover');
			expect($labels.eq(1)).not.toHaveClass('radio-checked');
			expect($labels.eq(1)).not.toHaveClass('radio-hover-checked');
			expect($labels.eq(1)).not.toHaveClass('radio-disabled');
			expect($labels.eq(1)).not.toHaveClass('radio-disabled-checked');
			expect($inputs.eq(1)).not.toBeChecked();
		});

		it('should be checked -> checked (radio)', function() {
			// given
			var $inputs = $('.styly').styly(),
				$labels = $inputs.parent().children('label');

			// when
			$inputs.eq(0).styly('check', true).styly('check', true);

			// then
			expect($labels.eq(0)).toHaveClass('radio-styly');
			expect($labels.eq(0)).not.toHaveClass('radio-hover');
			expect($labels.eq(0)).toHaveClass('radio-checked');
			expect($labels.eq(0)).not.toHaveClass('radio-hover-checked');
			expect($labels.eq(0)).not.toHaveClass('radio-disabled');
			expect($labels.eq(0)).not.toHaveClass('radio-disabled-checked');
			expect($inputs.eq(0)).toBeChecked();

			expect($labels.eq(1)).toHaveClass('radio-styly');
			expect($labels.eq(1)).not.toHaveClass('radio-hover');
			expect($labels.eq(1)).not.toHaveClass('radio-checked');
			expect($labels.eq(1)).not.toHaveClass('radio-hover-checked');
			expect($labels.eq(1)).not.toHaveClass('radio-disabled');
			expect($labels.eq(1)).not.toHaveClass('radio-disabled-checked');
			expect($inputs.eq(1)).not.toBeChecked();
		});

		it('should be checked -> unchecked (radio)', function() {
			// given
			var $inputs = $('.styly').styly(),
				$labels = $inputs.parent().children('label');

			// when
			$inputs.eq(0).styly('check', true).styly('check', false);

			// then
			expect($labels.eq(0)).toHaveClass('radio-styly');
			expect($labels.eq(0)).not.toHaveClass('radio-hover');
			expect($labels.eq(0)).not.toHaveClass('radio-checked');
			expect($labels.eq(0)).not.toHaveClass('radio-hover-checked');
			expect($labels.eq(0)).not.toHaveClass('radio-disabled');
			expect($labels.eq(0)).not.toHaveClass('radio-disabled-checked');
			expect($inputs.eq(0)).not.toBeChecked();

			expect($labels.eq(1)).toHaveClass('radio-styly');
			expect($labels.eq(1)).not.toHaveClass('radio-hover');
			expect($labels.eq(1)).not.toHaveClass('radio-checked');
			expect($labels.eq(1)).not.toHaveClass('radio-hover-checked');
			expect($labels.eq(1)).not.toHaveClass('radio-disabled');
			expect($labels.eq(1)).not.toHaveClass('radio-disabled-checked');
			expect($inputs.eq(1)).not.toBeChecked();
		});

		it('should trigger inline onclick using function check true (radio)', function() {
			// given
			var $inputs = $('.styly').styly();

			$inputs.attr('onclick', '$(this).addClass("my-class")');

			spyOnEvent($inputs.eq(0), 'click');
			spyOnEvent($inputs.eq(1), 'click');

			// when
			$inputs.eq(0).styly('check', true);
			$inputs.eq(1).styly('check', true);

			// then
			expect('click').toHaveBeenTriggeredOn($inputs.eq(0));
			expect('click').toHaveBeenTriggeredOn($inputs.eq(1));
			expect($inputs.eq(0)).toHaveClass('my-class');
			expect($inputs.eq(1)).toHaveClass('my-class');
		});

		it('should trigger inline onclick using function check false (radio)', function() {
			// given
			var $inputs = $('.styly').styly();

			$inputs.attr('onclick', '$(this).addClass("my-class")');

			spyOnEvent($inputs.eq(0), 'click');
			spyOnEvent($inputs.eq(1), 'click');

			// when
			$inputs.eq(0).styly('check', false);
			$inputs.eq(1).styly('check', false);

			// then
			expect('click').toHaveBeenTriggeredOn($inputs.eq(0));
			expect('click').toHaveBeenTriggeredOn($inputs.eq(1));
			expect($inputs.eq(0)).toHaveClass('my-class');
			expect($inputs.eq(1)).toHaveClass('my-class');
		});

		it('should trigger inline onchange using function check true (radio)', function() {
			// given
			var $inputs = $('.styly').styly();

			$inputs.attr('onchange', '$(this).addClass("my-class")');

			spyOnEvent($inputs.eq(0), 'change');
			spyOnEvent($inputs.eq(1), 'change');

			// when
			$inputs.eq(0).styly('check', true);
			$inputs.eq(1).styly('check', true);

			// then
			expect('change').toHaveBeenTriggeredOn($inputs.eq(0));
			expect('change').toHaveBeenTriggeredOn($inputs.eq(1));
			expect($inputs.eq(0)).toHaveClass('my-class');
			expect($inputs.eq(1)).toHaveClass('my-class');
		});

		it('should trigger inline onchange using function check false (radio)', function() {
			// given
			var $inputs = $('.styly').styly();

			$inputs.attr('onchange', '');

			spyOnEvent($inputs.eq(0), 'change');
			spyOnEvent($inputs.eq(1), 'change');

			// when
			$inputs.eq(0).styly('check', false);
			$inputs.eq(1).styly('check', false);

			// then
			expect('change').toHaveBeenTriggeredOn($inputs.eq(0));
			expect('change').toHaveBeenTriggeredOn($inputs.eq(1));
		});

		it('should trigger binded onclick using function check true (radio)', function() {
			// given
			var $inputs = $('.styly').styly();

			$inputs.bind('click', function() { $(this).addClass("my-class"); });

			spyOnEvent($inputs.eq(0), 'click');
			spyOnEvent($inputs.eq(1), 'click');

			// when
			$inputs.eq(0).styly('check', true);
			$inputs.eq(1).styly('check', true);

			// then
			expect('click').toHaveBeenTriggeredOn($inputs.eq(0));
			expect('click').toHaveBeenTriggeredOn($inputs.eq(1));
			expect($inputs.eq(0)).toHaveClass('my-class');
			expect($inputs.eq(1)).toHaveClass('my-class');
		});

		it('should trigger binded onclick using function check false (radio)', function() {
			// given
			var $inputs = $('.styly').styly();

			$inputs.bind('click', function() { $(this).addClass("my-class"); });

			spyOnEvent($inputs.eq(0), 'click');
			spyOnEvent($inputs.eq(1), 'click');

			// when
			$inputs.eq(0).styly('check', false);

			// then
			expect('click').toHaveBeenTriggeredOn($inputs.eq(0));
//			expect('click').not.toHaveBeenTriggeredOn($inputs.eq(1));
			expect($inputs.eq(0)).toHaveClass('my-class');
			expect($inputs.eq(1)).not.toHaveClass('my-class');
		});

		it('should trigger binded onchange using function check true (radio)', function() {
			// given
			var $inputs = $('.styly').styly();

			$inputs.bind('change', function() { $(this).addClass("my-class"); });

			spyOnEvent($inputs.eq(0), 'change');
			spyOnEvent($inputs.eq(1), 'change');

			// when
			$inputs.eq(0).styly('check', true);
			$inputs.eq(1).styly('check', true);

			// then
			expect('change').toHaveBeenTriggeredOn($inputs.eq(0));
			expect('change').toHaveBeenTriggeredOn($inputs.eq(1));
			expect($inputs.eq(0)).toHaveClass('my-class');
			expect($inputs.eq(1)).toHaveClass('my-class');
		});

		it('should trigger binded onchange using function check false (radio)', function() {
			// given
			var $inputs = $('.styly').styly();

			$inputs.bind('change', function() { $(this).addClass("my-class"); });

			spyOnEvent($inputs.eq(0), 'change');
			spyOnEvent($inputs.eq(1), 'change');

			// when
			$inputs.eq(0).styly('check', false);
			$inputs.eq(1).styly('check', false);

			// then
			expect('change').toHaveBeenTriggeredOn($inputs.eq(0));
			expect('change').toHaveBeenTriggeredOn($inputs.eq(1));
			expect($inputs.eq(0)).toHaveClass('my-class');
			expect($inputs.eq(1)).toHaveClass('my-class');
		});

		it('should not trigger when using function enable false (radio)', function() {
			// given
			var $inputs = $('.styly').styly();

			$inputs.bind('click', function() { $(this).addClass("my-class"); });

			spyOnEvent($inputs.eq(0), 'click');
			spyOnEvent($inputs.eq(1), 'click');

			// when
			$inputs.eq(0).styly('enable', false);

			// then
			expect('click').not.toHaveBeenTriggeredOn($inputs.eq(0));
			expect('click').not.toHaveBeenTriggeredOn($inputs.eq(1));
			expect($inputs.eq(0)).toBeDisabled();
			expect($inputs.eq(0)).not.toHaveClass('my-class');
			expect($inputs.eq(1)).not.toHaveClass('my-class');
		});

		it('should not trigger when using function enable true (radio)', function() {
			// given
			var $inputs = $('.styly').styly();

			$inputs.bind('click', function() { $(this).addClass("my-class"); });

			spyOnEvent($inputs.eq(0), 'click');
			spyOnEvent($inputs.eq(1), 'click');

			// when
			$inputs.eq(0).styly('enable', true);

			// then
			expect('click').not.toHaveBeenTriggeredOn($inputs.eq(0));
			expect('click').not.toHaveBeenTriggeredOn($inputs.eq(1));
			expect($inputs.eq(0)).not.toBeDisabled();
			expect($inputs.eq(0)).not.toHaveClass('my-class');
			expect($inputs.eq(1)).not.toHaveClass('my-class');
		});

		it('should not check when it is disabled (radio)', function() {
			// given
			var $inputs = $('.styly').styly(),
				$labels = $inputs.parent().children('label');

			// when
			$inputs.eq(0).styly('enable', false);
			$labels.eq(0).click();

			// then
			expect($labels).toHaveClass('radio-styly');
			expect($labels).not.toHaveClass('radio-hover');
			expect($labels).not.toHaveClass('radio-checked');
			expect($labels).not.toHaveClass('radio-hover-checked');
			expect($labels).toHaveClass('radio-disabled');
			expect($labels).not.toHaveClass('radio-disabled-checked');
			expect($inputs.eq(0)).not.toBeChecked();
			expect($inputs.eq(0)).toBeDisabled();
		});

		it('should not check when it is checked disabled (radio)', function() {
			// given
			var $inputs = $('.styly').styly(),
				$labels = $inputs.parent().children('label');

			// when
			$inputs.eq(0).styly('check', true);
			$inputs.eq(0).styly('enable', false);
			$labels.eq(0).click();

			// then
			expect($labels).toHaveClass('radio-styly');
			expect($labels).not.toHaveClass('radio-hover');
			expect($labels).not.toHaveClass('radio-checked');
			expect($labels).not.toHaveClass('radio-hover-checked');
			expect($labels).toHaveClass('radio-disabled');
			expect($labels).not.toHaveClass('radio-disabled-checked');
			expect($inputs.eq(0)).not.toBeChecked();
			expect($inputs.eq(0)).toBeDisabled();
		});

		it('should not be hovered when it is checked disabled (radio)', function() {
			// given
			var $inputs = $('.styly').styly(),
				$labels = $inputs.parent().children('label');

			// when
			$inputs.eq(0).styly('enable', false);
			$labels.eq(0).mouseover();

			// then
			expect($labels.eq(0)).toHaveClass('radio-styly');
			expect($labels.eq(0)).not.toHaveClass('radio-hover');
			expect($labels.eq(0)).not.toHaveClass('radio-checked');
			expect($labels.eq(0)).not.toHaveClass('radio-hover-checked');
			expect($labels.eq(0)).toHaveClass('radio-disabled');
			expect($labels.eq(0)).not.toHaveClass('radio-disabled-checked');
			expect($inputs.eq(0)).not.toBeChecked();
			expect($inputs.eq(0)).toBeDisabled();
		});

		it('should disable all radios', function() {
			// given
			var $inputs = $('.styly').styly(),
				$labels = $inputs.parent().children('label');

			// when
			$inputs.styly('enable', false);

			// then
			expect($labels.eq(0)).toHaveClass('radio-styly');
			expect($labels.eq(0)).not.toHaveClass('radio-hover');
			expect($labels.eq(0)).not.toHaveClass('radio-checked');
			expect($labels.eq(0)).not.toHaveClass('radio-hover-checked');
			expect($labels.eq(0)).toHaveClass('radio-disabled');
			expect($labels.eq(0)).not.toHaveClass('radio-disabled-checked');
			expect($inputs.eq(0)).not.toBeChecked();
			expect($inputs.eq(0)).toBeDisabled();

			expect($labels.eq(1)).toHaveClass('radio-styly');
			expect($labels.eq(1)).not.toHaveClass('radio-hover');
			expect($labels.eq(1)).not.toHaveClass('radio-checked');
			expect($labels.eq(1)).not.toHaveClass('radio-hover-checked');
			expect($labels.eq(1)).toHaveClass('radio-disabled');
			expect($labels.eq(1)).not.toHaveClass('radio-disabled-checked');
			expect($inputs.eq(1)).not.toBeChecked();
			expect($inputs.eq(1)).toBeDisabled();
		});

		it('should enable all radios', function() {
			// given
			var $inputs = $('.styly').styly(),
				$labels = $inputs.parent().children('label');

			// when
			$inputs.styly('enable', false).styly('enable', true);

			// then
			expect($labels.eq(0)).toHaveClass('radio-styly');
			expect($labels.eq(0)).not.toHaveClass('radio-hover');
			expect($labels.eq(0)).not.toHaveClass('radio-checked');
			expect($labels.eq(0)).not.toHaveClass('radio-hover-checked');
			expect($labels.eq(0)).not.toHaveClass('radio-disabled');
			expect($labels.eq(0)).not.toHaveClass('radio-disabled-checked');
			expect($inputs.eq(0)).not.toBeChecked();
			expect($inputs.eq(0)).not.toBeDisabled();

			expect($labels.eq(1)).toHaveClass('radio-styly');
			expect($labels.eq(1)).not.toHaveClass('radio-hover');
			expect($labels.eq(1)).not.toHaveClass('radio-checked');
			expect($labels.eq(1)).not.toHaveClass('radio-hover-checked');
			expect($labels.eq(1)).not.toHaveClass('radio-disabled');
			expect($labels.eq(1)).not.toHaveClass('radio-disabled-checked');
			expect($inputs.eq(1)).not.toBeChecked();
			expect($inputs.eq(1)).not.toBeDisabled();
		});

	}); // radio function end.

});