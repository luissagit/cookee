const footerArea = document.querySelector("footer")

function renderFooter() {
	footerArea.innerHTML = `
		<p>Made with <span class="fa fa-heart"></span> by Luissa Nugraha</p>
	`;
}

export default renderFooter;