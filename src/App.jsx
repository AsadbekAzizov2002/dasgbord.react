import React from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Charts from "./Charts";
import Chart2 from "./Chart2";
import { ClassNames } from "@emotion/react";
import { List } from "@mui/material";
import Lists from "./Lists";
import Tables from "./Tables";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ReceiptIcon from "@mui/icons-material/Receipt";

const App = () => {
  return (
    <div>
      <header className=" border-b-2">
        <div className=" container w-[1250px] py-auto px-4 flex justify-between items-center">
          <SearchRoundedIcon />
          <div className=" flex gap-5">
            <PeopleOutlineIcon />
            <NotificationsNoneIcon />
          </div>
        </div>
      </header>
      <div>
        <main className=" flex justify-between w-[1250px] container py-auto px-6 mt-10 mb-10">
          <div className=" w-[250px] ">
            <div className=" flex gap-10 ">
              <div>
                <p className="text-sm	 font-medium">BUDGET</p>
                <h1 className="text-xl	 font-bold ">$24k</h1>
              </div>
              <div className=" w-10 h-10 rounded-3xl  bg-purple-900">
                <AttachMoneyIcon />
              </div>
            </div>
            <div className=" flex gap-5">
              <h2 className=" text-teal-300 text-sm">12%</h2>
              <p className=" text-sm">since last month</p>
            </div>
          </div>
          <div className=" w-[250px] ">
            <div className=" flex gap-10 ">
              <div>
                <p className="text-sm	 font-medium">TOTAL CUSTOMERS</p>
                <h1 className="text-xl	 font-bold ">1.6k</h1>
              </div>
              <div className=" w-10 h-10 rounded-3xl bg-green-500 items-center justify-center ">
                <PeopleOutlineIcon />
              </div>
            </div>
            <div className=" flex gap-5">
              <h2 className=" text-red-500 text-sm">16% </h2>
              <p className=" text-sm">since last month</p>
            </div>
          </div>
          <div className=" w-[250px] ">
            <div className=" flex gap-10 ">
              <div>
                <p className="text-sm	 font-medium">TASK PROGRESS</p>
                <h1 className="text-xl	 font-bold ">75.5%</h1>
              </div>
              <div className=" w-10 h-10 rounded-3xl bg-orange-500">
                <ListAltIcon />
              </div>
            </div>
          </div>
          <div className=" w-[250px] ">
            <div className=" flex gap-10 ">
              <div>
                <p className="text-sm	 font-medium">TOTAL PROFIT</p>
                <h1 className="text-xl	 font-bold ">$15k</h1>
              </div>
              <div className=" w-10 h-10 rounded-3xl  bg-purple-700">
                <ReceiptIcon />
              </div>
            </div>
          </div>
        </main>
        <div className=" flex">
          <div>
            <Charts />
          </div>
          <div>
            <Chart2 />
          </div>
        </div>
        <div className=" flex mt-10 w-[1250px] justify-between">
          <div>
            <Lists />
          </div>
          <div>
            <Tables />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
