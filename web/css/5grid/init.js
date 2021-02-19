/*****************************************************************/
/* 5grid 0.4.3 by n33.co | MIT+GPLv2 license licensed            */
/* init.js: Init script                                          */
/*****************************************************************/

/*********************/
/* Settings          */
/*********************/

	var _5grid_settings = {
		breakpoint_1000px:				1200,
		breakpoint_mobile:				480,
		prefix:							'style',
		use:							'mobile,desktop',
		viewport_is1000px:				1040,
		viewport_is1200px:				1280,
		////////////////////////////////////////////////////////
		mobileUI:						0,
		mobileUI_hideAddressBar:		0,
		mobileUI_openerText:			'=',
		mobileUI_openerWidth:			60,
		mobileUI_slideSpeed:			200,
		mobileUI_theme:					'modern',
		mobileUI_themeNavColor:			'#1f1f1f',
		mobileUI_themeTitleBarColor:	'#444444',
		mobileUI_titleBarFixed:			1,
		mobileUI_titleBarHeight:		44,
		mobileUI_titleBarOverlaid:		0,
		////////////////////////////////////////////////////////
		mobileUI_navInnerPad:			0,
		mobileUI_force:					0,
		mobileUI_tapDelay:				200,
		mobileUI_orientationDelay:		0,
		debug_noExtLoad:				0
	};

/*********************/
/* Helper plugins    */
/*********************/

	/* jQuery resize event - v1.1 - 3/14/2010 http://benalman.com/projects/jquery-resize-plugin/ | Copyright (c) 2010 "Cowboy" Ben Alman | Dual licensed under the MIT and GPL licenses. | http://benalman.com/about/license/ */
	(function(jQuery,h,c){var a=jQuery([]),e=jQuery.resize=jQuery.extend(jQuery.resize,{}),i,k="setTimeout",j="resize",d=j+"-special-event",b="delay",f="throttleWindow";e[b]=250;e[f]=true;jQuery.event.special[j]={setup:function(){if(!e[f]&&this[k]){return false}var l=jQuery(this);a=a.add(l);jQuery.data(this,d,{w:l.width(),h:l.height()});if(a.length===1){g()}},teardown:function(){if(!e[f]&&this[k]){return false}var l=jQuery(this);a=a.not(l);l.removeData(d);if(!a.length){clearTimeout(i)}},add:function(l){if(!e[f]&&this[k]){return false}var n;function m(s,o,p){var q=jQuery(this),r=jQuery.data(this,d);r.w=o!==c?o:q.width();r.h=p!==c?p:q.height();n.apply(this,arguments)}if(jQuery.isFunction(l)){n=l;return m}else{n=l.handler;l.handler=m}}};function g(){i=h[k](function(){a.each(function(){var n=jQuery(this),m=n.width(),l=n.height(),o=jQuery.data(this,d);if(m!==o.w||l!==o.h){n.trigger(j,[o.w=m,o.h=l])}});g()},e[b])}})(jQuery,this);

/*********************/
/* Object Setup      */
/*********************/

	var _5gridC = function()
	{
		this.events = new Array();
		this.readyWait = false;

		this.isReady = false;
		this.isMobile = false;
		this.isDesktop = false;
		this.isFluid = false;
		this.is1000px = false;
		this.is1200px = false;
	}

	_5gridC.prototype.bind = function(name, f)
	{
		if (!this.events[name])
			this.events[name] = new Array();
		
		this.events[name].push(f);
	}

	_5gridC.prototype.trigger = function(name)
	{
		if (!this.isReady || !this.events[name] || this.events[name].length < 1)
			return;
			
		for (i in this.events[name])
			(this.events[name][i])();
	}

	_5gridC.prototype.ready = function(f, wait) {
		if (wait)
			this.readyWait = true;

		this.bind('ready', f);
	}
	
	// Custom events
		_5gridC.prototype.orientationChange = function(f) { this.bind('orientationChange', f); }
		_5gridC.prototype.mobileUINavOpen = function(f) { this.bind('mobileUINavOpen', f); }
		_5gridC.prototype.mobileUINavClose = function(f) { this.bind('mobileUINavClose', f); }

	_5gridC.prototype.readyCheck = function()
	{
		var x = this;
		
		window.setTimeout(function() {
			if (x.isReady)
				x.trigger('ready');
			else
				x.readyCheck();
		}, 50);
	}

	var _5grid = new _5gridC;


(function() {

/*********************/
/* Initialize        */
/*********************/

	// Vars
		var	_settings	= _5grid_settings,
			_window		= jQuery(window),
			_head		= jQuery('head'),
			_document	= jQuery(document);
		var	baseURL,
			doFluid, do1000px, do1200px, doMobile, doDesktop, doMobileOnly,
			isLocked = false,
			isTapLocked = false, tapId,
			isTouch = !!('ontouchstart' in window),
			headQueue = new Array();
		var v, w, wk, wv, x, y;

	// Tap handling
		jQuery.fn.tap_5grid = function(f, suffix, noMove) {
			var target = jQuery(this);

			if (isTouch)
			{
				target
					.bind('touchstart' + (suffix ? '.' + suffix : ''), function() {
						if (!isTapLocked)
						{
							isTapLocked = true;
							if (_settings.mobileUI_tapDelay > -1)
								tapId = window.setTimeout(function() { window.clearTimeout(tapId); isTapLocked = false; }, _settings.mobileUI_tapDelay);
						}
					})
					.bind('touchend' + (suffix ? '.' + suffix : ''), function(e) {
						if (isTapLocked)
						{
							isTapLocked = false;
							window.clearTimeout(tapId);
							(f)(e);
						}
					});
					
				if (noMove)
					target
						.bind('touchmove' + (suffix ? '.' + suffix : ''), function(e) {
							isTapLocked = false;
							window.clearTimeout(tapId);
						});
					
			}
			else
				target.bind('click' + (suffix ? '.' + suffix : ''), f);

			return target;
		};

		jQuery.fn.untap_5grid = function(suffix) {
			var target = jQuery(this);
			
			if (isTouch)
			{
				target
					.unbind('touchstart' + (suffix ? '.' + suffix : ''))
					.unbind('touchend' + (suffix ? '.' + suffix : ''))
					.unbind('touchmove' + (suffix ? '.' + suffix : ''));
			}
			else
				target.unbind('click' + (suffix ? '.' + suffix : ''));
				
			return target;
		};
		
	// Shortcut methods
		headQueue.pushI_5grid = function(s) { headQueue.push({ type: 'i', value: s }); };
		headQueue.pushE_5grid = function(s) { headQueue.push({ type: 'e', value: s }); }; 
		headQueue.process_5grid = function() {
			var doE;
			if (document.createStyleSheet)
				doE = function(s) { document.createStyleSheet(s); };
			else
				doE = function(s) { _head.append('<link rel="stylesheet" href="' + s + '" />'); };

			for (x in headQueue)
			{
				if (headQueue[x].type == 'i')
					_head.append('<style>' + headQueue[x].value + '</style>');
				else if (headQueue[x].type == 'e')
					(doE)(headQueue[x].value);
			}
		};
		jQuery.fn.disableSelection_5grid = function() { return jQuery(this).css('user-select', 'none').css('-khtml-user-select', 'none').css('-moz-user-select', 'none').css('-o-user-select', 'none').css('-webkit-user-select', 'none'); }
		jQuery.fn.enableSelection_5grid = function() { return jQuery(this).css('user-select', 'auto').css('-khtml-user-select', 'auto').css('-moz-user-select', 'auto').css('-o-user-select', 'auto').css('-webkit-user-select', 'auto'); }
		jQuery.fn.accelerate_5grid = function() { return jQuery(this).css('-webkit-transform', 'translateZ(0)').css('-webkit-backface-visibility', 'hidden').css('-webkit-perspective', '500'); }

	// Determine settings
		// DOM fix
			document.getElementsByTagName('script');

		// Get base URL, query string
			x = jQuery('script').filter(function() { return this.src.match(/5grid\/init\.js/); }).first();
			y = x.attr('src').split('?');
			baseURL = y[0].replace(/5grid\/init\.js/, '');

		// Override settings
			if (y.length > 1)
			{
				x = y[1].split('&');
				for (v in x)
				{
					w = x[v].split('=');
					wk = w[0].replace(/\./, '_');
					wv = w[1];
					
					// Thanks, @cmsalvado! :)
					if (!isNaN(parseFloat(wv)) && isFinite(wv))
						wv = parseInt(wv);
					
					_settings[wk] = wv;
				}
			}
	
	// Debug settings
		if (_settings.debug_noExtLoad == 1)
			headQueue.pushE_5grid = function(s) { };
	
	// Determine viewing modes
		doDesktop = doMobile = doFluid = do1000px = do1200px = doMobileOnly = false;
		v = _settings.use.split(',');
		
		if (jQuery.inArray('fluid', v) > -1)
			doFluid = true;
		if (jQuery.inArray('desktop', v) > -1)
			doDesktop = true;
		if (jQuery.inArray('1000px', v) > -1)
			do1000px = true;
		if (jQuery.inArray('1200px', v) > -1)
			do1200px = true;
		if (jQuery.inArray('mobile', v) > -1)
			doMobile = true;

		if (doMobile && !doFluid && !do1000px && !do1200px && !doDesktop)
			doMobileOnly = true;

	// Apply workarounds for broken/old browsers

		// Android, Webkit <= 534
			if (navigator.userAgent.match(/Android.+AppleWebKit\/534/))
			{
				_settings.mobileUI_titleBarFixed = 0;
				_settings.mobileUI_orientationDelay = 750;
			}

		// iOS <= 5
			if (navigator.userAgent.match(/([0-9]+)_([0-9\.\_]+) like Mac OS X/))
			{
				var version = RegExp.$1;

				if (version <= 5)
					_settings.mobileUI_titleBarFixed = 0;
			}

		// IE <= 8
			if (navigator.userAgent.match(/MSIE ([0-9]+)\./))
			{
				var version = RegExp.$1;

				// HTML5 Shiv
					if (version < 9)
						_head.append('<script type="text/javascript" src="' + baseURL + '5grid/html5shiv.js" />');

				// Versions that don't support CSS3 pseudo classes
					if (version < 8)
					{
						jQuery(function() {
							jQuery('.5grid, .5grid-layout, .do-5grid').after('<div style="clear: both;"></div>');
							jQuery('.5grid-layout').css('position', 'relative');
							jQuery('.5grid, .do-5grid').css('position', 'relative');
							jQuery('.5grid > .row > :first-child, .5grid-layout > .row > :first-child, .do-5grid > .row > :first-child').css('margin-left', '0');
							jQuery('.5grid > .row:first-child, .5grid-layout > .row:first-child, .do-5grid > .row:first-child').css('margin-top', '0');
							jQuery('.5grid > .row:last-child, .5grid-layout > .row:last-child, .do-5grid > .row:last-child').css('margin-bottom', '0');
						});
					}
			}

	// Insert stylesheets
		headQueue.pushE_5grid(baseURL + '5grid/core.css')
		headQueue.pushE_5grid(baseURL + _settings.prefix + '.css');

/*********************/
/* Responsive        */
/*********************/

	(function() {
		var	ww = _window.width(),
			sw = screen.width,
			orientation = window.orientation,
			devicePixelRatio = (window.devicePixelRatio ? window.devicePixelRatio : 1);

		// Adjustments
			// Scale breakpoints using device pixel ratio
				_settings.breakpoint_1000px = _settings.breakpoint_1000px * devicePixelRatio;
				_settings.breakpoint_mobile = _settings.breakpoint_mobile * devicePixelRatio;

			// Always use device's width regardless of orientation
				if (screen.width > screen.height
				&&	Math.abs(orientation) == 90)
					sw = screen.height;

			// Get real screen width on iOS devices
				if (navigator.userAgent.match(/(iPod|iPhone|iPad)/))
					sw = sw * devicePixelRatio;

		// Mobile (exclusive)
			if ((doMobile && (ww <= _settings.breakpoint_mobile || sw <= _settings.breakpoint_mobile)) || doMobileOnly)
			{
				_5grid.isMobile = true;
				_head.prepend('<meta name="viewport" content="initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0" />');
				headQueue.pushE_5grid(baseURL + '5grid/core-mobile.css');
				
				if (_settings.mobileUI == 1)
				{
					_settings.mobileUI_force = 1;

					if (_settings.mobileUI_theme != 'none')
					{
						headQueue.pushE_5grid(baseURL + '5grid/mobileUI-' + _settings.mobileUI_theme + '.css');

						if (_settings.mobileUI_themeTitleBarColor)
							headQueue.pushI_5grid('#mobileUI-site-titlebar { background-color: ' + _settings.mobileUI_themeTitleBarColor + '; }');

						if (_settings.mobileUI_themeNavColor)
							headQueue.pushI_5grid('#mobileUI-site-nav { background-color: ' + _settings.mobileUI_themeNavColor + '; }');
					}
				}

				headQueue.pushE_5grid(baseURL + _settings.prefix + '-mobile.css');
			}
		// Other
			else
			{
				// Fluid (exclusive)
					if (doFluid)
					{
						_5grid.isFluid = true;
						_head.prepend('<meta name="viewport" content="width=' + _settings.viewport_is1200px + '" />');
						headQueue.pushE_5grid(baseURL + '5grid/core-desktop.css');
						headQueue.pushE_5grid(baseURL + '5grid/core-fluid.css');
						headQueue.pushE_5grid(baseURL + _settings.prefix + '-fluid.css');
					}
				// Desktop
					else if (doDesktop)
					{
						_5grid.isDesktop = true;
						headQueue.pushE_5grid(baseURL + '5grid/core-desktop.css');
						headQueue.pushE_5grid(baseURL + _settings.prefix + '-desktop.css');
					
						// 1200px
							if (ww >= _settings.breakpoint_1000px)
							{
								_5grid.is1200px = true;
								_head.prepend('<meta name="viewport" content="width=' + _settings.viewport_is1200px + '" />');
								headQueue.pushE_5grid(baseURL + '5grid/core-1200px.css');
								
								// Load 1200px stylesheet if 1200px was explicitly enabled
									if (do1200px)
										headQueue.pushE_5grid(baseURL + _settings.prefix + '-1200px.css');
							}
						// 1000px
							else
							{
								_5grid.is1000px = true;
								_head.prepend('<meta name="viewport" content="width=' + _settings.viewport_is1000px + '" />');
								headQueue.pushE_5grid(baseURL + '5grid/core-1000px.css');

								// Load 1000px stylesheet if 1000px was explicitly enabled
									if (do1000px)
										headQueue.pushE_5grid(baseURL + _settings.prefix + '-1000px.css');
							}
					}
				// Other
					else
					{
						// 1000px (exclusive)
							if (do1000px && (ww < _settings.breakpoint_1000px || !do1200px))
							{
								_5grid.isDesktop = true;
								_5grid.is1000px = true;
								_head.prepend('<meta name="viewport" content="width=' + _settings.viewport_is1000px + '" />');
								headQueue.pushE_5grid(baseURL + '5grid/core-desktop.css');
								headQueue.pushE_5grid(baseURL + '5grid/core-1000px.css');
								headQueue.pushE_5grid(baseURL + _settings.prefix + '-1000px.css');
							}
						// 1200px (exclusive)
							else if (do1200px && (ww >= _settings.breakpoint_1000px || !do1000px))
							{
								_5grid.isDesktop = true;
								_5grid.is1200px = true;
								_head.prepend('<meta name="viewport" content="width=' + _settings.viewport_is1200px + '" />');
								headQueue.pushE_5grid(baseURL + '5grid/core-desktop.css');
								headQueue.pushE_5grid(baseURL + '5grid/core-1200px.css');
								headQueue.pushE_5grid(baseURL + _settings.prefix + '-1200px.css');
							}
					}
			}

		jQuery(function() {
			var _body = jQuery('body');

			if (_5grid.isFluid)
				_body.addClass('is-fluid');
			if (_5grid.isDesktop)
				_body.addClass('is-desktop');
			if (_5grid.is1000px)
				_body.addClass('is-1000px');
			if (_5grid.is1200px)
				_body.addClass('is-1200px');
			if (_5grid.isMobile)
				_body.addClass('is-mobile');
			
			jQuery('.5grid-layout').addClass('5grid'); 
		});
	})();

/*********************/
/* MobileUI          */
/*********************/

	if (_settings.mobileUI_force == 1)
		jQuery(function() {
			var	_body = jQuery('body'),
				_viewer,
				_wrapper,
				_nav,
				_nav_inner,
				_opener,
				_titlebar,
				_content;
			var	speed = _settings.mobileUI_slideSpeed,
				easing = 'swing',
				ww = _window.width(),
				wh = _window.height(),
				_nav_isActing = false,
				_nav_isOpen = false;
		
			_body.wrapInner('<div id="mobileUI-site-content" />');
			_body.wrapInner('<div id="mobileUI-site-wrapper" />');
			_body.wrapInner('<div id="mobileUI-site-viewer" />');
		
			// Move primary content
				var	_main_content = jQuery('.mobileUI-main-content'),
					_main_content_target = jQuery('.mobileUI-main-content-target');
				
				if (_main_content.length > 0)
					if (_main_content_target.length > 0)
						_main_content.prependTo(_main_content_target);
					else
						_main_content.prependTo(_main_content.parent());
		
			// Get site name, nav options
				var	x = jQuery('.mobileUI-site-name'), site_name = (x.length > 0 ? x.html() : ''),
					site_nav_options = new Array();
				
				jQuery('.mobileUI-site-nav a').each(function() {
					var t = jQuery(this), indent;
					indent = Math.max(0,t.parents('li').length - 1);
					site_nav_options.push(
						'<div class="mobileUI-site-nav-link mobileUI-site-nav-link-depth-' + indent + '" xhref="' + t.attr('href') + '"><span class="indent-' + indent + '"></span>' + t.text() + '</div>'
					);
				});

			// Configure elements
				if (site_nav_options.length > 0)
				{
					_nav_inner = jQuery('<div id="mobileUI-site-nav-inner"><nav>' + site_nav_options.join('') + '</nav></div>');
					_nav = jQuery('<div id="mobileUI-site-nav"></div>');
					_nav_inner.appendTo(_nav);
					_opener = jQuery('<div id="mobileUI-site-nav-opener">' + _settings.mobileUI_openerText + '</div>');
				}
				else
				{
					_nav_inner = jQuery();
					_nav = jQuery();
					_opener = jQuery();
				}

				_content = jQuery('#mobileUI-site-content');
				_titlebar = jQuery('<div id="mobileUI-site-titlebar"><div id="mobileUI-site-title">' + site_name + '</div></div>');
				_wrapper = jQuery('#mobileUI-site-wrapper');
				_viewer = jQuery('#mobileUI-site-viewer');

				var	_nav_width = ww - _settings.mobileUI_openerWidth,
					_nav_inner_pos,
					_content_width = ww,
					_wrapper_width = _nav_width + _content_width;

				// Wrapper
					_wrapper
						.accelerate_5grid()
						.css('position', 'absolute')
						.width(_wrapper_width);

				// Nav
					_nav
						.accelerate_5grid()
						.width(_nav_width)
						.prependTo(_wrapper)
						.css('position', 'absolute')
						.css('left', (-1 * _nav_width))
						.prepend('<div style="position: absolute; top: 0px; right: -1px; width: 1px; height: 1px;"></div>');

					// Inner
						_nav_inner
							.css('overflow', (isTouch ? 'hidden' : 'auto'))
							.bind('touchstart', function(e) {
								_nav_inner_pos = _nav_inner.scrollTop() + e.originalEvent.touches[0].pageY;
							})
							.bind('touchmove', function(e) {
								e.preventDefault();
								e.stopPropagation();
								_nav_inner.scrollTop(_nav_inner_pos - e.originalEvent.touches[0].pageY);
							});

					// Links
						_nav.find('.mobileUI-site-nav-link')
							.disableSelection_5grid()
							.css('cursor', 'pointer')
							.each(function() {
								var t = jQuery(this);
								t.tap_5grid(function(e) {
									e.preventDefault();
									e.stopPropagation();
								
									if (_nav_isOpen)
									{
										var href = t.attr('xhref');
										if (href && href.length > 0)
											_body.trigger('5grid_closeNav', [href]);
									}
								});
							});

				// Opener
					_opener
						.accelerate_5grid()
						.css('position', 'absolute')
						.css('z-index', 10001)
						.css('cursor', 'pointer')
						.disableSelection_5grid()
						.appendTo(_titlebar)
						.tap_5grid(function(e) {
							e.stopPropagation();
							e.preventDefault();
							_body.trigger('5grid_toggleNav');
						}, '', true);

				// Titlebar
					_titlebar
						.accelerate_5grid()
						.width(_content_width)
						.height(_settings.mobileUI_titleBarHeight)
						.css('z-index', 10000)
						.prependTo(_viewer);
						
					if (_settings.mobileUI_titleBarFixed)
					{
						_titlebar
							.bind('goActive_5grid', function() {
								_titlebar
									.css('position', 'fixed')
									.css('top', 0)
									.css('left', 0);
							})
							.bind('goInactive_5grid', function() {
								_titlebar
									.css('position', 'absolute')
									.css('top', _window.scrollTop())
									.css('left', _nav.width);
							})
							.trigger('goActive_5grid');
					}
					else
					{
						_titlebar
							.css('position', 'absolute')
							.css('top', _window.scrollTop())
							.css('left', _nav.width);
					}

				// Content
					_content
						.width(_content_width)
						.css('position', 'relative');
						
					if (_settings.mobileUI_titleBarOverlaid)
						_content
							.bind('resize', function() { _viewer.height(_content.height()); });
					else
						_content
							.css('padding-top', _settings.mobileUI_titleBarHeight)
							.bind('resize', function() { _viewer.height(_content.height() + _settings.mobileUI_titleBarHeight); });

				// Viewer
					_viewer
						.css('position', 'absolute')
						.css('overflow', 'hidden')
						.width(_content_width)
						.height(_content.height() + _settings.mobileUI_titleBarHeight);

				// Body
					_body
						.bind('5grid_toggleNav', function() {
							if (_nav_isOpen)
								_body.trigger('5grid_closeNav');
							else
								_body.trigger('5grid_openNav');
						})
						.bind('5grid_openNav', function() {
							
							// Check locking
								if (isLocked)
									return true;
								
								isLocked = true;

							// Mark nav as acting
								_nav_isActing = true;

							// Disable scrolling
								_body
									.bind('touchstart.5grid_nav_block', function(e) {
										e.stopPropagation();
										e.preventDefault();
									});
									
								_window
									.bind('scroll.5grid_nav_block', function(e) {
										e.preventDefault();
										e.stopPropagation();
										
										if (_nav_isOpen)
											_body.trigger('5grid_closeNav', [null, true]);
									});

							// Reposition nav
								_nav
									.css('top', _window.scrollTop());

								_nav_inner
									.height(window.innerHeight - _settings.mobileUI_navInnerPad)
									.scrollTop(0);

							// Deactivate titlebar
								_titlebar
									.trigger('goInactive_5grid');

							// Animate
								_wrapper.add(_titlebar)
									.animate({ left: _nav_width }, speed, easing, function() {
										// Unlock
											isLocked = false;
										
										// Correct body position (in case it was still scrolling when the nav opened)
											var x = parseInt(_nav.css('top'));
											if (x > 0)
												_window.scrollTop(parseInt(_nav.css('top')));
										
										// Mark nav as open, unmark as acting
											window.setTimeout(function() {
												_nav_isOpen = true;
												_nav_isActing = false;
											}, 300);
										
										// Add close event to content
											_content
												.tap_5grid(function(e) {
													e.preventDefault();
													e.stopPropagation();
													_body.trigger('5grid_closeNav');
												}, '5grid_nav_cclose');
						
										// Trigger event
											_5grid.trigger('mobileUINavOpen');
									});
						})
						.bind('5grid_closeNav', function(e, url, fast) {
							
							// Check locking
								if (isLocked)
									return true;

								isLocked = true;

							// Mark nav as acting
								_nav_isActing = true;

							// Remove close event from content
								_content.untap_5grid('5grid_nav_cclose');

							// Animate
								_wrapper.add(_titlebar)
									.animate({ left: 0 }, (fast ? 0 : speed), easing, function() {
										
										// Reactivate titlebar
											_titlebar
												.trigger('goActive_5grid');

										// Trigger event
											_5grid.trigger('mobileUINavclose');

										// Unlock
											isLocked = false;
										
										// Re-enable scrolling
											_body.unbind('touchstart.5grid_nav_block');
											_window.unbind('touchmove.5grid_nav_block');

										// Mark nav as closed, unmark as acting
											_nav_isOpen = false;
											_nav_isActing = false;
										
										// If a URL was passed, go to it
											if (url)
												window.setTimeout(function() {
													window.location.href = url;
												}, 150);
									});
						});

					// Window
						_window
							.bind('orientationchange', function(e) {
								window.setTimeout(function() {
									ww = _window.width();
									
									// Recalculate widths
										_nav_width = ww - _settings.mobileUI_openerWidth;
										_content_width = ww;
										_wrapper_width = _nav_width + _content_width;

									// Resize
										_wrapper.width(_wrapper_width);
										_content.width(_content_width);
										_nav
											.css('left', (-1 * _nav_width))
											.width(_nav_width);

										_titlebar.width(ww);
										_viewer.width(ww);

									// Trigger event
										_5grid.trigger('orientationChange');
								
								}, _settings.mobileUI_orientationDelay);
							});

			// Remove mobileUI-hide elements
				jQuery('.mobileUI-hide').remove();
				
			// Remove address bar
				if (_settings.mobileUI_hideAddressBar == 1)
					_window.load(function() {
						if (_window.scrollTop() == 0)
							window.scrollTo(0, 1);
					});
		});

/*********************/
/* Head Queue        */
/*********************/

	headQueue.process_5grid();
	_5grid.isReady = true;

	jQuery(function() {
		if (_5grid.readyWait)
			jQuery(window).load(function() { _5grid.readyCheck(); });
		else
			_5grid.readyCheck();
	});

})();