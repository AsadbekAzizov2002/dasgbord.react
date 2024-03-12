import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";

const data = [
  { value: 22, label: "Phone" },
  { value: 15, label: "Tablet" },
  { value: 63, label: "Desktop" },
];

const size = {
  width: 400,
  height: 200,
};

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 20,
}));

const Chart2 = () => {
  return (
    <div>
      <PieChart series={[{ data, innerRadius: 80 }]} {...size}></PieChart>
    </div>
  );
};

export default Chart2;
