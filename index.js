document.querySelector('.mobile-nav-menu-btn').addEventListener('click', e => {
	const navItems = document.querySelector('.nav-items-list');

	if (navItems.classList.contains('h-0')) {
		navItems.style.height = `${navItems.scrollHeight}px`;
		navItems.classList.remove('h-0');
	} else {
		navItems.style.height = `0px`;
		navItems.classList.add('h-0');
	}
});
