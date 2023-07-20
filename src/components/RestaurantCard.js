function RestauarantCard(props) {
  const { name, imageUrl, cuisines, rating, cost, deliveryTime } =
    props.restaurant_details;

  return (
    <div className="restaurant-card">
      <img src={imageUrl}></img>
      <div className="res-details">
        <div className="res-details-left">
          <h2>{name}</h2>
          <span>{cuisines}</span>
        </div>
        <div className="res-details-right">
          <h3>{rating}</h3>
          <span>{cost}</span>
          <h4>{deliveryTime}</h4>
        </div>
      </div>
    </div>
  );
}

export default RestauarantCard;
