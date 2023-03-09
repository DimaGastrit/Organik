
const isMoile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	IOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMoile.Android() ||
			isMoile.BlackBerry() ||
			isMoile.IOS() ||
			isMoile.Opera() ||
			isMoile.Windows());
	}
};

if (isMoile.any()) {
	document.body.classList.add('_touch');

} else {
	document.body.classList.add('_pc');
}
//SKROl AFTER CLIK
const navLink = document.querySelectorAll('.nav__link[data-goto]');
if (navLink.length > 0) {
	navLink.forEach(navLink => {
		navLink.addEventListener("click", onMenuLinkClik)
	});
	function onMenuLinkClik(e) {
		const navLink = e.target;
		if (navLink.dataset.goto && document.querySelector(navLink.dataset.goto)) {
			const gotoBlock = document.querySelector(navLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');

			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}
///Меню бургер//

const iconMenu = document.querySelector('.nav__icon');
const menuBody = document.querySelector('.nav__body');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}








