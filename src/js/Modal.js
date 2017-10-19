export default class Modal {
	constructor(args) {
		this.target = args.target;
		this._renderWidget();

		this._main();
	}

	showElement(element, classNameEl, button, classNameBtn) {
		element.classList.toggle(classNameEl);
		button.classList.toggle(classNameBtn);
	}

	_main() {
		// this.hoursTable.innerHTML = this.populateTable(this.hours);
		// this.minutesTable.innerHTML = this.populateTable(this.minutes);
		// this.timeList.innerHTML = this.populateList(this.hours, this.quaterHours, this.ampm.innerHTML);
		// const tableElementHours = this.hoursTable.querySelectorAll('.table__element')		//these needs to be declared here because in constructor it is not populated yet
		// const tableElementMinutes = this.minutesTable.querySelectorAll('.table__element')
		// let listItems = this.timeList.querySelectorAll('li');
		// this.timeWrapper.addEventListener('mouseenter', () => this.carets.forEach(caret => caret.classList.add('show-carets')))
		// this.timeWrapper.addEventListener('mouseleave', () => this.carets.forEach(caret => caret.classList.remove('show-carets')))
		// this.showTimeBtn.addEventListener("click", ()=>{
		// 	this.showElement(this.timeGrid, "show-me", this.showTimeBtn, "body__style--icon--active")
		// 	this.downCaretBtn.classList.contains("body__style--caret--active") ? this.showElement(this.timeList, "show-me", this.downCaretBtn, "body__style--caret--active") : null;
		// });
		// this.ampmSelector.addEventListener("click", () => {
		// 	this.ampm.innerHTML === "AM" ? this.ampm.innerHTML = "PM" : this.ampm.innerHTML = "AM"
		// 	this.timeList.innerHTML = this.populateList(this.hours, this.quaterHours, this.ampm.innerHTML);
		// 	listItems = this.timeList.querySelectorAll('li');
		// 	this.addListeners(listItems, tableElementHours, tableElementMinutes);
		// });
		// this.downCaretBtn.addEventListener("click", () => {
		// 	this.showElement(this.timeList, "show-me", this.downCaretBtn, "body__style--caret--active")
		// 	this.showTimeBtn.classList.contains("body__style--icon--active") ? this.showElement(this.timeGrid, "show-me", this.showTimeBtn, "body__style--icon--active") : null;
		// });
		// tableElementHours.forEach(hour => hour.addEventListener('click', () => {
		// 	this.changeTimeFromTable(this.hoursDisplay, tableElementHours, hour);
		// }))
		// tableElementMinutes.forEach(minute => minute.addEventListener('click', () => {
		// 	this.changeTimeFromTable(this.minutesDisplay, tableElementMinutes, minute);
		// }))
		// this.addListeners(listItems, tableElementHours, tableElementMinutes);
		// this.carets.forEach(caret => caret.addEventListener('click', () => {
		// 	const hourNumber = +this.hoursDisplay.innerHTML;
		// 	const minuteNumber = +this.minutesDisplay.innerHTML;
		// 	tableElementHours.forEach(time => time.classList.contains("time--active") ? time.classList.remove('time--active') : null)
		// 	tableElementMinutes.forEach(time => time.classList.contains("time--active") ? time.classList.remove('time--active') : null)
		// 	if("updatehour" in caret.dataset){
		// 		let updatingHour = hourNumber + parseFloat(caret.dataset.updatehour);
		// 		updatingHour > 12 ? updatingHour = 1 : null;
		// 		updatingHour < 1 ? updatingHour = 12 : null;
		// 		this.hoursDisplay.innerHTML = this.addZero(updatingHour);
		// 	}else{
		// 		let updatingMinute = minuteNumber + parseFloat(caret.dataset.updatemin);
		// 		updatingMinute > 55 ? updatingMinute = 0 : null;
		// 		updatingMinute < 0 ? updatingMinute = 55 : null;
		// 		this.minutesDisplay.innerHTML = this.addZero(updatingMinute);
		// 	}
		// }))
	}

	_renderWidget() {
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
