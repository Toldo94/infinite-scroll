import { useState, useEffect, useCallback } from "react";
import Person from "../models/Person";
import ResponseData from "../models/ResponseData";

function useFetch(page: number) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [list, setList] = useState<Person[]>([]);
  const [count, setCount] = useState(0);

  const sendQuery = useCallback(async () => {
    try {
      await setLoading(true);
      await setError(false);

      const res = await fetch(
        `http://localhost:5000/data?page=${page}&limit=20`
      );
      const resData = await res.json();

      setCount(resData.count);

      const newList = [...list, ...resData.data];
      setList(newList);
      setLoading(false);
    } catch (err) {
      setError(!!err);
    }
  }, [page]);

  useEffect(() => {
    sendQuery();
  }, [page, sendQuery]);

  return { loading, error, list, count };
}

export default useFetch;
