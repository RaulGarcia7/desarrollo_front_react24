function ProductList({ addToCart}) {

    const products = [
        { id: 1, name: 'Gorra', price: 10 },
        { id: 2, name: 'Zapatillas', price: 40 },
        { id: 3, name: 'Camiseta', price: 14 },
        { id: 4, name: 'Reloj', price: 160 }
      ];

  return (
    <>
      <h2>Productos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}€
            <br />
            <button onClick={() => addToCart(product)}>Agregar al carrito</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductList;
