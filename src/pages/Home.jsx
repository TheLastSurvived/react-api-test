import React, { useEffect, useState, createContext, useContext } from "react";
import Card from "../components/Card/Card";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../features/getData/getDataSlice";

export default function Home() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);

  //const dispatch = useDispatch();
  //const posts = useSelector((state) => state.dataSlice.data);

  useEffect(() => {
    if (fetching) {
      axios
        .get(
          `https://jsonplaceholder.typicode.com/posts?_limit=18&_page=${currentPage}`
        )
        .then((response) => {
          setData([...data, ...response.data]);
          setCurrentPage((prevState) => prevState + 1);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => setFetching(false));
    }

    //dispatch(getData());
  }, [fetching]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  function scrollHandler(e) {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true);
    }
  }

  return (
    <div className="container">
      <h1>Главная</h1>
      <div className="album py-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {data.map((item) => (
            <Card key={item.id} post={item} />
          ))}
        </div>{" "}
      </div>
    </div>
  );
}
