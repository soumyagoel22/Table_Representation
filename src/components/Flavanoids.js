import React from "react";

const Flavanoids = ({
  alcoholCount,
  flavanoidsMean,
  flavanoidsMedian,
  flavanoidsMode
}) => {
  return (
    <table>
      <tr>
        <th scope="col">Measure</th>
        {alcoholCount.map((item, key) => (
          <th key={key}>{`Class ${item}`}</th>
        ))}
      </tr>
      <tr>
        <th scope="row">Flavanoids Mean</th>
        {flavanoidsMean.map((item, key) => (
          <th key={key}>{item}</th>
        ))}
      </tr>
      <tr>
        <th scope="row">Flavanoids Median</th>
        {flavanoidsMedian.map((item, key) => (
          <th key={key}>{item}</th>
        ))}
      </tr>
      <tr>
        <th scope="row">Flavanoids Mode</th>
        {flavanoidsMode.map((item, key) => (
          <th key={key}>{item}</th>
        ))}
      </tr>
    </table>
  );
};

export default Flavanoids;
