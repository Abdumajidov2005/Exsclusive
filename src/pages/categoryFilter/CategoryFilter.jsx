import React, { useEffect, useState } from "react";
import "./CategoryFilter.css";
import { Link, useParams } from "react-router-dom";
import { getFilterData } from "../../services/api";
import Card from "../../components/card/Card";

function CategoryFilter() {
  const { id } = useParams();
  const [filterId, setFilterId] = useState(null);
  useEffect(() => {
    getFilterData(id)?.then(setFilterId);
  }, [id]);

  return (
    <>
      <div className="categoryFilter">
        <div className="container">
            <h2>
                <Link to={"/"}>Home</Link><span>/</span><span>Category Filter</span>
            </h2>
          
          <div className="cards">
            {filterId?.map((item) => {
              return <Card key={item?.id} item={item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryFilter;
