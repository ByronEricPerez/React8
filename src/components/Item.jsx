const Item = ({ item }) => {
 
  return (
    <div className='boxItem'>
      <h3>{item.id}</h3>
      <h3>{item.title}</h3>
      <img src={item.pictureUrl} alt={item.title} />
      <h5>{item.price}</h5>
    </div>
  );
};

export default Item;