import { useState } from "react";
import "../styles/General.css";

export default function GeneralDisplay({ headerInfo }) {
  return (
    <>
      <h2 className="headerName">{headerInfo.name}</h2>
      <div className="headerInformation">
        <div>{headerInfo.address}</div>
        <div>{headerInfo.email}</div>
        <div>{headerInfo.phoneNumber}</div>
      </div>
    </>
  );
}
