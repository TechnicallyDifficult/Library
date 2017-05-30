class Paginator {
	constructor(items, perpage = 10, options = {}) {
		this.items = items;
		this.perpage = perpage;
		this.currentPage = options.start
			|| 1;
		this._stockTransitions = {
			default() {
				this.items.css('display', 'none');
				this.currentPageItems.css('display', '');
			}
		};
		this.transition = options.transition
			|| 'default';
	}

	get pageTotal() {
		return Math.ceil(this.items.length / this.perpage);
	}

	set transition(val) {
		if (typeof val === 'string') {
			this._transition = this._stockTransitions[val]
				|| this._transition;
		} else if (typeof val === 'function') {
			this._transition = val;
		}
		return this._transition;
	}

	get transition() {
		return this._transition;
	}

	get currentPageItems() {
		return this.pageItems(this.currentPage);
	}

	pageItems(page) {
		return this.items.slice((page - 1) * this.perpage, page * this.perpage);
	}

	update() {

	}

	jump(to) {
		// transition
		this.currentPage = to;
	}

	next() {
		this.jump(this.currentPage + 1);
	}

	prev() {
		this.jump(this.currentPage - 1);
	}

	first() {
		this.jump(1);
	}

	last() {

	}
}

var paginator = {
	paginate: function (elements, page = 1, perpage = 5) {
		var page = (elements.index('li:not(.hidden)') + perpage) / perpage,
			start = (page - 1) * perpage,
			end = page * perpage;

		elements
			.slice(0, start)
				.addClass('hidden')
			.end()
			.slice(start, end)
				.removeClass('hidden')
			.slice(end)
				.addClass('hidden');
	},
};

$('.prev').click(function() {

});