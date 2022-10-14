var app = new Vue({
	el: '#app',
	data: {
		lista: tareas,
		elementosPorPagina: 10,
		datosPaginados: [],
		paginaActual: 1,
	},
	mounted() {
		this.getDataPagina(1);
	},
	methods: {
		totalPaginas() {
			// ceil redondea al mayor
			return Math.ceil(this.lista.length / this.elementosPorPagina);
		},
		getDataPagina(noPagina) {
			this.paginaActual = noPagina;
			this.datosPaginados = [];
			let ini = noPagina * this.elementosPorPagina - this.elementosPorPagina;
			let fin = noPagina * this.elementosPorPagina;
			// for (let i = ini; i < fin; i++) {
			// 	this.datosPaginados.push(this.lista[i]);
			// }
			this.datosPaginados = this.lista.slice(ini, fin);
		},
		getPreviousPage() {
			if (this.paginaActual > 1) {
				this.paginaActual--;
			}
			this.getDataPagina(this.paginaActual);
		},
		getNextPage() {
			if (this.paginaActual < this.totalPaginas()) {
				this.paginaActual++;
			}
			this.getDataPagina(this.paginaActual);
		},
		isActive(noPagina) {
			return noPagina == this.paginaActual ? 'active' : '';
			// if (noPagina == this.paginaActual){
			// 	return 'active';
			// }
			// else {
			// 	return '';
			// }
		},
	},
});
