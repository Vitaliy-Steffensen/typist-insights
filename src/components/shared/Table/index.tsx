import React from "react";
import "./Table.css";

interface indexProps {
  headers: string[];
  data: { [key: string]: string | number }[];
  sorting: any;
  sort: any;
}

export const Table: React.FC<indexProps> = ({
  headers,
  data,
  sorting,
  sort,
}) => {
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, i) => (
            <th key={i} onClick={() => sort(header)}>
              {header}
              {sorting === header ? "⬇" : ""}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((record, rowIndex) => (
          <tr key={rowIndex}>
            {Object.entries(record).map((key, i) => (
              <td key={i}>{key[1]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
