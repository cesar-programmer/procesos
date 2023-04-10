import React from 'react';
import '@/styles/Header.css';

const Header = () => {
	return (
		<div>	<header>
			<h1 className="name-top">Punto de venta</h1>
			{/* nav de la pag*/}
			<nav className="header-options">
				<ul>
					<li><a href="#">Ventas</a></li>
					<li><a href="#">Inventario</a></li>
					<li><a href="#">Agregar producto</a></li>
					<li><a href="#">Modificar producto</a></li>
					<li><a href="#">Eliminar producto</a></li>
				</ul>
			</nav>
		</header></div>
	);
};

export default Header;