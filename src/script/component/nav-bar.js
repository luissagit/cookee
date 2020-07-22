class navigBar extends HTMLElement{
	
	connectedCallback() {
		this.render();
	}
   
	render() {
		this.innerHTML = `
			<a id="nav-home" class="nav-card active" href="#title">
				<div id="title">
					Cookee
				</div>
			</a>
			<a id="nav-origin" class="nav-card" href="#listArea">
				Origin
			</a>
			<a id="nav-cat" class="nav-card" href="#listCat">
				Category
			</a>
			<a href="javascript:void(0);" class="icon" id="navBar">
				<i class="fa fa-bars"></i>
			</a>
		`;
	}
}

customElements.define("nav-bar", navigBar);