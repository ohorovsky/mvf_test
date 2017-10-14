
import '../less/main.less';
import Timepicker from './Timepicker.js';
import Datepicker from './Datepicker.js';

const settingsBtn = document.querySelector('.heading__settings-icon');
const settingsChoice = document.querySelector('.settings-choice');
const timeButton = document.querySelector('.icons--time');
const dateButton = document.querySelector('.icons--date');
const timepickers = document.querySelector('.timepickers');
const datepicker = document.querySelector('.datepicker');

const TIMEPICKER = new Timepicker({
	target : '.timepickers'	
});
const DATEPICKER = new Datepicker({
	target: '.datepicker'
});

const showElement = Timepicker.prototype.showElement;

timeButton.addEventListener('click', function(){
	showElement(timepickers, "show-timepickers", this, "icons--time--active")
	showElement(settingsChoice, "settings-choice-show", settingsBtn, "settings-icon-active")
	datepicker.classList.contains("show-datepicker") ? showElement(datepicker, "show-datepicker", dateButton, "icons--date--active") : null
});
dateButton.addEventListener('click', function(){
	showElement(datepicker, "show-datepicker", this, "icons--date--active")
	showElement(settingsChoice, "settings-choice-show", settingsBtn, "settings-icon-active")
	timepickers.classList.contains("show-timepickers") ? showElement(timepickers, "show-timepickers", timeButton, "icons--time--active") : null
});
settingsBtn.addEventListener("click", function(){showElement(settingsChoice, "settings-choice-show", this, "settings-icon-active")});
