Ractive.extend({

	template: RactiveF.templates['ux-off-canvas'],

	data: function () {
		return {
			title: 'UX Off Canvas Demo',
			expandedState: '',
			leftItems: [

				{ label: 'Learn Move' },
				{ label: 'Home', href: '.' },
				{ label: 'Docs', href: 'docs.html' },
				{ label: 'Data', href: 'data.html' },
				{ label: 'Demo', href: 'demo.html' },

				{ label: 'External Links' },
				{ label: 'Foundation docs', href: 'http://foundation.zurb.com/docs/' },
				{ label: 'RactiveJS docs', href: 'http://docs.ractivejs.org/latest/get-started', target: '_blank' }

			],
			rightItems: [

				{ label: 'Asimov\'s Works' },
				{ label: 'Recommended order', href: 'http://scifi.stackexchange' +
				'.com/questions/39669/what-is-the-correct-order-for-reading-material-of-isaac-asimov' }

			],
			mainContent: '<p>Set in the year 0 F.E. (&quot;Foundation Era&quot;), The Psychohistorians opens on ' +
			'Trantor, the capital of the 12,000-year-old Galactic Empire. Though the empire appears stable and ' +
			'powerful, it is slowly decaying in ways that parallel the decline of the Western Roman Empire. ' +
			'Hari Seldon, a mathematician and psychologist, has developed psychohistory, a new field of science and ' +
			'psychology that equates all possibilities in large societies to mathematics, allowing for the ' +
			'prediction of future events.</p>' +
			'<p>Lorem ipsum dolor.</p><p>Lorem ipsum dolor.</p><p>Lorem ipsum dolor.</p><p>Lorem ipsum dolor.</p>'
		};
	},

	computed: {

		/**
		 * @returns {string} CSS class: left = move-right or right = move-left.
		 */
		getExpandedClass: function () {

			switch (this.get('expandedState')) {
				case 'left':
					return 'move-right';
				case 'right':
					return 'move-left';
			}

			// Default is empty string for no css class.
			return '';

		}

	},

	oninit: function () {

		// You can expand from left or right, or none. Can't do both at the same time.
		this.on('toggleMenu', function (event, direction) {
			this.set('expandedState', direction);
		});

	}

});
