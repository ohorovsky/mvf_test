export default class Modal {
	constructor(args) {
		this.overlay = document.querySelector(args.target);
		this.trigger = document.querySelector(args.trigger);
		this._renderWidget();
		this._main();
	}

	_main() {
		const modal = document.querySelector('#modal');
		const overlay = document.querySelector('.overlay');
		const times = document.querySelector('.fa-times');

		times.addEventListener('click', () => document.body.classList.remove('active'));

		this.trigger.addEventListener('click', e => {
			e.preventDefault();
			document.body.classList.add('active');
			this.overlay.addEventListener('click', () => {
				document.body.classList.remove('active');
			});
		});
	}

	_renderWidget() {
		this.overlay.innerHTML = `
		
	      <div id="modal">
	        <i class="fa fa-times" aria-hidden="true"></i>
	        <h3>My Modal</h3>
	        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur assumenda, numquam, ducimus incidunt earum, hic explicabo, repellendus debitis eum nemo magnam fugiat dolore maxime nam at. Temporibus laudantium voluptatibus earum, repudiandae illo facere reiciendis aperiam maiores, molestias harum iusto? Ipsum dolores veniam aliquam eaque doloremque nam tempore neque excepturi qui.</p>
	      </div>
	    

		`;
	}
}
