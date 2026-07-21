document.addEventListener('DOMContentLoaded', function () {

	var toggle = document.querySelector('.nav-toggle');
	var nav = document.getElementById('site-nav');

	if (toggle && nav) {
		toggle.addEventListener('click', function () {
			var isOpen = nav.classList.toggle('is-open');
			toggle.setAttribute('aria-expanded', isOpen);
		});

		nav.querySelectorAll('a').forEach(function (link) {
			link.addEventListener('click', function () {
				nav.classList.remove('is-open');
				toggle.setAttribute('aria-expanded', 'false');
			});
		});
	}

	var sections = document.querySelectorAll('main > section[id]');
	var navLinks = document.querySelectorAll('#site-nav a');

	if (sections.length && navLinks.length && 'IntersectionObserver' in window) {
		var observer = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					navLinks.forEach(function (link) {
						link.classList.toggle('is-active', link.getAttribute('href') === '#' + entry.target.id);
					});
				}
			});
		}, { rootMargin: '-40% 0px -55% 0px' });

		sections.forEach(function (section) {
			observer.observe(section);
		});
	}

});
