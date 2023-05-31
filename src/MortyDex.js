import { useState, useEffect } from "react";
import Card from "./card";
import "./css/mortyDex.css";

const MortyDex = ({ data }) => {
  return (
    <div>
      <div className="container">
        {data?.results?.map((data) => (
          <Card
            key={data.id}
            name={data.name}
            gender={data.gender}
            image={data.image}
            species={data.species}
            status={data.status}
          />
        ))}
      </div>
    </div>
  );
};

export default MortyDex;
