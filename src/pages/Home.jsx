import React from 'react';
import '@/styles/Home.css';

function Home() {
	return (
		<div>
			{/* main de la pag*/}
			<main className="main-view">
				{/* seccion de la listat de productos*/}
				<section className="products">
					<h2>Productos</h2>
					<table>
						<thead>
							<tr>
								<th>Nombre</th>
								<th>Precio</th>
								<th>Cantidad</th>
								<th />
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Producto 1</td>
								<td>$10.00</td>
								<td>5</td>
								<td><button className="add-to-cart">Agregar al carrito</button></td>
							</tr>
							<tr>
								<td>Producto 2</td>
								<td>$20.00</td>
								<td>1</td>
								<td><button className="add-to-cart">Agregar al carrito</button></td>
							</tr>
						</tbody>
					</table>
				</section>
				{/* seccion del carrito*/}
				<section className="cart">
					<h2>Carrito</h2>
					<table>
						<thead>
							<tr>
								<th>Nombre</th>
								<th>Precio unitario</th>
								<th>Cantidad</th>
								<th>Total</th>
								<th />
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Producto 1</td>
								<td>$10.00</td>
								<td>2</td>
								<td>$20.00</td>
								<td><button className="delete">Eliminar</button></td>
							</tr>
							<tr>
								<td>Producto 2</td>
								<td>$20.00</td>
								<td>1</td>
								<td>$20.00</td>
								<td><button className="delete">Eliminar</button></td>
							</tr>
							<tr>
								<td colSpan={3}>Total</td>
								<td>$40.00</td>
								<td />
							</tr>
						</tbody>
					</table>
					<button className="checkout">Finalizar venta</button>
				</section>
			</main>
		</div>
	);
}

export default Home;