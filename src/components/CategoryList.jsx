import React, { useEffect, useState } from "react";
import axios from "axios";
import Category from "./Category";
import Constants from "../api/Constants";
const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const getData = () => {
    axios
      .get(Constants.BASE_URL)
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
export default CategoryList;
