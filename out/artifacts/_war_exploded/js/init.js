/*
	Astral 1.0 
*/

_5grid.ready(function() {

	/*********************************************************************************/
	/* Settings                                                                      */
	/*********************************************************************************/

		var settings = {
			resizeSpeed:	600,		// Speed to resize panel
			fadeSpeed:		300,		// Speed to fade in/out
			sizeFactor:		11.5,		// Size factor
			sizeLimit:		15			// Minimum point size
		};

	/*********************************************************************************/
	/* Vars                                                                          */
	/*********************************************************************************/

		var	_window = jQuery(window),
			_main = jQuery('#main'),
			_panels = _main.find('.panel'),
			_body = jQuery('body'),
			_hbw = jQuery('html,body,window'),
			_footer = jQuery('#footer'),
			_wrapper = jQuery('#wrapper'),
			_nav = jQuery('#nav'), _nav_links = _nav.find('a'),
			_jumplinks = jQuery('.jumplink');
			
		var	panels = [],
			activePanelId = null,
			firstPanelId = null,
			isLocked = false,
			isTouch = !!('ontouchstart' in window);
		
		if (isTouch)
		{
			settings.fadeSpeed = 0;
			settings.resizeSpeed = 0;
			_nav_links.find('span').remove();
		}
		
	/*********************************************************************************/
	/* Main (Desktop)                                                                */
	/*********************************************************************************/

		if (_5grid.isDesktop)
		{
			// Body
				_body.h5u_resize = function() {
					var factor = (_window.width() * _window.height()) / (1440 * 900);
					_body.css('font-size', Math.max(Math.floor(factor * settings.sizeFactor), settings.sizeLimit) + 'pt');
					_main.height(panels[activePanelId].outerHeight());
					_body.h5u_reposition();
				};

				_body.h5u_reposition = function() {
					if (isTouch && (window.orientation == 0 || window.orientation == 180))
						_wrapper.css('padding-top', Math.max(((_window.height() - (panels[activePanelId].outerHeight() + _footer.outerHeight())) / 2) - _nav.height(), 30) + 'px');
					else
						_wrapper.css('padding-top', (((_window.height() - panels[firstPanelId].height()) / 2) - _nav.height()) + 'px');
				};
				
			// Panels
				_panels.each(function(i) {
					var t = jQuery(this), id = t.attr('id');
					
					panels[id] = t;
				
					if (i == 0)
					{
						firstPanelId = id;
						activePanelId = id;
					}
					else
						t.hide();
						
					t.h5u_activate = function() {
					
						// Check lock state and determine whether we're already at the target
							if (isLocked
							||	activePanelId == id)
								return false;

						// Lock
							isLocked = true;
							
						// Change nav link (if it exists)
							_nav_links.removeClass('active');
							_nav_links.filter('[href="#' + id + '"]').addClass('active');

						// Add bottom padding
							var x = parseInt(_wrapper.css('padding-top')) +
									panels[id].outerHeight() +
									_nav.outerHeight() +
									_footer.outerHeight();
						
							if (x > _window.height())
								_wrapper.addClass('tall');
							else
								_wrapper.removeClass('tall');
									
						// Fade out active panel
							_footer.fadeTo(settings.fadeSpeed, 0.0001);
							panels[activePanelId].fadeOut(settings.fadeSpeed, function() {
			
								// Set new active
									activePanelId = id;

									// Force scroll to top
										_hbw.animate({
											scrollTop: 0
										}, settings.resizeSpeed, 'swing');

									// Reposition
										_body.h5u_reposition();
										
									// Resize main to height of new panel
										_main.animate({
											height: panels[activePanelId].outerHeight()
										}, settings.resizeSpeed, 'swing', function() {
										
											// Fade in new active panel
												_footer.fadeTo(settings.fadeSpeed, 1.0);
												panels[activePanelId].fadeIn(settings.fadeSpeed, function() {
													
													// Unlock
														isLocked = false;

												});
										});
									
							});
					
					};
				});

			// Nav + Jumplinks
				_nav_links.add(_jumplinks).click(function(e) {
					var t = jQuery(this), href = t.attr('href'), id;
				
					if (href.substring(0,1) == '#')
					{
						e.preventDefault();
						e.stopPropagation();

						id = href.substring(1);
						
						if (id in panels)
							panels[id].h5u_activate();
					}
				});
			
			// Window
				_window
					.resize(function() {
						if (!isLocked)
							_body.h5u_resize();
					});

			// Forms (IE <= 9 only)
				if (navigator.userAgent.match(/MSIE ([0-9]+)\./) && RegExp.$1 <= 9)
					jQuery('form').formerize();

			// Init
				_window
					.trigger('resize');

				_wrapper
					.fadeTo(400, 1.0);
		}
	
}, true);