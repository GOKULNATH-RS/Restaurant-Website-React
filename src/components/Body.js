import RestauarantCard from "./RestaurantCard";
import { useState } from "react";
import { restaurants_data } from "../common/mock_data";

function Body() {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] =
    useState(restaurants_data);

  function handleOnChangeEvent(e) {
    setSearchText(e.target.value);
  }

  function filterRestaurants() {
    const filterData = restaurants_data.filter((restaurant) => {
      return restaurant.name.toLowerCase().includes(searchText.toLowerCase());
    });

    setFilteredRestaurants(filterData);
  }

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          onChange={handleOnChangeEvent}
          placeholder="Search.."
        ></input>
        <button onClick={filterRestaurants}>Search</button>
      </div>

      <div className="card-container">
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestauarantCard
              key={restaurant.id}
              restaurant_details={restaurant}
            />
          );
        })}
      </div>
    </>
  );
}

export default Body;
