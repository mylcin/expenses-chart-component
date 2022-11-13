import React from "react";
import ExpensesChart from "./components/ExpensesChart";
import data from "./constants/data";

const App = () => {
  return (
    <>
      <ExpensesChart data={data} />
    </>
  );
};

export default App;
