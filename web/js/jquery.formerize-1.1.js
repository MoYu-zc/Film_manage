/*
	Formerize 1.1: Soup up your otherwise boring HTML forms
	By n33 | http://n33.co | @nodethirtythree
	Dual licensed under the MIT or GPLv2 license.
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	MIT LICENSE:
	Copyright (c) 2012 n33, http://n33.co
	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation
	files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use,
	copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the
	Software is furnished to do so, subject to the following conditions:
	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
	OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
	HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
	FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	GPLv2 LICENSE:
	Copyright (c) 2012 n33, http://n33.co
	This program is free software: you can redistribute it and/or modify it	under the terms of the GNU General Public License as
	published by the Free Software Foundation, either version 2 of the License, or (at your option) any later version. This program is
	distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY 
	or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details. You should have received a copy of
	the GNU General Public License along with this program. If not, see <http://www.gnu.org/licenses/>. 
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

(function(jQuery) {
	
	jQuery.fn.disableSelection_formerize = function() { return jQuery(this).css('user-select', 'none').css('-khtml-user-select', 'none').css('-moz-user-select', 'none').css('-o-user-select', 'none').css('-webkit-user-select', 'none'); }
	
	jQuery.fn.formerize = function(options) {
		
		// Settings
			var settings = jQuery.extend({
				usePlaceholders:		true,
				baseZIndex:				1000,
				themeClass:				null
			}, options);

		// Init
			var _form = jQuery(this), _document = jQuery(document), _window = jQuery(window), _fakes = new Array();
			var _isTouch = !!('ontouchstart' in window), _eventType = (_isTouch ? 'click' : 'click');
			var _isDegraded = (navigator.userAgent.match(/MSIE ([0-9]+)\./) && RegExp.$1 < 9);
			
			// Attempt to use built-in browser placeholder support whenever possible
				if (settings.usePlaceholders
				&&	'placeholder' in (document.createElement('input')))
					settings.usePlaceholders = false;

		// Feature: Inline Labels
			if (settings.usePlaceholders)
			{
				// Text, TextArea
					_form
						.find('input[type=text],textarea')
							.each(function() {
								var e = jQuery(this);
								if (e.val() == '' || e.val() == e.attr('placeholder')) {
									e.addClass('formerize-placeholder');
									e.val(e.attr('placeholder'));
								}
							})
							.blur(function() {
								var e = jQuery(this);
								if (e.attr('name').match(/_fakeformerizefield$/))
									return;
								if (e.val() == '') {
									e.addClass('formerize-placeholder');
									e.val(e.attr('placeholder'));
								}
							})
							.focus(function() {
								var e = jQuery(this);
								if (e.attr('name').match(/_fakeformerizefield$/))
									return;
								if (e.val() == e.attr('placeholder')) {
									e.removeClass('formerize-placeholder');
									e.val('');
								}
							});

				// Password
					_form
						.find('input[type=password]')
							.each(function() {
								var e = jQuery(this);
								var x = jQuery(jQuery('<div>').append(e.clone()).remove().html().replace(/type="password"/i, 'type="text"').replace(/type=password/i, 'type=text'));
								if (e.attr('id') != '')
									x.attr('id', e.attr('id') + '_fakeformerizefield');
								if (e.attr('name') != '')
									x.attr('name', e.attr('name') + '_fakeformerizefield');
								x.addClass('formerize-placeholder').val(x.attr('placeholder')).insertAfter(e);
								if (e.val() == '')
									e.hide();
								else
									x.hide();
								e.blur(function(event) {
									event.preventDefault();
									var e = jQuery(this);
									var x = e.parent().find('input[name=' + e.attr('name') + '_fakeformerizefield]');
									if (e.val() == '') {
										e.hide();
										x.show();
									}
								});
								x.focus(function(event) {
									event.preventDefault();
									var x = jQuery(this);
									var e = x.parent().find('input[name=' + x.attr('name').replace('_fakeformerizefield', '') + ']');
									x.hide();
									e.show().focus();
								});
								// just in case :P
								x.keypress(function(event) {
									event.preventDefault();
									x.val('');
								});
							});

				// Events
					_form
						// Submit
							.submit(function() {
								jQuery(this)
									.find('input[type=text],input[type=password],textarea')
										.each(function(event) {
											var e = jQuery(this);
											if (e.attr('name').match(/_fakeformerizefield$/))
												e.attr('name', '');
											if (e.val() == e.attr('placeholder')) {
												e.removeClass('formerize-placeholder');
												e.val('');
											}
										});
							})
						// Reset
							.bind("reset", function(event) {
								event.preventDefault();
								// temporary: just set all SELECTs to their first options
								jQuery(this)
									.find('select')
										.val(jQuery('option:first').val());
								jQuery(this)
									.find('input,textarea')
										.each(function() {
											var e = jQuery(this);
											var x;
											e.removeClass('formerize-placeholder');
											switch (this.type) {
												case 'submit':
												case 'reset':
													break;
												case 'password':
													e.val(e.attr('defaultValue'));
													x = e.parent().find('input[name=' + e.attr('name') + '_fakeformerizefield]');
													if (e.val() == '') {
														e.hide();
														x.show();
													}
													else {
														e.show();
														x.hide();
													}
													break;
												case 'checkbox':
												case 'radio':
													e.attr('checked', e.attr('defaultValue'));
													break;
												case 'text':
												case 'textarea':
													e.val(e.attr('defaultValue'));
													if (e.val() == '') {
														e.addClass('formerize-placeholder');
														e.val(e.attr('placeholder'));
													}
													break;
												default:
													e.val(e.attr('defaultValue'));
													break;
											}
										});
								window.setTimeout(function() {
									for (x in _fakes)
										_fakes[x].trigger('formerize_sync');
								}, 10);
							});
			}
			
		// Feature: Theme
			if (settings.themeClass)
			{
				// Global
					_form.addClass(settings.themeClass);
				
				if (!_isDegraded)
				{
					// Reset
						if (!settings.usePlaceholders)
							_form
								.bind('reset', function(e) {
									window.setTimeout(function() {
										for (x in _fakes)
											_fakes[x].trigger('formerize_sync');
									}, 10);
								});
					
					// Selects (single)
						_form.find('select').each(function() {
							var real = jQuery(this), id = real.attr('id');
							
							// Check ID
								if (!id)
									return;

							// Verify height
								if (real.attr('height') && real.attr('height') > 1)
									return;

							// Vars
								var	a = new Array(), 
									fake = jQuery('<div class="select" id="' + id + '-formerize">&nbsp;</div>'),
									realOptions = real.find('option'), 
									fakeOptions = jQuery('<ul class="select-options"></ul>'),
									fakeOptionsContainer = jQuery('<div class="' + settings.themeClass + '"></div>');

							// Real
								real.hide();
						
							// Real Options
								realOptions.each(function() {
									var t = jQuery(this);
									a.push('<li value="' + t.attr('value') + '">' + t.text() + '</li>');
								});

							// Fake Options
								fakeOptions
									.html(a.join(''))
									.css('position', 'absolute')
									.css('cursor', 'pointer')
									.css('z-index', settings.baseZIndex)
									.disableSelection_formerize()
									.hide()
									.appendTo(fakeOptionsContainer)
									.bind('formerize_close', function() {
										fakeOptions.fadeOut('fast');
										fake.removeClass('select-focus');
									})
									.bind('formerize_open', function() {
										fakeOptions
											.css('min-width', fake.outerWidth());
										fakeOptions.fadeIn('fast');
										fake.addClass('select-focus');
									})
									.bind(_eventType, function(e) {
										e.preventDefault();
										e.stopPropagation();
									});
								
								fakeOptions.find('li').each(function() {
									var t = jQuery(this);
									t.bind(_eventType, function() {
										real.val(t.attr('value'));
										fakeOptions.trigger('formerize_close');
										fake.trigger('formerize_sync');
										real.trigger('change');
									});
								});
								
								_document
									.bind(_eventType, function(e) {
										fakeOptions.trigger('formerize_close');
									});
								
								fakeOptionsContainer
									.appendTo(jQuery('body'));

							// Fake
								fake
									.css('cursor', 'pointer')
									.disableSelection_formerize()
									.insertAfter(real)
									.bind('formerize_sync', function() {
										fake.text(realOptions.filter(':selected').first().text());
									})
									.bind(_eventType, function(e) {
										e.preventDefault();
										e.stopPropagation();
										if (fakeOptions.is(':visible'))
											fakeOptions.trigger('formerize_close');
										else
										{
											var p = fake.offset();
											
											fakeOptions
												.css('left', p.left + 'px')
												.css('top', p.top + fake.outerHeight() + 'px')
												.trigger('formerize_open');
										}
									})
									.trigger('formerize_sync');
									
							_fakes.push(fake);
						});
					
					// Checkboxes
						_form.find('input[type=checkbox]').each(function() {
							var real = jQuery(this), id = real.attr('id')
							
							// Check ID
								if (!id)
									return;
							
							// Vars
								var fake = jQuery('<div class="checkbox" id="' + id + '-formerize">&nbsp;</div>');
							
							// Real
								real.hide();
							
							// Fake
								fake
									.css('cursor', 'pointer')
									.disableSelection_formerize()
									.insertAfter(real)
									.bind('formerize_sync', function() {
										if (real.prop('checked'))
											fake.addClass('checkbox-checked');
										else
											fake.removeClass('checkbox-checked');
									})
									.bind(_eventType, function(e) {
										e.preventDefault();
										if (real.prop('checked'))
											real.prop('checked', false);
										else
											real.prop('checked', true);
										
										fake.trigger('formerize_sync');
										real.trigger('change');
									})
									.trigger('formerize_sync');
									
							// Label
								_form.find('label[for=' + real.attr('id') + ']')
									.css('cursor', 'pointer')
									.disableSelection_formerize()
									.bind(_eventType, function(e) {
										e.preventDefault();
										fake.trigger(_eventType);
									});

							_fakes.push(fake);
						});
					
					// Radio
						_form.find('input[type=radio]').each(function() {
							var real = jQuery(this), id = real.attr('id');
							
							// Check ID
								if (!id)
									return;
							
							// Vars
								var fake = jQuery('<div class="radio" id="' + id + '-formerize">&nbsp;</div>');
							
							// Real
								real.hide();
							
							// Fake
								fake
									.css('cursor', 'pointer')
									.disableSelection_formerize()
									.insertAfter(real)
									.bind('formerize_sync', function() {
										if (real.prop('checked'))
											fake.addClass('radio-checked');
									})
									.bind(_eventType, function(e) {
										e.preventDefault();
										_form.find('input[name=' + real.attr('name') + ']').each(function() {
											var t = jQuery(this);
											t.prop('checked', false);
											_form.find('#' + t.attr('id') + '-formerize').removeClass('radio-checked');
										});
										real.prop('checked', true);
										fake.trigger('formerize_sync');
										real.trigger('change');
									})
									.trigger('formerize_sync');

							// Label
								_form.find('label[for=' + real.attr('id') + ']')
									.css('cursor', 'pointer')
									.disableSelection_formerize()
									.bind(_eventType, function(e) {
										e.preventDefault();
										fake.trigger(_eventType);
									});

							_fakes.push(fake);
						});
				}
			}

		return _form;
	};
})(jQuery);