import '../less/main.less';
import Modal from './Modal.js';

//******************************************************
//******************** Quote Options *******************
//******************************************************

const fromTextField = document.querySelector('.from-textfield');
const fromText = fromTextField.querySelector('.text');
const fromList = document.querySelector('.from-list');
const toTextField = document.querySelector('.to-textfield');
const toText = toTextField.querySelector('.text');
const toList = document.querySelector('.to-list');
const listItems = document.querySelectorAll('.getQuotes li');

showList(fromTextField, fromList, toList);
showList(toTextField, toList, fromList);
selectItem(listItems);

function showList(trigger, listToShow, listToCheck) {
	trigger.addEventListener('click', function() {
		listToShow.classList.toggle('show');
		listToCheck.classList.contains('show') ? listToCheck.classList.remove('show') : null;
	});
}

function selectItem(items) {
	items.forEach(item =>
		item.addEventListener('click', function() {
			if (fromList.classList.contains('show')) {
				fromText.innerHTML = this.innerHTML;
				fromList.classList.remove('show');
			} else {
				toText.innerHTML = this.innerHTML;
				toList.classList.remove('show');
			}
		})
	);
}

//******************************************************
//******************** Interactive Tab *****************
//******************************************************

const dots = document.querySelectorAll('.dot');
const carousels = document.querySelectorAll('.carousel');

dots.forEach(dot =>
	dot.addEventListener('click', function() {
		carousels.forEach(carousel => {
			carousel.classList.contains('active') ? carousel.classList.remove('active') : null;
			carousel.dataset.item === this.dataset.item ? carousel.classList.add('active') : null;
		});
		dots.forEach(dot => {
			dot.classList.contains('active') ? dot.classList.remove('active') : null;
		});
		this.classList.add('active');
	})
);

//******************************************************
//******************** Modal ***************************
//******************************************************

const MODAL = new Modal({
	target: '.overlay',
	trigger: '#privacyLink'
});
