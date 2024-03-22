import { useState, useEffect } from "react";

function ShoppingCart({ cart, removeProduct, totalCost, discountCode }) {

    const [userCode, setUserCode] = useState("");
    const [discountedCost, setDiscountedCost] = useState(totalCost);

    const inputChange = (e) => {
        setUserCode(e.target.value);
    };

    const redeemCode = () => {
        if (userCode.trim() === discountCode) {          
            const discountPercentage = 0.1; 
            const discount = totalCost * discountPercentage;
            const newDiscountedCost = Math.max(0, totalCost - discount);

            setDiscountedCost(newDiscountedCost);
            alert("¡Código canjeado! Descuento aplicado.");
        } else {
            alert("Código no válido");
        }
    };

    useEffect(() => {
        if (userCode.trim() === discountCode) {
            const discountPercentage = 0.1;
            const discount = totalCost * discountPercentage;
            const newDiscountedCost = Math.max(0, totalCost - discount);
          
            setDiscountedCost(newDiscountedCost);
          }
    }, [totalCost, cart, userCode, discountCode]);
   
  return (
    <>
      <h2>Carrito</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}€
            <button onClick={() => removeProduct(product)}>X</button>
          </li>
        ))}
      </ul>
      <p>Coste total: {totalCost}€</p>
      <p>Coste con descuento: {discountedCost.toFixed(2)}€</p>
      <input type="text"
      placeholder="Introduzca un código válido"
      value={userCode}
      onChange={inputChange} />
      <br />
      <button onClick={redeemCode}>Canjear código</button>
    </>
  );
}

export default ShoppingCart;
