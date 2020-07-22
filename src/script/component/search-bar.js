class SearchBar extends HTMLElement {
   connectedCallback(){
       this.render();
   }
  
   set clickEvent(event) {
       this._clickEvent = event;
       this.render();
   }
 
   get value() {
       return this.querySelector("#searchElement").value;
   }
 
   render() {
       this.innerHTML = `
		<div id="search-container" class="search-container">
			<input placeholder="Search recipe" id="searchElement" type="search">
			<button id="searchButtonElement" type="submit"><span class="fa fa-search"></span> Search</button>
		</div>
       `;
 
       this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
   }
}

customElements.define("search-bar", SearchBar);