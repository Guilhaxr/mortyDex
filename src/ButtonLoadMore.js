import { useState, useEffect } from "react";

const ButtonLoadMore = ({ onSetLoadMoreClicked }) => {
  const loadMoreHandler = () => {
    onSetLoadMoreClicked(true);
  };
  return (
    <div className="container_button">
      <button className="button_loadMore" onClick={loadMoreHandler}>
        Load more
      </button>
    </div>
  );
};

export default ButtonLoadMore;
