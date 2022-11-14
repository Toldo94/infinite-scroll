import { useState, useEffect, useCallback, useRef } from "react";
import { useInView } from "react-intersection-observer";

import useFetch from "../../hooks/useFetch";
import useUpdate from "../../hooks/useUpdate";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const HEADERS = [
  "ID",
  "First name",
  "Last name",
  "Date of birth",
  "Country",
  "City",
  "Street",
];

const TableContainer = () => {
  const [page, setPage] = useState(0);
  const { loading, error, list, count } = useFetch(page);
  const { ref, inView } = useInView();

  useUpdate(() => {
    if (inView && (list.length < count || list.length === 0)) {
      setPage((prev) => prev + 1);
    }
  }, [inView, count, list.length]);

  if (!!error) {
    return <div>Error!!</div>;
  }

  return (
    <div className="App">
      <table>
        <thead>
          <TableHeader headers={HEADERS} />
        </thead>
        <tbody>
          {list.map((item) => (
            <TableRow key={item.id} row={item} />
          ))}
        </tbody>
      </table>
      <div ref={ref} />
      {loading && <div>Loading ....</div>}
    </div>
  );
};

export default TableContainer;
