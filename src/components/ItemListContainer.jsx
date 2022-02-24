import { useState, useEffect } from 'react';
import products from './products';
import customFetch from './customFetch';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const response = customFetch(products);
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

export default ItemListContainer;

