import React from "react";
import "./Table.css";
import { TableProps } from "./types";

export const Table: React.FC<TableProps> = ({
  headers,
  data,
  sorting,
  sort,
  height = 600,
}) => {
  return (
    <div className="table" style={{ maxHeight: `${height}px` }}>
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
    </div>
  );
};
