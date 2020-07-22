class randomRecipeElement extends HTMLElement{
	
	connectedCallback() {
		this.render();
	}
   
	render() {
		this.innerHTML = `
		`;
	}
}

customElements.define("random-element", randomRecipeElement);