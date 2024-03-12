import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("ORD-007", ` Ekaterina Tankova`, `(Mar 8 2024)`, 24),
  createData("ORD-006", `Cao Yu`, `(Mar 8 2024)`, 37),
  createData("ORD-004", `Alexa Richardson`, `(Mar 8 2024)`, 24),
  createData("ORD-003", `Anje Keizer`, `(Mar 8 2024)`, 67),
  createData("ORD-002", `Clarke Gillebert`, `(Mar 8 2024)`, 49),
  createData("ORD-001", `Adam Denisov`, `(Mar 8 2024)`, 49),
];

function Tables() {
  return (
    <div className=" container w-[550px]">
      <div>
        <h1>Latest orders</h1>
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Order</TableCell>
                <TableCell align="right">Customer</TableCell>
                <TableCell align="right">Date </TableCell>
                <TableCell align="right">Status</TableCell>
                {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  {/* <TableCell align="right">{row.protein}</TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Tables;
