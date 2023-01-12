const navItemsList = document.querySelector('.nav-items-list-mobile');
const initialNavHeight = document.querySelector('nav').getBoundingClientRect().height;

document.querySelector('.mobile-nav-menu-btn').addEventListener('click', () => {
	if (navItemsList.classList.contains('h-0')) {
		navItemsList.style.height = `${navItemsList.scrollHeight}px`;
		document.querySelector('nav').style.height = `${document.querySelector('nav').getBoundingClientRect().height + navItemsList.scrollHeight}px`;
		navItemsList.classList.remove('h-0');
		navItemsList.dataset.collapsed = 'false';
	} else {
		navItemsList.style.height = `0px`;
		document.querySelector('nav').style.height = `${initialNavHeight}px`;
		navItemsList.classList.add('h-0');
		navItemsList.dataset.collapsed = 'true';
	}
});

document.querySelectorAll('.nav-items-list-mobile li').forEach(elem => elem.addEventListener('click', e => {
	navItemsList.style.height = `0px`;
	document.querySelector('nav').style.height = `${initialNavHeight}px`;
	navItemsList.classList.add('h-0');
	navItemsList.dataset.collapsed = 'true';
}));
