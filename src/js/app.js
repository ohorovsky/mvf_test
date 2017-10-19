import '../less/main.less';
import Modal from './Modal.js';
// import Datepicker from './Datepicker.js';

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

// const settingsBtn = document.querySelector('.heading__settings-icon');
// const settingsChoice = document.querySelector('.settings-choice');
// const timeButton = document.querySelector('.icons--time');
// const dateButton = document.querySelector('.icons--date');
// const timepickers = document.querySelector('.timepickers');
// const datepicker = document.querySelector('.datepicker');

// const TIMEPICKER = new Timepicker({
// 	target : '.timepickers'
// });
// const DATEPICKER = new Datepicker({
// 	target: '.datepicker'
// });

// const showElement = Timepicker.prototype.showElement;

// timeButton.addEventListener('click', function(){
// 	showElement(timepickers, "show-timepickers", this, "icons--time--active")
// 	showElement(settingsChoice, "settings-choice-show", settingsBtn, "settings-icon-active")
// 	datepicker.classList.contains("show-datepicker") ? showElement(datepicker, "show-datepicker", dateButton, "icons--date--active") : null
// });
// dateButton.addEventListener('click', function(){
// 	showElement(datepicker, "show-datepicker", this, "icons--date--active")
// 	showElement(settingsChoice, "settings-choice-show", settingsBtn, "settings-icon-active")
// 	timepickers.classList.contains("show-timepickers") ? showElement(timepickers, "show-timepickers", timeButton, "icons--time--active") : null
// });
// settingsBtn.addEventListener("click", function(){showElement(settingsChoice, "settings-choice-show", this, "settings-icon-active")});
