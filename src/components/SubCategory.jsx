import React, { useState, useEffect } from "react";
import axios from "axios";
import Endpoints from "../api/Constants";

const SubCategory = () => {
  const [subCategories, setSubCategories] = useState([]);
  const catId = 3;
  const getData = () => {
    axios
      .get(Endpoints.CATEGORY_ELECTRONICS_URL + catId)
      .then((response) => setSubCategories(response.data.data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getData();
  }, [catId]);
  return (
    <div>
      <h2 className="text-center">Sub-Category</h2>
      <ul class="list-group">
        {subCategories.map((item) => (
          <li class="list-group-item">{item.subName}</li>
        ))}
      </ul>
    </div>
  );
};
