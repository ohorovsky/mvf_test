export default class Timepicker{
	constructor(args){
		this.target = args.target;
		this._renderWidget();
		this.showTimeBtn = document.querySelector('.default__body .body__style--icon');
		this.timeGrid = document.querySelector('.timepickers .default__time-grid');
		this.timepickers = document.querySelector('.timepickers');
		this.timeList = document.querySelector('.fill-me-up');
		this.downCaretBtn = document.querySelector('.body__style--caret');
		this.ampmSelector = document.querySelector('.ampm-selector');
		this.ampm = document.querySelector('.ampm');

		this.hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
		this.minutes = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
		this.hoursTable = document.querySelector('.table--hours');

		this.minutesTable = document.querySelector('.table--minutes');
		this.timeWrapper = document.querySelector('.time-wrapper');
		this.carets = document.querySelectorAll('.hover-carets');
		

		this.quaterHours = [0, 15, 30, 45];

		this.hoursDisplay = document.querySelector('.hour-num');
		this.minutesDisplay = document.querySelector('.minute-num');

		

		
		this._main();
	}

	addZero(n) {
	    return (n < 10) ? ("0" + n) : n;
	}

	showElement(element, classNameEl,  button, classNameBtn){
		element.classList.toggle(classNameEl);
		button.classList.toggle(classNameBtn);
	}

	populateTable(arr){
		const html = arr.map(element => {
			return `<div class="table__element">${this.addZero(element)}</div>`
		}).join("");
		return html;
	}

	populateList(hours, minutes, amPm){
		let html = "";
		for(let hour in hours){
			minutes.map(quater => html += `<li data-hour="${this.addZero(hours[hour])}" data-minute="${this.addZero(quater)}">${this.addZero(hours[hour])} : ${this.addZero(quater)} ${amPm}</li>`)
		}
		return html;
	}

	changeTimeFromTable(elementToChange, table, clickedElement){
		elementToChange.innerHTML = clickedElement.innerHTML;
		table.forEach(time => time.classList.contains("time--active") ? time.classList.remove('time--active') : null)
		clickedElement.classList.add('time--active');
	
	}


	_main(){
		this.hoursTable.innerHTML = this.populateTable(this.hours);
		this.minutesTable.innerHTML = this.populateTable(this.minutes);
		this.timeList.innerHTML = this.populateList(this.hours, this.quaterHours, this.ampm.innerHTML);
		
		const tableElementHours = this.hoursTable.querySelectorAll('.table__element')		//these needs to be declared here because in constructor it is not populated yet
		const tableElementMinutes = this.minutesTable.querySelectorAll('.table__element')
		let listItems = this.timeList.querySelectorAll('li');
		
		this.timeWrapper.addEventListener('mouseenter', () => this.carets.forEach(caret => caret.classList.add('show-carets')))
		this.timeWrapper.addEventListener('mouseleave', () => this.carets.forEach(caret => caret.classList.remove('show-carets')))
		this.showTimeBtn.addEventListener("click", ()=>{
			this.showElement(this.timeGrid, "show-me", this.showTimeBtn, "body__style--icon--active")
			this.downCaretBtn.classList.contains("body__style--caret--active") ? this.showElement(this.timeList, "show-me", this.downCaretBtn, "body__style--caret--active") : null;
		});
		this.ampmSelector.addEventListener("click", () => {
			this.ampm.innerHTML === "AM" ? this.ampm.innerHTML = "PM" : this.ampm.innerHTML = "AM"
			this.timeList.innerHTML = this.populateList(this.hours, this.quaterHours, this.ampm.innerHTML);
			listItems = this.timeList.querySelectorAll('li');
			this.addListeners(listItems, tableElementHours, tableElementMinutes);
		});
		this.downCaretBtn.addEventListener("click", () => {
			this.showElement(this.timeList, "show-me", this.downCaretBtn, "body__style--caret--active")
			this.showTimeBtn.classList.contains("body__style--icon--active") ? this.showElement(this.timeGrid, "show-me", this.showTimeBtn, "body__style--icon--active") : null;
		});
		
		tableElementHours.forEach(hour => hour.addEventListener('click', () => {
			
			this.changeTimeFromTable(this.hoursDisplay, tableElementHours, hour);
		}))
		tableElementMinutes.forEach(minute => minute.addEventListener('click', () => {
			this.changeTimeFromTable(this.minutesDisplay, tableElementMinutes, minute);
		}))
		this.addListeners(listItems, tableElementHours, tableElementMinutes);
		this.carets.forEach(caret => caret.addEventListener('click', () => {
			const hourNumber = +this.hoursDisplay.innerHTML;
			const minuteNumber = +this.minutesDisplay.innerHTML;
			
			tableElementHours.forEach(time => time.classList.contains("time--active") ? time.classList.remove('time--active') : null)
			tableElementMinutes.forEach(time => time.classList.contains("time--active") ? time.classList.remove('time--active') : null)

			if("updatehour" in caret.dataset){
				let updatingHour = hourNumber + parseFloat(caret.dataset.updatehour);
				updatingHour > 12 ? updatingHour = 1 : null;
				updatingHour < 1 ? updatingHour = 12 : null;
				this.hoursDisplay.innerHTML = this.addZero(updatingHour);
			}else{
				let updatingMinute = minuteNumber + parseFloat(caret.dataset.updatemin);
				updatingMinute > 55 ? updatingMinute = 0 : null;
				updatingMinute < 0 ? updatingMinute = 55 : null;
				this.minutesDisplay.innerHTML = this.addZero(updatingMinute);
			}
			

		}))
		
	}
	//this function wass necessary in order to fix bug after changing innerhtml of list elements with AM/PM button... 
	addListeners(listItems, tableElementHours, tableElementMinutes){
		listItems.forEach(item => item.addEventListener("click", () => {
			this.hoursDisplay.innerHTML = item.dataset.hour;
			this.minutesDisplay.innerHTML = item.dataset.minute;
			this.timeList.classList.remove('show-me');
			this.downCaretBtn.classList.remove('body__style--caret--active');
			tableElementHours.forEach(time => time.classList.contains("time--active") ? time.classList.remove('time--active') : null)
			tableElementMinutes.forEach(time => time.classList.contains("time--active") ? time.classList.remove('time--active') : null)

		}))
	}
	//*******************************************
	//***********Changing time*******************
	//*******************************************

	changeTimeFromTable(elementToChange, table, clickedElement){
		elementToChange.innerHTML = clickedElement.innerHTML;
		table.forEach(time => time.classList.contains("time--active") ? time.classList.remove('time--active') : null)
		clickedElement.classList.add('time--active');	
	}



	_renderWidget(){
		let target = document.querySelector(this.target);
		target.innerHTML = `
		
	      <div class="timepickers__default">
	        <div class="default__heading">Default</div>
	        <div class="default__body">
	          
	            <div class="body__style body__style--icon"><i class="fa fa-clock-o" aria-hidden="true"></i></div>
	            <div class="time-wrapper">
	              <div class="body__style body__style--hours">
	                <div class="hour-num">12</div>
	                <i class="hover-carets fa fa-angle-up" data-updatehour="1" aria-hidden="true"></i>
	                <i class="hover-carets fa fa-angle-down" data-updatehour="-1" aria-hidden="true"></i>
	              </div>
	              <div class="body__style body__style--collon">:</div>
	              <div class="body__style body__style--minutes">
	                <div class="minute-num">00</div>
	                <i class="hover-carets fa fa-angle-up" data-updatemin="5" aria-hidden="true"></i>
	                <i class="hover-carets fa fa-angle-down" data-updatemin="-5" aria-hidden="true"></i>
	              </div>
	            </div>            
	            <div class="body__style body__style--caret"><i class="fa fa-caret-down" aria-hidden="true"></i></div>
	            
	          
	          
	          <div class="body__style body__style--ampm">
	            <div class="ampm">AM</div>
	            <div class="ampm-selector"><i class="fa fa-refresh" aria-hidden="true"></i></div>
	          </div>
	        </div>
	        <div class="select-time-list">
	              
	          <ul class="fill-me-up"></ul>
	        </div>
	        <div class="default__time-grid">
	          <div class="time-grid-heading">HOURS</div>
	          <hr class="line-break">
	          <div class="time-grid-table table--hours">
	            
	          </div>
	          <div class="time-grid-heading">MINUTES</div>
	          <hr class="line-break">
	          <div class="time-grid-table table--minutes">
	            
	          </div>
	        </div>
	          
	        
	      </div>
	    

		`;
	}
	
}