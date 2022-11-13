import React from "react";
import logo from "../assets/logo.svg";

const ExpensesChart = ({ data }) => (
  <div className="flex flex-col mx-auto min-w-[24rem] max-w-md h-screen p-4 mt-8">
    <header className="flex flex-row justify-between bg-softRed my-3 px-8 py-6 rounded-2xl">
      <div className="flex flex-col">
        <h1 className="text-paleOrange text-sm mb-1">My balance</h1>
        <h2 className="text-paleOrange font-semibold text-2xl">$921.48</h2>
      </div>
      <img src={logo} alt={logo} />
    </header>
    <main className="flex flex-col bg-paleOrange my-3 px-8 py-6 rounded-2xl">
      <h1 className="text-darkBrown font-bold text-2xl">
        Spending - Last 7 days
      </h1>
      <div className="border-b-2 border-cream flex justify-between h-56 gap-2 sm:gap-4 py-4">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col justify-end h-full w-full text-center ">
            <span
              style={{ height: item.amount + "%" }}
              className={`${
                item.day === "wed" ? "bg-cyanColor" : "bg-softRed"
              }  rounded relative ease-in duration-300 hover:bg-opacity-50 group cursor-pointer`}
            >
              <span className="w-11 sm:w-12 py-2 absolute z-10 -top-10 -left-1 text-paleOrange bg-darkBrown rounded text-xs font-bold invisible group-hover:visible">
                ${item.amount}
              </span>
            </span>
            <p className="text-mediumBrown px-1 py-2 text-sm">{item.day}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4 py-2">
        <div className="flex flex-col justify-start">
          <h1 className="text-mediumBrown text-sm">Total this month</h1>
          <h2 className="text-darkBrown text-4xl font-bold">$478.33</h2>
        </div>
        <div className="flex flex-col text-right justify-end">
          <h3 className="text-darkBrown text-sm font-bold">+2.4%</h3>
          <h2 className="text-mediumBrown text-sm">from last month</h2>
        </div>
      </div>
    </main>
  </div>
);

export default ExpensesChart;
