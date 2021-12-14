import { useEffect, useState } from "react";

export default function useSubtotal(products) {
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    let sumOfProducts = 0;
    products.map(({ quantity, price }) => {
      sumOfProducts = quantity * price + sumOfProducts;
      return true;
    });
    setSubtotal(sumOfProducts);
  }, [products]);

  return subtotal;
}
