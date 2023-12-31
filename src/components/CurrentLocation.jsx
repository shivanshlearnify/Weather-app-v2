import React from "react";

const CurrentLocation = ({city, country}) => {
  return (
    <div className="top">
      <div className="city">{city}</div>
      <div className="country">{country}</div>
    </div>
  );
};

export default CurrentLocation;
