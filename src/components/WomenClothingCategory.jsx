import React, { useEffect, useState } from "react";
import axios from "axios";
import Category from "./Category";
import Endpoints from "../api/Endpoints";

const WomenClothingCategory = () => {
  const [categories, setCategories] = useState([]);
  const getData = () => {
    axios
      .get(Endpoints.CATEGORY_WOMENS_CLOTHING_URL)
      .then((response) => setCategories(response.data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div class="row">
        {categories.map((category) => (
          <Category data={category} />
        ))}
      </div>
    </div>
  );
};
export default WomenClothingCategory;
