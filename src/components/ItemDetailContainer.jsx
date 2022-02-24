import { useState, useEffect } from 'react';
import products from './products';
import customFetch from './customFetch';
import ItemList from './ItemList';
//import ItemDetail from './ItemDetail';



const ItemDetailContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const response = customFetch(products[7]);
    response
      .then((data) => setItems(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <ItemList items={items} />
    </>
  );
};

export default ItemDetailContainer;
