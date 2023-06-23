import React from 'react';
import { useParams } from 'react-router-dom';

function OrderConfirm() {
  const { orderid } = useParams();
  return (
    <div>
      <h1>Gracias por su compra!</h1>
      <small>Su comprobante de compra es: {orderid}</small>
    </div>
  );
}

export default OrderConfirm;