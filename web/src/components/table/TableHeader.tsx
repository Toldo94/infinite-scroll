import React from "react";
interface OwnProps {
  headers: string[];
}

const TableHeader = ({ headers }: OwnProps) => {
  return (
    <tr>
      {headers.map((header, i) => (
        <th key={`table-header-${i}`}>{header}</th>
      ))}
    </tr>
  );
};

export default TableHeader;
