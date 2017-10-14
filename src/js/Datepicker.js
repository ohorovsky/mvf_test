export default class Datepicker {
	constructor(args) {
		this.target = args.target;
		this._renderWidget();
		this.monthsBox = document.querySelector('.month-year-box');
		this.daysBox = document.querySelector('.datepicker__days');
		this.arrows = document.querySelectorAll('.arrow');
		this.restDays; //declaring these two because they need to be updated inside functions
		this.firstDay;
		this.dayElements;
		this.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		this.actualDate = new Date();
		this.initialYear = this.actualDate.getFullYear();
		this.initialMonth = this.monthNames[this.actualDate.getMonth()];
		this.days = [];
		this.lastUpdatedMonth = this.actualDate.getMonth();
		this.lastUpdatedYear = this.initialYear;
		this._initialState();
	}

	_addZero(n) {
		return (n < 10) ? ("0" + n) : n;
	}

	_initialState() {
		this.monthsBox.innerHTML = `${this.initialMonth} ${this.initialYear}`
		this.daysBox.innerHTML = this._populateDays(this.actualDate.getMonth(), this.initialYear);
		this._populateAllShiet();
		this.arrows.forEach(arrow => arrow.addEventListener('click', () => this._updateMonth(arrow)))
	}
	_populateAllShiet() {
		this.restDays = document.querySelectorAll('.rest-days') //here we are updating these two from top on page load and adding event listeners
		this.firstDay = document.querySelector('.first-day');
		this.restDays.forEach(day => day.addEventListener("click", () => { this._updateMonth(day) }));
		this.firstDay.addEventListener('click', () => { this._updateMonth(this.firstDay) });
		this.dayElements = document.querySelectorAll('.day-element');
		this.dayElements.forEach(day => day.addEventListener('click', () => {
			this.dayElements.forEach(element => element.classList.contains("highlight") ? element.classList.remove('highlight') : null)
			day.classList.add('highlight');
		}))
	}

	_getDaysInMonth(month, year) {
		return new Date(year, month, 0).getDate();
		// Here January is 0 based normally is 1 based
		// return new Date(year, month+1, 0).getDate();
	};

	_populateDays(month, year) {
		this.days = []; //reset days array because it will hold all days of months
		const getDays = this._getDaysInMonth(month + 1, year); //month + 1 because this function is taking real months and array is starting from 0
		this.days.push(this._getDaysInMonth(month, year)); //this is for first day-element from last month
		let html = "";
		for (let i = 1; i <= getDays; i++) {
			this.days.push(i);
		}
		html = this.days.map((day, i) => {
			if (i == 0) return `<div class='day-element first-day' data-update="-1">${this._addZero(day)}</div>`;
			return `<div class='day-element'>${this._addZero(day)}</div>`
		}).concat(this._fillRestDays()).join("");
		return html;
	}
	
	_fillRestDays() {
		this.restDays = [];
		for (let i = 1; i <= 35 - this.days.length; i++) {
			this.restDays.push(i);
		}
		let html = this.restDays.map(day => {
			return `<div class='day-element rest-days' data-update="1">${this._addZero(day)}</div>`
		})
		return html;
	}

	_updateMonth(arrow) {
		this.lastUpdatedMonth += parseFloat(arrow.dataset.update);
		if (this.lastUpdatedMonth == 12) {
			this.lastUpdatedYear++;
			this.lastUpdatedMonth = 0
		}
		if (this.lastUpdatedMonth == -1) {
			this.lastUpdatedYear--;
			this.lastUpdatedMonth = 11;
		}
		this._animate(arrow);
		setTimeout(() => {
			this.monthsBox.innerHTML = `${this.monthNames[this.lastUpdatedMonth]} ${this.lastUpdatedYear}`;
			this.daysBox.innerHTML = this._populateDays(this.lastUpdatedMonth, this.lastUpdatedYear);
			this._populateAllShiet();
		}, 150)
	}

	_animate(arrow) {
		if (arrow.dataset.update == "1") {
			this.daysBox.classList.add('transition');
			this.daysBox.classList.add('pre-animation-right-arrow');
			setTimeout(() => {
				this.daysBox.classList.remove('transition');
				this.daysBox.classList.remove('pre-animation-right-arrow');
				this.daysBox.classList.add('pre-animation-left-arrow');
				setTimeout(() => {
					this.daysBox.classList.add('transition');
					this.daysBox.classList.remove('pre-animation-left-arrow')

				}, 150)
			}, 150)
		}
		else {
			this.daysBox.classList.add('transition');
			this.daysBox.classList.add('pre-animation-left-arrow');
			setTimeout(() => {
				this.daysBox.classList.remove('transition');
				this.daysBox.classList.remove('pre-animation-left-arrow');
				this.daysBox.classList.add('pre-animation-right-arrow');
				setTimeout(() => {
					this.daysBox.classList.add('transition');
					this.daysBox.classList.remove('pre-animation-right-arrow')
				}, 150)
			}, 150)
		}
	}

	_renderWidget() {
		let target = document.querySelector(this.target);
		target.innerHTML = `
			
		         <div class="wrapper">
		             <div class="datepicker__months">
		                 <div class="month arrow left-arrow" data-update="-1"><</div>
		                 <div class="month month-year-box"></div>
		                 <div class="month arrow right-arrow" data-update="1">></div>
		             </div>
		             <div class="datepicker__days"></div>
		         </div>
		     
		`;
	}



}

