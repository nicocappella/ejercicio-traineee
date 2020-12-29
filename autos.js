class Cars {
	constructor(brand, model, doors, cylinder, price) {
		this.brand = brand;
		this.model = model;
		this.doors = doors;
		this.cylinder = cylinder;
		this.price = price;
	}
	carsList() {
		const cars = [
			{ brand: 'Peugeot', model: '206', doors: 4, price: 200000 },
			{ brand: 'Honda', model: 'Titan', cylinder: '125cc', price: 60000 },
			{ brand: 'Peugeot', model: '208', doors: 5, price: 250000 },
			{ brand: 'Yamaha', model: 'YBR', cylinder: '160cc', price: 80500.5 },
		];
		const options = { style: 'currency', currency: 'USD' };
		const numberFormat = new Intl.NumberFormat('en-US', options);

		cars.map((a) => {
			console.log(
				`Marca: ${a.brand} // Modelo: ${a.model} // ${
					a.doors ? `Puertas: ${a.doors}` : `Cilindrada: ${a.cylinder}`
				} // Precio: ${numberFormat.format(a.price)}`
			);
		});
		console.log('=============================');

		cars.sort((a, b) => (a.price > b.price ? -1 : a.price < b.price ? 1 : 0));
		console.log(`Vehículo más caro: ${cars[0].brand} ${cars[0].model}`);

		cars.sort((a, b) => (a.price > b.price ? 1 : a.price < b.price ? -1 : 0));
		console.log(`Vehículo más barato: ${cars[0].brand} ${cars[0].model}`);

		cars.map((a) => {
			if (a.model.includes('y') || a.model.includes('Y'))
				console.log(
					`Vehículo que contiene en el modelo la letra ‘Y’: ${a.brand} ${
						a.model
					} ${numberFormat.format(a.price)}`
				);
		});
		console.log('=============================');
		cars.sort((a, b) => (a.price > b.price ? -1 : a.price < b.price ? 1 : 0));
		cars.map((a) => {
			console.log(`${a.brand} ${a.model}`);
		});
	}
}

Cars.prototype.carsList();
