import React from "react";

const Gamma = ({ alcoholCount, gammaMean, gammaMedian, gammaMode }) => {
  return (
    <table>
      <tr>
        <th scope="col">Measure</th>
        {alcoholCount.map((item, key) => (
          <th key={key}>{`Class ${item}`}</th>
        ))}
      </tr>
      <tr>
        <th scope="row">Gamma Mean</th>
        {gammaMean.map((item, key) => (
          <th key={key}>{item}</th>
        ))}
      </tr>
      <tr>
        <th scope="row">Gamma Median</th>
        {gammaMedian.map((item, key) => (
          <th key={key}>{item}</th>
        ))}
      </tr>
      <tr>
        <th scope="row">Gamma Mode</th>
        {gammaMode.map((item, key) => (
          <th key={key}>{item}</th>
        ))}
      </tr>
    </table>
  );
};

export default Gamma;
