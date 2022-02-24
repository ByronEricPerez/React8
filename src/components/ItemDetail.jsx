const ItemDetail = ({ item }) => {
 
  return (
    <div>
      <h3>{item.title}</h3>
      <img src={item.pictureUrl} alt={item.title} />
      <h5>{item.description}</h5>
      <h5>{item.price}</h5>
    </div>
  );
};

export default ItemDetail;