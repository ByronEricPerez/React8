//import Item from './Item';
import ItemDetail from './ItemDetail';


const ItemList = ({ items }) => {

  return (
    <>
      {items.map((item) => (
        <ItemDetail item={item} key={item.id} />
      ))}
    </>
  );
};

export default ItemList;