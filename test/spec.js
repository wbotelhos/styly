describe('Using checkbox', function() {

	beforeEach(function() {
		$('body')
		.append('<label for="like">Like?</label><input id="like" type="checkbox" class="checkbox" />')
		.append('<label for="dislike">Dislike?</label><input id="dislike" type="checkbox" class="checkbox" />');
	});

	afterEach(function() {
		$('.checkbox').parent().remove();
	});

	it ('should chainable', function() {
		// given
		var inputs		= $('.checkbox'),
			className	= 'my-class';

		// when
		inputs.styly().addClass(className);

		// then
	    expect(inputs.eq(0)).toHaveClass(className);
	    expect(inputs.eq(1)).toHaveClass(className);
	});

	it ('should wrapped', function() {
		// given
		var	inputs = $('.checkbox');

		// when
		inputs.styly();

		var $wrappers = inputs.parent();

		// then
	    expect($wrappers.eq(0).is('div')).toBeTruthy();
	    expect($wrappers.eq(0)).toHaveClass('styly-checkbox');

	    expect($wrappers.eq(1).is('div')).toBeTruthy();
	    expect($wrappers.eq(1)).toHaveClass('styly-checkbox');
	});

	it ('should normal', function() {
		// given
		var inputs = $('.checkbox');

		// when
		inputs.styly();

		var labels = inputs.parent().children('label');

		// then
		expect(labels.eq(0)).toHaveClass('styly-unchecked');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-checked');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(0)).not.toBeChecked();
		expect(inputs.eq(0)).not.toBeDisabled();

		expect(labels.eq(1)).toHaveClass('styly-unchecked');
		expect(labels.eq(1)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(1)).not.toHaveClass('styly-checked');
		expect(labels.eq(1)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(1)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(1)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(1)).not.toBeChecked();
		expect(inputs.eq(1)).not.toBeDisabled();
	});

	it ('should have the field hide', function() {
		// given
		var inputs = $('.checkbox');

		// when
		inputs.styly();

		// then
		expect(inputs.eq(0)).toBeHidden();
		expect(inputs.eq(1)).toBeHidden();
	});

	it ('should hovered', function() {
		// given
		var inputs = $('.checkbox').styly(),
			labels = inputs.parent().children('label');

		// when
		labels.mouseover();

		// then
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked');
		expect(labels.eq(0)).toHaveClass('styly-unchecked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-checked');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(0)).not.toBeChecked();
		expect(inputs.eq(0)).not.toBeDisabled();

		expect(labels.eq(1)).not.toHaveClass('styly-unchecked');
		expect(labels.eq(1)).toHaveClass('styly-unchecked-hover');
		expect(labels.eq(1)).not.toHaveClass('styly-checked');
		expect(labels.eq(1)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(1)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(1)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(1)).not.toBeChecked();
		expect(inputs.eq(1)).not.toBeDisabled();
	});

	it ('should checked', function() {
		// given
		var inputs = $('.checkbox').styly(),
			labels = inputs.parent().children('label');

		// when
		labels.eq(0).click();

		// then
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(0)).toHaveClass('styly-checked');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(0)).toBeChecked();
		expect(inputs.eq(0)).not.toBeDisabled();

		expect(labels.eq(1)).toHaveClass('styly-unchecked');
		expect(labels.eq(1)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(1)).not.toHaveClass('styly-checked');
		expect(labels.eq(1)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(1)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(1)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(1)).not.toBeChecked();
		expect(inputs.eq(1)).not.toBeDisabled();
	});

	it ('should checked -> normal', function() {
		// given
		var inputs = $('.checkbox').styly(),
			labels = inputs.parent().children('label');

		// when
		labels.eq(0).click().click();

		// then
		expect(labels.eq(0)).toHaveClass('styly-unchecked');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-checked');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(0)).not.toBeChecked();
		expect(inputs.eq(0)).not.toBeDisabled();

		expect(labels.eq(1)).toHaveClass('styly-unchecked');
		expect(labels.eq(1)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(1)).not.toHaveClass('styly-checked');
		expect(labels.eq(1)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(1)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(1)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(1)).not.toBeChecked();
		expect(inputs.eq(1)).not.toBeDisabled();
	});

	it ('should hovered -> hovered checked', function() {
		// given
		var inputs = $('.checkbox').styly(),
			labels = inputs.parent().children('label');

		// when
		labels.eq(0).mouseover().click();

		// then
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-checked');
		expect(labels.eq(0)).toHaveClass('styly-checked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(0)).toBeChecked();
		expect(inputs.eq(0)).not.toBeDisabled();

		expect(labels.eq(1)).toHaveClass('styly-unchecked');
		expect(labels.eq(1)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(1)).not.toHaveClass('styly-checked');
		expect(labels.eq(1)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(1)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(1)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(1)).not.toBeChecked();
		expect(inputs.eq(1)).not.toBeDisabled();
	});

	it ('should hovered -> hovered checked -> hovered', function() {
		// given
		var inputs = $('.checkbox').styly(),
			labels = inputs.parent().children('label');

		// when
		labels.eq(0).mouseover().click().click();

		// then
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked');
		expect(labels.eq(0)).toHaveClass('styly-unchecked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-checked');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(0)).not.toBeChecked();
		expect(inputs.eq(0)).not.toBeDisabled();

		expect(labels.eq(1)).toHaveClass('styly-unchecked');
		expect(labels.eq(1)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(1)).not.toHaveClass('styly-checked');
		expect(labels.eq(1)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(1)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(1)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(1)).not.toBeChecked();
		expect(inputs.eq(1)).not.toBeDisabled();
	});

	it ('should trigger inline onclick', function() {
		// given
		var inputs = $('.checkbox').styly(),
			labels = inputs.parent().children('label');

		inputs.eq(0).attr('onclick', '$(".checkbox").addClass("my-class")');

		spyOnEvent(inputs.eq(0), 'click');

		// when
		labels.eq(0).click();

		// then
		expect('click').toHaveBeenTriggeredOn(inputs.eq(0));
		expect(inputs.eq(0)).toHaveClass('my-class');
	});

	it ('should trigger inline onchange', function() {
		// given
		var inputs = $('.checkbox').styly(),
			labels = inputs.parent().children('label');

		inputs.eq(0).attr('onchange', '$(".checkbox").addClass("my-class")');

		spyOnEvent(inputs.eq(0), 'change');

		// when
		labels.eq(0).click();

		// then
		expect('change').toHaveBeenTriggeredOn(inputs.eq(0));
		expect(inputs.eq(0)).toHaveClass('my-class');
	});

	it ('should trigger binded onclick', function() {
		// given
		var inputs = $('.checkbox').styly(),
			labels = inputs.parent().children('label');

		inputs.eq(0).bind('click', function() { $(".checkbox").addClass("my-class"); });

		spyOnEvent(inputs.eq(0), 'click');

		// when
		labels.eq(0).click();

		// then
		expect('click').toHaveBeenTriggeredOn(inputs.eq(0));
		expect(inputs.eq(0)).toHaveClass('my-class');
	});

	it ('should trigger binded onchange', function() {
		// given
		var inputs = $('.checkbox').styly(),
			labels = inputs.eq(0).parent().children('label');

		inputs.eq(0).bind('change', function() { $(".checkbox").addClass("my-class"); });

		spyOnEvent(inputs.eq(0), 'change');

		// when
		labels.eq(0).click();

		// then
		expect('change').toHaveBeenTriggeredOn(inputs.eq(0));
		expect(inputs.eq(0)).toHaveClass('my-class');
	});

	it ('should disable all checkboxes', function() {
		// given
		var inputs = $('.checkbox').styly(),
			labels = inputs.prev('label');

		// when
		inputs.styly('enable', false);

		// then
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-checked');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(0)).toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(0)).not.toBeChecked();
		expect(inputs.eq(0)).toBeDisabled();

		expect(labels.eq(1)).not.toHaveClass('styly-unchecked');
		expect(labels.eq(1)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(1)).not.toHaveClass('styly-checked');
		expect(labels.eq(1)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(1)).toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(1)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(1)).not.toBeChecked();
		expect(inputs.eq(1)).toBeDisabled();
	});

	it ('should function disable', function() {
		// given
		var inputs = $('.checkbox').styly(),
			labels = inputs.prev('label');

		// when
		inputs.styly('enable', false);

		// then
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-checked');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(0)).toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(0)).not.toBeChecked();
		expect(inputs.eq(0)).toBeDisabled();

		expect(labels.eq(1)).not.toHaveClass('styly-unchecked');
		expect(labels.eq(1)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(1)).not.toHaveClass('styly-checked');
		expect(labels.eq(1)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(1)).toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(1)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(1)).not.toBeChecked();
		expect(inputs.eq(1)).toBeDisabled();
	});

	it ('should function disable -> enable', function() {
		// given
		var inputs = $('.checkbox').styly(),
			labels = inputs.prev('label');

		// when
		inputs.styly('enable', false).styly('enable', true);

		// then
		expect(labels.eq(0)).toHaveClass('styly-unchecked');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-checked');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(0)).not.toBeChecked();
		expect(inputs.eq(0)).not.toBeDisabled();

		expect(labels.eq(1)).toHaveClass('styly-unchecked');
		expect(labels.eq(1)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(1)).not.toHaveClass('styly-checked');
		expect(labels.eq(1)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(1)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(1)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(1)).not.toBeChecked();
		expect(inputs.eq(1)).not.toBeDisabled();
	});

	it ('should chainable function check', function() {
		// given
		var inputs		= $('.checkbox').styly(),
			className	= 'my-class';

		// when
		inputs.eq(0).styly('check', true).addClass(className);

		// then
	    expect(inputs.eq(0)).toHaveClass(className);
	});

	it ('[checkbox function] should check', function() {
		// given
		var inputs = $('.checkbox').styly(),
			labels = inputs.prev('label');

		// when
		inputs.eq(0).styly('check', true);

		// then
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(0)).toHaveClass('styly-checked');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(0)).toBeChecked();
		expect(inputs.eq(0)).not.toBeDisabled();
	});

	it ('[checkbox function] should check -> check', function() {
		// given
		var inputs = $('.checkbox').styly(),
			labels = inputs.prev('label');

		// when
		inputs.eq(0).styly('check', true).styly('check', true);

		// then
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(0)).toHaveClass('styly-checked');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(0)).toBeChecked();
		expect(inputs.eq(0)).not.toBeDisabled();
	});

	it ('should function check -> uncheck', function() {
		// given
		var inputs = $('.checkbox').styly(),
			labels = inputs.eq(0).parent().children('label');

		// when
		inputs.eq(0).styly('check', true).styly('check', false);

		// then
		expect(labels.eq(0)).toHaveClass('styly-unchecked');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-checked');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(0)).not.toBeChecked();
	});

	it ('[checkbox function] should check -> disable', function() {
		// given
		var inputs = $('.checkbox').styly(),
			labels = inputs.prev('label');

		// when
		inputs.eq(0).styly('check', true).styly('enable', false);

		// then
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-checked');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(0)).toHaveClass('styly-checked-disabled');
		expect(inputs.eq(0)).toBeChecked();
		expect(inputs.eq(0)).toBeDisabled();
	});

	it ('should function trigger inline onclick on check', function() {
		// given
		var inputs = $('.checkbox').styly();

		inputs.eq(0).attr('onclick', '$(".checkbox").addClass("my-class")');

		spyOnEvent(inputs.eq(0), 'click');

		// when
		inputs.eq(0).styly('check', true);

		// then
		expect('click').toHaveBeenTriggeredOn(inputs.eq(0));
		expect(inputs.eq(0)).toHaveClass('my-class');
	});

	it ('should function trigger inline onclick on uncheck', function() {
		// given
		var inputs = $('.checkbox').styly();

		inputs.eq(0).attr('onclick', '$(".checkbox").addClass("my-class")');

		spyOnEvent(inputs.eq(0), 'click');

		// when
		inputs.eq(0).styly('check', false);

		// then
		expect('click').toHaveBeenTriggeredOn(inputs.eq(0));
		expect(inputs.eq(0)).toHaveClass('my-class');
	});

	it ('should function trigger inline onchange on check', function() {
		// given
		var inputs = $('.checkbox').styly();

		inputs.eq(0).attr('onchange', '$(".checkbox").addClass("my-class")');

		spyOnEvent(inputs.eq(0), 'change');

		// when
		inputs.eq(0).styly('check', true);

		// then
		expect('change').toHaveBeenTriggeredOn(inputs.eq(0));
		expect(inputs.eq(0)).toHaveClass('my-class');
	});

	it ('should function trigger inline onchange on uncheck', function() {
		// given
		var inputs = $('.checkbox').styly();

		inputs.eq(0).attr('onchange', '$(".checkbox").addClass("my-class")');

		spyOnEvent(inputs.eq(0), 'change');

		// when
		inputs.eq(0).styly('check', false);

		// then
		expect('change').toHaveBeenTriggeredOn(inputs.eq(0));
		expect(inputs.eq(0)).toHaveClass('my-class');
	});

	it ('should function trigger binded onclick on check', function() {
		// given
		var inputs = $('.checkbox').styly();

		inputs.eq(0).bind('click', function() { $(".checkbox").addClass("my-class"); });

		spyOnEvent(inputs.eq(0), 'click');

		// when
		inputs.eq(0).styly('check', true);

		// then
		expect('click').toHaveBeenTriggeredOn(inputs.eq(0));
		expect(inputs.eq(0)).toHaveClass('my-class');
	});

	it ('should function trigger binded onclick on uncheck', function() {
		// given
		var inputs = $('.checkbox').styly();

		inputs.eq(0).bind('click', function() { $(".checkbox").addClass("my-class"); });

		spyOnEvent(inputs.eq(0), 'click');

		// when
		inputs.eq(0).styly('check', false);

		// then
		expect('click').toHaveBeenTriggeredOn(inputs.eq(0));
		expect(inputs.eq(0)).toHaveClass('my-class');
	});

	it ('should function trigger binded onchange on check', function() {
		// given
		var inputs = $('.checkbox').styly();

		inputs.eq(0).bind('change', function() { $(".checkbox").addClass("my-class"); });

		spyOnEvent(inputs.eq(0), 'change');

		// when
		inputs.eq(0).styly('check', true);
		expect(inputs.eq(0)).toHaveClass('my-class');

		// then
		expect('change').toHaveBeenTriggeredOn(inputs.eq(0));
	});

	it ('should function trigger binded onchange on uncheck', function() {
		// given
		var inputs = $('.checkbox').styly();

		inputs.eq(0).bind('change', function() { $(".checkbox").addClass("my-class"); });

		spyOnEvent(inputs.eq(0), 'change');

		// when
		inputs.eq(0).styly('check', false);

		// then
		expect('change').toHaveBeenTriggeredOn(inputs.eq(0));
		expect(inputs.eq(0)).toHaveClass('my-class');
	});

	it ('should function not check when disabled', function() {
		// given
		var inputs = $('.checkbox').styly(),
			labels = inputs.eq(0).parent().children('label');

		// when
		inputs.eq(0).styly('enable', false);
		labels.eq(0).click();

		// then
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-checked');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(0)).toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(0)).not.toBeChecked();
		expect(inputs.eq(0)).toBeDisabled();
	});

	it ('[checkbox] should not uncheck when checked disabled', function() {
		// given
		var inputs = $('.checkbox').styly(),
			labels = inputs.prev('label');

		// when
		inputs.eq(0).styly('check', true).styly('enable', false);
		labels.eq(0).click();

		// then
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-checked');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(0)).toHaveClass('styly-checked-disabled');
		expect(inputs.eq(0)).toBeChecked();
		expect(inputs.eq(0)).toBeDisabled();
	});

	it ('should not hover when disabled', function() {
		// given
		var inputs = $('.checkbox').styly(),
			labels = inputs.eq(0).parent().children('label');

		// when
		inputs.eq(0).styly('enable', false);
		labels.eq(0).mouseover();

		// then
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-checked');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(0)).toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(0)).not.toBeChecked();
		expect(inputs.eq(0)).toBeDisabled();
	});

	it ('[checkbox] should not hover when checked disabled', function() {
		// given
		var inputs = $('.checkbox').styly(),
			labels = inputs.prev('label');

		// when
		inputs.eq(0).styly('check', true).styly('enable', false);
		labels.eq(0).mouseover();

		// then
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-checked');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(0)).toHaveClass('styly-checked-disabled');
		expect(inputs.eq(0)).toBeChecked();
		expect(inputs.eq(0)).toBeDisabled();
	});

	it ('should uncheck all before check someone', function() {
		// given
		var inputs = $('.checkbox').styly({ uncheckAll: true }),
			labels = inputs.prev('label');

		// when
		labels.eq(0).click();
		labels.eq(1).click();

		// then
		expect(labels.eq(0)).toHaveClass('styly-unchecked');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-checked');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(0)).not.toBeChecked();
		expect(inputs.eq(0)).not.toBeDisabled();

		expect(labels.eq(1)).not.toHaveClass('styly-unchecked');
		expect(labels.eq(1)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(1)).toHaveClass('styly-checked');
		expect(labels.eq(1)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(1)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(1)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(1)).toBeChecked();
		expect(inputs.eq(1)).not.toBeDisabled();
	});

	it ('should keep disabled when uncheck all on disabled', function() {
		// given
		var inputs = $('.checkbox').styly({ uncheckAll: true }),
			labels = inputs.prev('label');

		// when
		inputs.eq(0).styly('enable', false);
		labels.eq(1).click();

		// then
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-checked');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(0)).toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(0)).not.toBeChecked();
		expect(inputs.eq(0)).toBeDisabled();

		expect(labels.eq(1)).not.toHaveClass('styly-unchecked');
		expect(labels.eq(1)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(1)).toHaveClass('styly-checked');
		expect(labels.eq(1)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(1)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(1)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(1)).toBeChecked();
		expect(inputs.eq(1)).not.toBeDisabled();
	});

	it ('should keep checked disabled when uncheck all on checked disabled', function() {
		// given
		var inputs = $('.checkbox').styly({ uncheckAll: true }),
			labels = inputs.prev('label');

		// when
		labels.eq(0).click();
		inputs.eq(0).styly('enable', false);
		labels.eq(1).click();

		// then
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-checked');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(0)).toHaveClass('styly-checked-disabled');
		expect(inputs.eq(0)).toBeChecked();
		expect(inputs.eq(0)).toBeDisabled();

		expect(labels.eq(1)).not.toHaveClass('styly-unchecked');
		expect(labels.eq(1)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(1)).toHaveClass('styly-checked');
		expect(labels.eq(1)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(1)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(1)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(1)).toBeChecked();
		expect(inputs.eq(1)).not.toBeDisabled();
	});

	it ('[checkbox] should start checked', function() {
		// given
		var inputs = $('.checkbox').attr('checked', 'checked');

		// when
		inputs.styly();

		// then
		var label = inputs.prev('label');

		expect(label).not.toHaveClass('styly-unchecked');
		expect(label).not.toHaveClass('styly-unchecked-hover');
		expect(label).toHaveClass('styly-checked');
		expect(label).not.toHaveClass('styly-checked-hover');
		expect(label).not.toHaveClass('styly-unchecked-disabled');
		expect(label).not.toHaveClass('styly-checked-disabled');
		expect(inputs).toBeChecked();
		expect(inputs).not.toBeDisabled();
	});

	it ('[checkbox] should start disabled', function() {
		// given
		var inputs = $('.checkbox').attr('disabled', 'disabled');

		// when
		inputs.styly();

		// then
		var label = inputs.prev('label');

		expect(label).not.toHaveClass('styly-unchecked');
		expect(label).not.toHaveClass('styly-unchecked-hover');
		expect(label).not.toHaveClass('styly-checked');
		expect(label).not.toHaveClass('styly-checked-hover');
		expect(label).toHaveClass('styly-unchecked-disabled');
		expect(label).not.toHaveClass('styly-checked-disabled');
		expect(inputs).not.toBeChecked();
		expect(inputs).toBeDisabled();
	});

	it ('[checkbox] should start checked disabled', function() {
		// given
		var inputs = $('.checkbox').attr('checked', 'checked').attr('disabled', 'disabled');

		// when
		inputs.styly();

		// then
		var label = inputs.prev('label');

		expect(label).not.toHaveClass('styly-unchecked');
		expect(label).not.toHaveClass('styly-unchecked-hover');
		expect(label).not.toHaveClass('styly-checked');
		expect(label).not.toHaveClass('styly-checked-hover');
		expect(label).not.toHaveClass('styly-unchecked-disabled');
		expect(label).toHaveClass('styly-checked-disabled');
		expect(inputs).toBeChecked();
		expect(inputs).toBeDisabled();
	});

}); 

describe('Using radio', function() {

	beforeEach(function() {
		$('body')
		.append('<label for="agree">Agree</label><input id="agree" type="radio" name="agreement" class="radio" />')
		.append('<label for="desagree">Desagree</label><input id="desagree" type="radio" name="agreement" class="radio" />');
	});

	afterEach(function() {
		$('.radio').parent().remove();
	});

	it ('should chainable', function() {
		// given
		var inputs		= $('.radio'),
			className	= 'my-class';

		// when
		inputs.styly().addClass(className);

		// then
	    expect(inputs.eq(0)).toHaveClass(className);
	    expect(inputs.eq(1)).toHaveClass(className);
	});

	it ('should wrapped', function() {
		// given
		var	inputs = $('.radio');

		// when
		inputs.styly();

		var $wrappers = inputs.parent();

		// then
	    expect($wrappers.eq(0).is('div')).toBeTruthy();
	    expect($wrappers.eq(0)).toHaveClass('styly-radio');

	    expect($wrappers.eq(1).is('div')).toBeTruthy();
	    expect($wrappers.eq(1)).toHaveClass('styly-radio');
	});

	it ('should normal', function() {
		// given
		var inputs = $('.radio');

		// when
		inputs.styly();

		var labels = inputs.parent().children('label');

		// then
		expect(labels.eq(0)).toHaveClass('styly-unchecked');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-checked');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(0)).not.toBeChecked();
		expect(inputs.eq(0)).not.toBeDisabled();

		expect(labels.eq(1)).toHaveClass('styly-unchecked');
		expect(labels.eq(1)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(1)).not.toHaveClass('styly-checked');
		expect(labels.eq(1)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(1)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(1)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(1)).not.toBeChecked();
		expect(inputs.eq(1)).not.toBeDisabled();
	});

	it ('should have the field hide', function() {
		// given
		var inputs = $('.radio');

		// when
		inputs.styly();

		// then
		expect(inputs.eq(0)).toBeHidden();
		expect(inputs.eq(1)).toBeHidden();
	});

	it ('should hovered', function() {
		// given
		var inputs = $('.radio').styly(),
			labels = inputs.parent().children('label');

		// when
		labels.mouseover();

		// then
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked');
		expect(labels.eq(0)).toHaveClass('styly-unchecked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-checked');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(0)).not.toBeChecked();
		expect(inputs.eq(0)).not.toBeDisabled();

		expect(labels.eq(1)).not.toHaveClass('styly-unchecked');
		expect(labels.eq(1)).toHaveClass('styly-unchecked-hover');
		expect(labels.eq(1)).not.toHaveClass('styly-checked');
		expect(labels.eq(1)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(1)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(1)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(1)).not.toBeChecked();
		expect(inputs.eq(1)).not.toBeDisabled();
	});

	it ('should checked', function() {
		// given
		var inputs = $('.radio').styly(),
			labels = inputs.parent().children('label');

		// when
		labels.eq(0).click();

		// then
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(0)).toHaveClass('styly-checked');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(0)).toBeChecked();
		expect(inputs.eq(0)).not.toBeDisabled();

		expect(labels.eq(1)).toHaveClass('styly-unchecked');
		expect(labels.eq(1)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(1)).not.toHaveClass('styly-checked');
		expect(labels.eq(1)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(1)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(1)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(1)).not.toBeChecked();
		expect(inputs.eq(1)).not.toBeDisabled();
	});

	it ('should checked -> unchecked', function() {
		// given
		var inputs = $('.radio').styly(),
			labels = inputs.parent().children('label');

		// when
		labels.eq(1).click();
		labels.eq(0).click();

		// then
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(0)).toHaveClass('styly-checked');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(0)).toBeChecked();
		expect(inputs.eq(1)).not.toBeDisabled();

		expect(labels.eq(1)).toHaveClass('styly-unchecked');
		expect(labels.eq(1)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(1)).not.toHaveClass('styly-checked');
		expect(labels.eq(1)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(1)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(1)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(1)).not.toBeChecked();
		expect(inputs.eq(1)).not.toBeDisabled();
	});

	it ('should hovered -> hovered checked', function() {
		// given
		var inputs = $('.radio').styly(),
			labels = inputs.parent().children('label');

		// when
		labels.eq(0).mouseover().click();

		// then
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-checked');
		expect(labels.eq(0)).toHaveClass('styly-checked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(0)).toBeChecked();
		expect(inputs.eq(0)).not.toBeDisabled();

		expect(labels.eq(1)).toHaveClass('styly-unchecked');
		expect(labels.eq(1)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(1)).not.toHaveClass('styly-checked');
		expect(labels.eq(1)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(1)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(1)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(1)).not.toBeChecked();
		expect(inputs.eq(1)).not.toBeDisabled();
	});

	it ('should hovered -> hovered checked -> hovered checked', function() {
		// given
		var inputs = $('.radio').styly(),
			labels = inputs.parent().children('label');

		// when
		labels.eq(0).mouseover().click().click();

		// then
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-checked');
		expect(labels.eq(0)).toHaveClass('styly-checked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(0)).toBeChecked();
		expect(inputs.eq(0)).not.toBeDisabled();

		expect(labels.eq(1)).toHaveClass('styly-unchecked');
		expect(labels.eq(1)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(1)).not.toHaveClass('styly-checked');
		expect(labels.eq(1)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(1)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(1)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(1)).not.toBeChecked();
		expect(inputs.eq(1)).not.toBeDisabled();
	});

	it ('should trigger inline onclick', function() {
		// given
		var inputs = $('.radio').styly(),
			labels = inputs.parent().children('label');

		inputs.attr('onclick', '$(this).addClass("my-class")');

		spyOnEvent(inputs.eq(0), 'click');
		spyOnEvent(inputs.eq(1), 'click');

		// when
		labels.eq(0).click();
		labels.eq(1).click();

		// then
		expect('click').toHaveBeenTriggeredOn(inputs.eq(0));
		expect('click').toHaveBeenTriggeredOn(inputs.eq(1));
		expect(inputs.eq(0)).toHaveClass('my-class');
		expect(inputs.eq(1)).toHaveClass('my-class');
	});

	it ('should trigger inline onchange', function() {
		// given
		var inputs = $('.radio').styly(),
			labels = inputs.parent().children('label');

		inputs.attr('onchange', '$(this).addClass("my-class")');

		spyOnEvent(inputs.eq(0), 'change');
		spyOnEvent(inputs.eq(1), 'change');

		// when
		labels.eq(0).click();
		labels.eq(1).click();

		// then
		expect('change').toHaveBeenTriggeredOn(inputs.eq(0));
		expect('change').toHaveBeenTriggeredOn(inputs.eq(1));
		expect(inputs.eq(0)).toHaveClass('my-class');
		expect(inputs.eq(1)).toHaveClass('my-class');
	});

	it ('should trigger binded onclick', function() {
		// given
		var inputs = $('.radio').styly(),
			labels = inputs.parent().children('label');

		inputs.bind('click', function() { $(this).addClass('my-class'); });

		spyOnEvent(inputs, 'click');

		// when
		labels.click();

		// then
		expect('click').toHaveBeenTriggeredOn(inputs.eq(0));
		expect('click').toHaveBeenTriggeredOn(inputs.eq(1));
		expect(inputs.eq(0)).toHaveClass('my-class');
		expect(inputs.eq(1)).toHaveClass('my-class');
	});

	it ('should trigger binded onchange', function() {
		// given
		var inputs = $('.radio').styly(),
			labels = inputs.parent().children('label');

		inputs.bind('change', function() { $(this).addClass('my-class'); });

		spyOnEvent(inputs.eq(0), 'change');
		spyOnEvent(inputs.eq(1), 'change');

		// when
		labels.eq(0).click();
		labels.eq(1).click();

		// then
		expect('change').toHaveBeenTriggeredOn(inputs.eq(0));
		expect('change').toHaveBeenTriggeredOn(inputs.eq(1));
		expect(inputs.eq(0)).toHaveClass('my-class');
		expect(inputs.eq(1)).toHaveClass('my-class');
	});

	it ('should function chainable the function check', function() {
		// given
		var inputs		= $('.radio').styly(),
			className	= 'my-class';

		// when
		inputs.eq(0).styly('check', true).addClass(className);

		// then
	    expect(inputs.eq(0)).toHaveClass(className);
	});

	it ('[radio function] should check', function() {
		// given
		var inputs = $('.radio').styly(),
			labels = inputs.prev('label');

		// when
		inputs.eq(0).styly('check', true);

		// then
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(0)).toHaveClass('styly-checked');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(0)).toBeChecked();
		expect(inputs.eq(0)).not.toBeDisabled();

		expect(labels.eq(1)).toHaveClass('styly-unchecked');
		expect(labels.eq(1)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(1)).not.toHaveClass('styly-checked');
		expect(labels.eq(1)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(1)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(1)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(1)).not.toBeChecked();
		expect(inputs.eq(1)).not.toBeDisabled();
	});

	it ('[radio function] should check -> check', function() {
		// given
		var inputs = $('.radio').styly(),
			labels = inputs.prev('label');

		// when
		inputs.eq(0).styly('check', true).styly('check', true);

		// then
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(0)).toHaveClass('styly-checked');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(0)).toBeChecked();
		expect(inputs.eq(0)).not.toBeDisabled();

		expect(labels.eq(1)).toHaveClass('styly-unchecked');
		expect(labels.eq(1)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(1)).not.toHaveClass('styly-checked');
		expect(labels.eq(1)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(1)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(1)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(1)).not.toBeChecked();
		expect(inputs.eq(1)).not.toBeDisabled();
	});

	it ('[radio function] should check -> uncheck', function() {
		// given
		var inputs = $('.radio').styly(),
			labels = inputs.prev('label');

		// when
		inputs.eq(0).styly('check', true).styly('check', false);

		// then
		expect(labels.eq(0)).toHaveClass('styly-unchecked');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-checked');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(0)).not.toBeChecked();
		expect(inputs.eq(0)).not.toBeDisabled();

		expect(labels.eq(1)).toHaveClass('styly-unchecked');
		expect(labels.eq(1)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(1)).not.toHaveClass('styly-checked');
		expect(labels.eq(1)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(1)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(1)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(1)).not.toBeChecked();
		expect(inputs.eq(1)).not.toBeDisabled();
	});

	it ('should function trigger inline onclick on check', function() {
		// given
		var inputs = $('.radio').styly();

		inputs.attr('onclick', '$(this).addClass("my-class")');

		spyOnEvent(inputs.eq(0), 'click');
		spyOnEvent(inputs.eq(1), 'click');

		// when
		inputs.eq(0).styly('check', true);
		inputs.eq(1).styly('check', true);

		// then
		expect('click').toHaveBeenTriggeredOn(inputs.eq(0));
		expect('click').toHaveBeenTriggeredOn(inputs.eq(1));
		expect(inputs.eq(0)).toHaveClass('my-class');
		expect(inputs.eq(1)).toHaveClass('my-class');
	});

	it ('should function trigger inline onclick on uncheck', function() {
		// given
		var inputs = $('.radio').styly();

		inputs.attr('onclick', '$(this).addClass("my-class")');

		spyOnEvent(inputs.eq(0), 'click');
		spyOnEvent(inputs.eq(1), 'click');

		// when
		inputs.eq(0).styly('check', false);
		inputs.eq(1).styly('check', false);

		// then
		expect('click').toHaveBeenTriggeredOn(inputs.eq(0));
		expect('click').toHaveBeenTriggeredOn(inputs.eq(1));
		expect(inputs.eq(0)).toHaveClass('my-class');
		expect(inputs.eq(1)).toHaveClass('my-class');
	});

	it ('should function trigger inline onchange on check', function() {
		// given
		var inputs = $('.radio').styly();

		inputs.attr('onchange', '$(this).addClass("my-class")');

		spyOnEvent(inputs.eq(0), 'change');
		spyOnEvent(inputs.eq(1), 'change');

		// when
		inputs.eq(0).styly('check', true);
		inputs.eq(1).styly('check', true);

		// then
		expect('change').toHaveBeenTriggeredOn(inputs.eq(0));
		expect('change').toHaveBeenTriggeredOn(inputs.eq(1));
		expect(inputs.eq(0)).toHaveClass('my-class');
		expect(inputs.eq(1)).toHaveClass('my-class');
	});

	it ('should function trigger inline onchange on uncheck', function() {
		// given
		var inputs = $('.radio').styly();

		inputs.attr('onchange', '');

		spyOnEvent(inputs.eq(0), 'change');
		spyOnEvent(inputs.eq(1), 'change');

		// when
		inputs.eq(0).styly('check', false);
		inputs.eq(1).styly('check', false);

		// then
		expect('change').toHaveBeenTriggeredOn(inputs.eq(0));
		expect('change').toHaveBeenTriggeredOn(inputs.eq(1));
	});

	it ('should function trigger binded onclick on check', function() {
		// given
		var inputs = $('.radio').styly();

		inputs.bind('click', function() { $(this).addClass('my-class'); });

		spyOnEvent(inputs.eq(0), 'click');
		spyOnEvent(inputs.eq(1), 'click');

		// when
		inputs.eq(0).styly('check', true);
		inputs.eq(1).styly('check', true);

		// then
		expect('click').toHaveBeenTriggeredOn(inputs.eq(0));
		expect('click').toHaveBeenTriggeredOn(inputs.eq(1));
		expect(inputs.eq(0)).toHaveClass('my-class');
		expect(inputs.eq(1)).toHaveClass('my-class');
	});

	it ('should function trigger binded onclick on uncheck', function() {
		// given
		var inputs = $('.radio').styly();

		inputs.bind('click', function() { $(this).addClass('my-class'); });

		spyOnEvent(inputs.eq(0), 'click');

		// when
		inputs.eq(0).styly('check', false);

		// then
		expect('click').toHaveBeenTriggeredOn(inputs.eq(0));
		expect(inputs.eq(0)).toHaveClass('my-class');
		expect(inputs.eq(1)).not.toHaveClass('my-class');
	});

	it ('should function trigger binded onchange on check', function() {
		// given
		var inputs = $('.radio').styly();

		inputs.bind('change', function() { $(this).addClass('my-class'); });

		spyOnEvent(inputs.eq(0), 'change');
		spyOnEvent(inputs.eq(1), 'change');

		// when
		inputs.eq(0).styly('check', true);
		inputs.eq(1).styly('check', true);

		// then
		expect('change').toHaveBeenTriggeredOn(inputs.eq(0));
		expect('change').toHaveBeenTriggeredOn(inputs.eq(1));
		expect(inputs.eq(0)).toHaveClass('my-class');
		expect(inputs.eq(1)).toHaveClass('my-class');
	});

	it ('should function trigger binded onchange on uncheck', function() {
		// given
		var inputs = $('.radio').styly();

		inputs.bind('change', function() { $(this).addClass('my-class'); });

		spyOnEvent(inputs.eq(0), 'change');
		spyOnEvent(inputs.eq(1), 'change');

		// when
		inputs.eq(0).styly('check', false);
		inputs.eq(1).styly('check', false);

		// then
		expect('change').toHaveBeenTriggeredOn(inputs.eq(0));
		expect('change').toHaveBeenTriggeredOn(inputs.eq(1));
		expect(inputs.eq(0)).toHaveClass('my-class');
		expect(inputs.eq(1)).toHaveClass('my-class');
	});

	it ('should function not trigger on disable', function() {
		// given
		var inputs = $('.radio').styly();

		inputs.bind('click', function() { $(this).addClass("my-class"); });

		spyOnEvent(inputs.eq(0), 'click');
		spyOnEvent(inputs.eq(1), 'click');

		// when
		inputs.eq(0).styly('enable', false);

		// then
		expect('click').not.toHaveBeenTriggeredOn(inputs.eq(0));
		expect('click').not.toHaveBeenTriggeredOn(inputs.eq(1));
		expect(inputs.eq(0)).toBeDisabled();
		expect(inputs.eq(0)).not.toHaveClass('my-class');
		expect(inputs.eq(1)).not.toHaveClass('my-class');
	});

	it ('should function not trigger on enable', function() {
		// given
		var inputs = $('.radio').styly();

		inputs.bind('click', function() { $(this).addClass("my-class"); });

		spyOnEvent(inputs.eq(0), 'click');
		spyOnEvent(inputs.eq(1), 'click');

		// when
		inputs.eq(0).styly('enable', true);

		// then
		expect('click').not.toHaveBeenTriggeredOn(inputs.eq(0));
		expect('click').not.toHaveBeenTriggeredOn(inputs.eq(1));
		expect(inputs.eq(0)).not.toBeDisabled();
		expect(inputs.eq(0)).not.toHaveClass('my-class');
		expect(inputs.eq(1)).not.toHaveClass('my-class');
	});

	it ('should not check when disabled', function() {
		// given
		var inputs = $('.radio').styly(),
			labels = inputs.parent().children('label');

		// when
		inputs.eq(0).styly('enable', false);
		labels.eq(0).click();

		// then
		expect(labels).toHaveClass('styly-unchecked');
		expect(labels).not.toHaveClass('styly-unchecked-hover');
		expect(labels).not.toHaveClass('styly-checked');
		expect(labels).not.toHaveClass('styly-checked-hover');
		expect(labels).toHaveClass('styly-unchecked-disabled');
		expect(labels).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(0)).not.toBeChecked();
		expect(inputs.eq(0)).toBeDisabled();
	});

	it ('[radio] should not check other when the checked one is disabled', function() {
		// given
		var inputs = $('.radio').styly(),
			labels = inputs.prev('label');

		// when
		inputs.eq(0).styly('check', true).styly('enable', false);
		labels.eq(1).click();

		// then
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-checked');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(0)).toHaveClass('styly-checked-disabled');
		expect(inputs.eq(0)).toBeChecked();
		expect(inputs.eq(0)).toBeDisabled();

		expect(labels.eq(1)).not.toHaveClass('styly-unchecked');
		expect(labels.eq(1)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(1)).not.toHaveClass('styly-checked');
		expect(labels.eq(1)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(1)).toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(1)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(1)).not.toBeChecked();
		expect(inputs.eq(1)).toBeDisabled();
	});

	it ('[radio] should not hover when checked disabled', function() {
		// given
		var inputs = $('.radio').styly(),
			labels = inputs.prev('label');

		// when
		inputs.eq(0).styly('check', true).styly('enable', false).mouseover();

		// then
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-checked');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(0)).toHaveClass('styly-checked-disabled');
		expect(inputs.eq(0)).toBeChecked();
		expect(inputs.eq(0)).toBeDisabled();
	});

	it ('[radio] should not hover when disabled', function() {
		// given
		var inputs = $('.radio').styly(),
			labels = inputs.prev('label');

		// when
		inputs.eq(0).styly('enable', false).mouseover();

		// then
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-checked');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(0)).toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(0)).not.toBeChecked();
		expect(inputs.eq(0)).toBeDisabled();
	});

	it ('[radio] should check radio just with checked class', function() {
		// given
		var inputs	= $('.radio').styly(),
			labels	= inputs.prev('label');

		// when
		labels.eq(0).click();
		inputs.eq(0).styly('enable', false);

		// then
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-checked');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(0)).toHaveClass('styly-checked-disabled');
		expect(inputs.eq(0)).toBeChecked();
		expect(inputs.eq(0)).toBeDisabled();
	});

	it ('[radio] should always disable all radios if the checked one is disabled', function() {
		// given
		var inputs	= $('.radio').styly(),
			labels	= inputs.prev('label');

		// when
		labels.eq(0).click();
		inputs.eq(0).styly('enable', false);

		// then
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-checked');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(0)).toHaveClass('styly-checked-disabled');
		expect(inputs.eq(0)).toBeChecked();
		expect(inputs.eq(0)).toBeDisabled();

		expect(labels.eq(1)).not.toHaveClass('styly-unchecked');
		expect(labels.eq(1)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(1)).not.toHaveClass('styly-checked');
		expect(labels.eq(1)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(1)).toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(1)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(1)).not.toBeChecked();
		expect(inputs.eq(1)).toBeDisabled();
	});

	it ('[radio] should not disable all radios if the unchecked one is disabled', function() {
		// given
		var inputs	= $('.radio').styly(),
			labels	= inputs.prev('label');

		// when
		labels.eq(0).click();
		inputs.eq(1).styly('enable', false);

		// then
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(0)).toHaveClass('styly-checked');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(0)).toBeChecked();
		expect(inputs.eq(0)).not.toBeDisabled();

		expect(labels.eq(1)).not.toHaveClass('styly-unchecked');
		expect(labels.eq(1)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(1)).not.toHaveClass('styly-checked');
		expect(labels.eq(1)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(1)).toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(1)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(1)).not.toBeChecked();
		expect(inputs.eq(1)).toBeDisabled();
	});

	it ('[radio] should disable one checked radio and keeps it checked', function() {
		// given
		var inputs	= $('.radio').styly(),
			labels	= inputs.prev('label');

		// when
		inputs.eq(0).styly('check', true).styly('enable', false);

		// then
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-checked');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(0)).toHaveClass('styly-checked-disabled');
		expect(inputs.eq(0)).toBeChecked();
		expect(inputs.eq(0)).toBeDisabled();
	});

	it ('[radio] should start checked', function() {
		// given
		var inputs = $('.radio');

		inputs.eq(0).attr('checked', 'checked');

		// when
		inputs.styly();

		// then
		var input	= inputs.eq(0),
			label	= input.prev('label');

		expect(label).not.toHaveClass('styly-unchecked');
		expect(label).not.toHaveClass('styly-unchecked-hover');
		expect(label).toHaveClass('styly-checked');
		expect(label).not.toHaveClass('styly-checked-hover');
		expect(label).not.toHaveClass('styly-unchecked-disabled');
		expect(label).not.toHaveClass('styly-checked-disabled');
		expect(input).toBeChecked();
		expect(input).not.toBeDisabled();
	});

	it ('[radio] should start disabled', function() {
		// given
		var inputs = $('.radio');

		inputs.eq(0).attr('disabled', 'disabled');

		// when
		inputs.styly();

		// then
		var input	= inputs.eq(0),
			label	= input.prev('label');

		expect(label).not.toHaveClass('styly-unchecked');
		expect(label).not.toHaveClass('styly-unchecked-hover');
		expect(label).not.toHaveClass('styly-checked');
		expect(label).not.toHaveClass('styly-checked-hover');
		expect(label).toHaveClass('styly-unchecked-disabled');
		expect(label).not.toHaveClass('styly-checked-disabled');
		expect(input).not.toBeChecked();
		expect(input).toBeDisabled();
	});

	it ('[radio] should start checked disabled', function() {
		// given
		var inputs = $('.radio');

		inputs.eq(0).attr('checked', 'checked').attr('disabled', 'disabled');

		// when
		inputs.styly();

		// then
		var input	= inputs.eq(0),
			label	= input.prev('label');

		expect(label).not.toHaveClass('styly-unchecked');
		expect(label).not.toHaveClass('styly-unchecked-hover');
		expect(label).not.toHaveClass('styly-checked');
		expect(label).not.toHaveClass('styly-checked-hover');
		expect(label).not.toHaveClass('styly-unchecked-disabled');
		expect(label).toHaveClass('styly-checked-disabled');
		expect(input).toBeChecked();
		expect(input).toBeDisabled();
	});

});

describe('Using checkbox and radio', function() {

	beforeEach(function() {
		$('body')
		.append('<label for="like">Like?</label><input id="like" type="checkbox" class="checkbox styly" />')
		.append('<label for="dislike">Dislike?</label><input id="dislike" type="checkbox" class="checkbox styly" />')
		.append('<label for="agree">Agree</label><input id="agree" type="radio" name="agreement" class="radio styly"/>')
		.append('<label for="desagree">Desagree</label><input id="desagree" type="radio" name="agreement" class="radio styly"/>');
	});

	afterEach(function() {
		$('.styly').parent().remove();
	});

	it ('[checkbox and radio] should checked with right class', function() {
		// given
		var inputs	= $('.styly').styly(),
			labels = inputs.prev('label');

		// when
		inputs.styly('check', true);

		// then
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(0)).toHaveClass('styly-checked');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(0)).toBeChecked();
		expect(inputs.eq(0)).not.toBeDisabled();

		expect(labels.eq(1)).not.toHaveClass('styly-unchecked');
		expect(labels.eq(1)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(1)).toHaveClass('styly-checked');
		expect(labels.eq(1)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(1)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(1)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(1)).toBeChecked();
		expect(inputs.eq(1)).not.toBeDisabled();

		expect(labels.eq(2)).toHaveClass('styly-unchecked');
		expect(labels.eq(2)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(2)).not.toHaveClass('styly-checked');
		expect(labels.eq(2)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(2)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(2)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(2)).not.toBeChecked();
		expect(inputs.eq(2)).not.toBeDisabled();

		expect(labels.eq(3)).not.toHaveClass('styly-unchecked');
		expect(labels.eq(3)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(3)).toHaveClass('styly-checked');
		expect(labels.eq(3)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(3)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(3)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(3)).toBeChecked();
		expect(inputs.eq(3)).not.toBeDisabled();
	});

	it ('should unchecked with right class', function() {
		// given
		var inputs	= $('.styly').styly(),
			labels = inputs.parent().children('label');

		// when
		inputs.styly('check', true).styly('check', false);

		// then
		expect(labels.eq(0)).toHaveClass('styly-unchecked');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-checked');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(0)).not.toBeChecked();
		expect(inputs.eq(0)).not.toBeDisabled();

		expect(labels.eq(1)).toHaveClass('styly-unchecked');
		expect(labels.eq(1)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(1)).not.toHaveClass('styly-checked');
		expect(labels.eq(1)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(1)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(1)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(1)).not.toBeChecked();
		expect(inputs.eq(1)).not.toBeDisabled();

		expect(labels.eq(2)).toHaveClass('styly-unchecked');
		expect(labels.eq(2)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(2)).not.toHaveClass('styly-checked');
		expect(labels.eq(2)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(2)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(2)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(2)).not.toBeChecked();
		expect(inputs.eq(2)).not.toBeDisabled();

		expect(labels.eq(3)).toHaveClass('styly-unchecked');
		expect(labels.eq(3)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(3)).not.toHaveClass('styly-checked');
		expect(labels.eq(3)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(3)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(3)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(3)).not.toBeChecked();
		expect(inputs.eq(3)).not.toBeDisabled();
	});

	it ('should disable with right class', function() {
		// given
		var inputs	= $('.styly').styly(),
			labels = inputs.parent().children('label');

		// when
		inputs.styly('enable', false);

		// then
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-checked');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(0)).toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(0)).not.toBeChecked();
		expect(inputs.eq(0)).toBeDisabled();

		expect(labels.eq(1)).not.toHaveClass('styly-unchecked');
		expect(labels.eq(1)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(1)).not.toHaveClass('styly-checked');
		expect(labels.eq(1)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(1)).toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(1)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(1)).not.toBeChecked();
		expect(inputs.eq(1)).toBeDisabled();

		expect(labels.eq(2)).not.toHaveClass('styly-unchecked');
		expect(labels.eq(2)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(2)).not.toHaveClass('styly-checked');
		expect(labels.eq(2)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(2)).toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(2)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(2)).not.toBeChecked();
		expect(inputs.eq(2)).toBeDisabled();

		expect(labels.eq(3)).not.toHaveClass('styly-unchecked');
		expect(labels.eq(3)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(3)).not.toHaveClass('styly-checked');
		expect(labels.eq(3)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(3)).toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(3)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(3)).not.toBeChecked();
		expect(inputs.eq(3)).toBeDisabled();
	});

	it ('should enable with right class', function() {
		// given
		var inputs	= $('.styly').styly(),
		labels = inputs.parent().children('label');
		
		// when
		inputs.styly('enable', false).styly('enable', true);
		
		// then
		expect(labels.eq(0)).toHaveClass('styly-unchecked');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-checked');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(0)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(0)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(0)).not.toBeChecked();
		expect(inputs.eq(0)).not.toBeDisabled();

		expect(labels.eq(1)).toHaveClass('styly-unchecked');
		expect(labels.eq(1)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(1)).not.toHaveClass('styly-checked');
		expect(labels.eq(1)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(1)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(1)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(1)).not.toBeChecked();
		expect(inputs.eq(1)).not.toBeDisabled();

		expect(labels.eq(2)).toHaveClass('styly-unchecked');
		expect(labels.eq(2)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(2)).not.toHaveClass('styly-checked');
		expect(labels.eq(2)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(2)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(2)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(2)).not.toBeChecked();
		expect(inputs.eq(2)).not.toBeDisabled();

		expect(labels.eq(3)).toHaveClass('styly-unchecked');
		expect(labels.eq(3)).not.toHaveClass('styly-unchecked-hover');
		expect(labels.eq(3)).not.toHaveClass('styly-checked');
		expect(labels.eq(3)).not.toHaveClass('styly-checked-hover');
		expect(labels.eq(3)).not.toHaveClass('styly-unchecked-disabled');
		expect(labels.eq(3)).not.toHaveClass('styly-checked-disabled');
		expect(inputs.eq(3)).not.toBeChecked();
		expect(inputs.eq(3)).not.toBeDisabled();
	});
	
});