import React from "react";
import { InsightSecionProps } from "./types";
import "./InsightSecion.css";

export const InsightSecion: React.FC<InsightSecionProps> = ({
  title,
  children,
}) => {
  return (
    <>
      <h1 className="insight-secion__title">{title}</h1>
      <div className="insight-secion__content">{children}</div>
    </>
  );
};
