import React from 'react';

function Cart({ items, removeFromCart }) {
  const total = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.price}</p>
              <button onClick={() => removeFromCart(item)}>Remove from Cart</button>
            </div>
          ))}
          <p>Total: {total}</p>
        </>
      )}
    </div>
  );
}

export default Cart;
