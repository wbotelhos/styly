describe('using checkbox style', function() {

	beforeEach(function() {
	    $('body').append('<label for="like">Like?</label><input id="like" type="checkbox" />');
	});

	afterEach(function() {
		$('#like').parent().remove();
	});

	it('should be chainable', function() {
		// given
		var $input		= $('#like'),
			className	= 'my-class';

		// when
		$input.styly().addClass(className);

		// then
	    expect($input).toHaveClass(className);
	});

	it('should be wrapped', function() {
		// given
		var	$input = $('#like');

		// when
		$input.styly();

		var $wrapper = $input.parent();

		// then
	    expect($wrapper.is('div')).toBeTruthy();
	    expect($wrapper).toHaveClass('styly-wrapper');
	});

	it('should apply checkbox normal style', function() {
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

	it('should have the field hide', function() {
		// given
		var $input = $('#like');

		// when
		$input.styly();

		// then
		expect($input).toBeHidden();
	});

	it('should be hovered', function() {
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
		expect($input).not.toHaveAttr('checked', 'checked');
	});

	it('should be checked', function() {
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
		expect($input).toHaveAttr('checked', 'checked');
	});

	it('should be checked -> unchecked', function() {
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
		expect($input).not.toHaveAttr('checked', 'checked');
	});

	it('should be hovered -> hovered checked', function() {
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
		expect($input).toHaveAttr('checked', 'checked');
	});

	it('should be hovered -> hovered checked -> hovered', function() {
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
		expect($input).not.toHaveAttr('checked', 'checked');
	});

	it('should trigger inline onclick', function() {
		// given
		var $input = $('#like').styly(),
			$label = $input.parent().children('label');

		$input.attr('onclick', '');

		spyOnEvent($input, 'click');

		// when
		$label.click();

		// then
		expect('click').toHaveBeenTriggeredOn($input);
	});

	it('should trigger inline onchange', function() {
		// given
		var $input = $('#like').styly(),
			$label = $input.parent().children('label');

		$input.attr('onchange', '');

		spyOnEvent($input, 'change');

		// when
		$label.click();

		// then
		expect('change').toHaveBeenTriggeredOn($input);
	});

	it('should trigger binded onclick', function() {
		// given
		var $input = $('#like').styly(),
			$label = $input.parent().children('label');

		$input.bind('onclick', '');

		spyOnEvent($input, 'click');

		// when
		$label.click();

		// then
		expect('click').toHaveBeenTriggeredOn($input);
	});

	it('should trigger binded onchange', function() {
		// given
		var $input = $('#like').styly(),
			$label = $input.parent().children('label');

		$input.bind('onchange', '');

		spyOnEvent($input, 'change');

		// when
		$label.click();

		// then
		expect('change').toHaveBeenTriggeredOn($input);
	});

}); // checkbox styly end.

describe('using checkbox functions', function() {

	beforeEach(function() {
	    $('body').append('<label for="like">Like?</label><input id="like" type="checkbox" />');
	});

	afterEach(function() {
		$('#like').parent().remove();
	});

	it('should be chainable the function check', function() {
		// given
		var $input		= $('#like').styly(),
			className	= 'my-class';

		// when
		$input.styly('check', true).addClass(className);

		// then
	    expect($input).toHaveClass(className);
	});

	it('should be checked', function() {
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
		expect($input).toHaveAttr('checked', 'checked');
	});

	it('should be checked -> checked', function() {
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
		expect($input).toHaveAttr('checked', 'checked');
	});

	it('should be checked -> unchecked', function() {
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
		expect($input).not.toHaveAttr('checked', 'checked');
	});

	it('should trigger inline onclick using function check true', function() {
		// given
		var $input = $('#like').styly();

		$input.attr('onclick', '');

		spyOnEvent($input, 'click');

		// when
		$input.styly('check', true);

		// then
		expect('click').toHaveBeenTriggeredOn($input);
	});

	it('should trigger inline onclick using function check false', function() {
		// given
		var $input = $('#like').styly();

		$input.attr('onclick', '');

		spyOnEvent($input, 'click');

		// when
		$input.styly('check', false);

		// then
		expect('click').toHaveBeenTriggeredOn($input);
	});

	it('should trigger inline onchange using function check true', function() {
		// given
		var $input = $('#like').styly();

		$input.attr('onchange', '');

		spyOnEvent($input, 'change');

		// when
		$input.styly('check', true);

		// then
		expect('change').toHaveBeenTriggeredOn($input);
	});

	it('should trigger inline onchange using function check false', function() {
		// given
		var $input = $('#like').styly();
		
		$input.attr('onchange', '');
		
		spyOnEvent($input, 'change');
		
		// when
		$input.styly('check', false);
		
		// then
		expect('change').toHaveBeenTriggeredOn($input);
	});

	it('should trigger inline onclick using function check true', function() {
		// given
		var $input = $('#like').styly();

		$input.attr('onclick', '');

		spyOnEvent($input, 'click');

		// when
		$input.styly('check', true);

		// then
		expect('click').toHaveBeenTriggeredOn($input);
	});

	it('should trigger inline onclick using function check false', function() {
		// given
		var $input = $('#like').styly();

		$input.attr('onclick', '');

		spyOnEvent($input, 'click');

		// when
		$input.styly('check', false);

		// then
		expect('click').toHaveBeenTriggeredOn($input);
	});

	it('should trigger inline onchange using function check true', function() {
		// given
		var $input = $('#like').styly();

		$input.attr('onchange', '');

		spyOnEvent($input, 'change');

		// when
		$input.styly('check', true);

		// then
		expect('change').toHaveBeenTriggeredOn($input);
	});

	it('should trigger inline onchange using function check false', function() {
		// given
		var $input = $('#like').styly();
		
		$input.attr('onchange', '');
		
		spyOnEvent($input, 'change');
		
		// when
		$input.styly('check', false);
		
		// then
		expect('change').toHaveBeenTriggeredOn($input);
	});
	
	it('should trigger binded onclick using function check true', function() {
		// given
		var $input = $('#like').styly();

		$input.bind('onclick', '');

		spyOnEvent($input, 'click');

		// when
		$input.styly('check', true);

		// then
		expect('click').toHaveBeenTriggeredOn($input);
	});

	it('should trigger binded onclick using function check false', function() {
		// given
		var $input = $('#like').styly();

		$input.bind('onclick', '');

		spyOnEvent($input, 'click');

		// when
		$input.styly('check', false);

		// then
		expect('click').toHaveBeenTriggeredOn($input);
	});

	it('should trigger binded onchange using function check true', function() {
		// given
		var $input = $('#like').styly();

		$input.bind('onchange', '');

		spyOnEvent($input, 'change');

		// when
		$input.styly('check', true);

		// then
		expect('change').toHaveBeenTriggeredOn($input);
	});

	it('should trigger binded onchange using function check false', function() {
		// given
		var $input = $('#like').styly();
		
		$input.bind('onchange', '');
		
		spyOnEvent($input, 'change');
		
		// when
		$input.styly('check', false);
		
		// then
		expect('change').toHaveBeenTriggeredOn($input);
	});

	it('should not check when it is disabled', function() {
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
		expect($input).not.toHaveAttr('checked', 'checked');
	});

	it('should not check when it is checked disabled', function() {
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
		expect($input).not.toHaveAttr('checked', 'checked');
	});

	it('should not be hovered when it is checked disabled', function() {
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
		expect($input).not.toHaveAttr('checked', 'checked');
	});

}); // checkbox function end.

describe('using radio styly', function() {

	beforeEach(function() {
	    $('body').append('<label for="agree">Agree</label><input id="agree" type="radio" name="agreement" class="styly"/><label for="desagree">Desagree</label><input id="desagree" type="radio" name="agreement" class="styly"/>');
	});

	afterEach(function() {
		$('.styly').parent().remove();
	});

	it('should be chainable', function() {
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

	it('should be wrapped', function() {
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

	it('should apply checkbox normal style', function() {
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

	it('should have the field hide', function() {
		// given
		var $inputs = $('.styly');

		// when
		$inputs.styly();

		// then
		for ( var i = 0; i < $inputs.length; i++) {
			expect($inputs.eq(i)).toBeHidden();
		}
	});

	it('should be hovered', function() {
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
		expect($inputs.eq(0)).not.toHaveAttr('checked', 'checked');
	});

	it('should be checked', function() {
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
		expect($inputs.eq(0)).toHaveAttr('checked', 'checked');

		expect($labels.eq(1)).toHaveClass('radio-styly');
		expect($labels.eq(1)).not.toHaveClass('radio-hover');
		expect($labels.eq(1)).not.toHaveClass('radio-checked');
		expect($labels.eq(1)).not.toHaveClass('radio-hover-checked');
		expect($labels.eq(1)).not.toHaveClass('radio-disabled');
		expect($labels.eq(1)).not.toHaveClass('radio-disabled-checked');
		
		expect($inputs.eq(1)).not.toBeChecked();
		expect($inputs.eq(1)).not.toHaveAttr('checked', 'checked');
	});

	it('should be checked -> unchecked', function() {
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
		expect($inputs.eq(0)).toHaveAttr('checked', 'checked');

		expect($labels.eq(1)).toHaveClass('radio-styly');
		expect($labels.eq(1)).not.toHaveClass('radio-hover');
		expect($labels.eq(1)).not.toHaveClass('radio-checked');
		expect($labels.eq(1)).not.toHaveClass('radio-hover-checked');
		expect($labels.eq(1)).not.toHaveClass('radio-disabled');
		expect($labels.eq(1)).not.toHaveClass('radio-disabled-checked');
		
		expect($inputs.eq(1)).not.toBeChecked();
		expect($inputs.eq(1)).not.toHaveAttr('checked', 'checked');
	});

	it('should be hovered -> hovered checked', function() {
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
		expect($inputs.eq(0)).toHaveAttr('checked', 'checked');

		expect($labels.eq(1)).toHaveClass('radio-styly');
		expect($labels.eq(1)).not.toHaveClass('radio-hover');
		expect($labels.eq(1)).not.toHaveClass('radio-checked');
		expect($labels.eq(1)).not.toHaveClass('radio-hover-checked');
		expect($labels.eq(1)).not.toHaveClass('radio-disabled');
		expect($labels.eq(1)).not.toHaveClass('radio-disabled-checked');
		
		expect($inputs.eq(1)).not.toBeChecked();
		expect($inputs.eq(1)).not.toHaveAttr('checked', 'checked');
	});

	it('should be hovered -> hovered checked -> keep hovered checked', function() {
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
		expect($inputs.eq(0)).toHaveAttr('checked', 'checked');

		expect($labels.eq(1)).toHaveClass('radio-styly');
		expect($labels.eq(1)).not.toHaveClass('radio-hover');
		expect($labels.eq(1)).not.toHaveClass('radio-checked');
		expect($labels.eq(1)).not.toHaveClass('radio-hover-checked');
		expect($labels.eq(1)).not.toHaveClass('radio-disabled');
		expect($labels.eq(1)).not.toHaveClass('radio-disabled-checked');
		
		expect($inputs.eq(1)).not.toBeChecked();
		expect($inputs.eq(1)).not.toHaveAttr('checked', 'checked');
	});

	it('should trigger inline onclick', function() {
		// given
		var $inputs = $('.styly').styly(),
			$labels = $inputs.parent().children('label');

		$inputs.attr('onclick', '');

		spyOnEvent($inputs.eq(0), 'click');
		spyOnEvent($inputs.eq(1), 'click');

		// when
		$labels.eq(0).click();
		$labels.eq(1).click();

		// then
		expect('click').toHaveBeenTriggeredOn($inputs.eq(0));
		expect('click').toHaveBeenTriggeredOn($inputs.eq(1));
	});

	it('should trigger inline onchange', function() {
		// given
		var $inputs = $('.styly').styly(),
			$labels = $inputs.parent().children('label');

		$inputs.eq(0).attr('onchange', '');
		$inputs.eq(1).attr('onchange', '');

		spyOnEvent($inputs.eq(0), 'change');
		spyOnEvent($inputs.eq(1), 'change');

		// when
		$labels.eq(0).click();
		$labels.eq(1).click();

		// then
		expect('change').toHaveBeenTriggeredOn($inputs.eq(0));
		expect('change').toHaveBeenTriggeredOn($inputs.eq(1));
	});

	it('should trigger binded onclick', function() {
		// given
		var $inputs = $('.styly').styly(),
			$labels = $inputs.parent().children('label');

		$inputs.bind('onclick', '');

		spyOnEvent($inputs, 'click');

		// when
		$labels.click();

		// then
		expect('click').toHaveBeenTriggeredOn($inputs);
	});

	it('should trigger binded onchange', function() {
		// given
		var $inputs = $('.styly').styly(),
			$labels = $inputs.parent().children('label');

		$inputs.eq(0).bind('onchange', '');
		$inputs.eq(1).bind('onchange', '');

		spyOnEvent($inputs.eq(0), 'change');
		spyOnEvent($inputs.eq(1), 'change');

		// when
		$labels.eq(0).click();
		$labels.eq(1).click();

		// then
		expect('change').toHaveBeenTriggeredOn($inputs.eq(0));
		expect('change').toHaveBeenTriggeredOn($inputs.eq(1));
	});

}); // radio style end.