import { useParams } from "react-router-dom";
import { restaurants_data } from "../common/mock_data";

const RestaurantCardDetails = () => {
  const { resId } = useParams();
  console.log(resId);
  const filteredRestaurant = restaurants_data.filter((detail) => {
    return detail.id == resId;
  });

  //console.log(filteredRestaurant);

  const { name, cuisines, rating, imageUrl } = filteredRestaurant[0];

  return (
    <>
      <div className="resPageDetails">
        <img src={imageUrl} className="resPageImg"></img>
        <div className="resPageBottom">
          <div className="resPageInfo">
            <h2>Name :</h2>
            <h3>{name}</h3>
          </div>
          <div className="resPageInfo">
            <h2>Cuisines :</h2>
            <h4>{cuisines}</h4>
          </div>
          <div className="resPageInfo">
            <h2>Rating :</h2>
            <h3>{rating}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantCardDetails;
