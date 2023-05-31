import { useState, useEffect } from "react";

import "./css/mortyDex.css";

import MortyDex from "./MortyDex";
import Filter from "./Filter";
import ButtonLoadMore from "./ButtonLoadMore";
import LogoMortyDex from "./images/logoMrty.png";

function App() {
  const [data, setData] = useState([]);
  const [loadMoreClicked, setLoadMoreClicked] = useState(false);
  const [firstFetchChoun, setFirstFetchCount] = useState(0);
  const [filteredData, setFilteredData] = useState([]);

  const onSetLoadMoreClicked = (boolean) => {
    setLoadMoreClicked(boolean);
  };

  const onSetFilteredData = (info, results) => {
    setFilteredData({ info, results });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (loadMoreClicked) {
          const response = await fetch(data?.info?.next);
          const jsonData = await response.json();

          setData((prevData) => ({
            ...prevData?.results,
            info: { next: jsonData?.info?.next },
            results: prevData?.results?.concat(jsonData?.results),
          }));
        } else if (firstFetchChoun === 0) {
          const response = await fetch(
            "https://rickandmortyapi.com/api/character"
          );
          const jsonData = await response.json();
          setData(jsonData);
          setFirstFetchCount(firstFetchChoun + 1);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    if (loadMoreClicked) {
      fetchData();
      setLoadMoreClicked(false);
    } else {
      fetchData();
    }
  }, [loadMoreClicked]);

  console.log(data, "data");
  console.log(filteredData, "filteredData");

  return (
    <div className="background_image">
      {/* <h1
        style={{
          textAlign: "center",
          margin: "0",
          padding: "30px 0px 30px 0px",
        }}
      >
        MortyDex
      </h1> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "30px 0px 30px 0",
        }}
      >
        {" "}
        <img alt="logo" src={LogoMortyDex} style={{ width: "350px" }} />
      </div>

      <Filter onSetFilteredData={onSetFilteredData} data={data} />
      <MortyDex
        data={filteredData?.results?.length > 0 ? filteredData : data}
      />
      {filteredData?.results?.length > 0 ? null : (
        <ButtonLoadMore onSetLoadMoreClicked={onSetLoadMoreClicked} />
      )}
    </div>
  );
}

export default App;
