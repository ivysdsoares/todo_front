import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Form from "Components/Form";
import ListActive from "./Components/ListActive";
import ListInactive from "./Components/ListInactive";
import Report from "./Components/Report";
import NewTaskLink from "./Components/NewTaskLink";
import "./styles.css";

function Dashboard() {
  return (
    <div
      style={{}}
      className=" dashboard-container flex  flex-col overflow-visible items-stretch justify-start   sm:flex-row "
    >
      <ToastContainer
        position="top-right"
        limit={3}
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ListActive />
      <div className="p-2  " />
      <div className="flex flex-1 flex-col items-stretch">
        <ListInactive />
        <div className="p-2" />
        <Report />
      </div>
      <NewTaskLink />
    </div>
  );
}
export default Dashboard;
