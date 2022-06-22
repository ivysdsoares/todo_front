import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ListActive from "./Components/ListActive";
import ListInactive from "./Components/ListInactive";
import Report from "./Components/Report";
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
        <Report/>
      </div>

      {/* <div className="shadow-elevation flex flex-col h-96 bg-form top-1/2 rounded-xl p-4">
        <Link to="new-task">
          <Form.GradientButton className="px-4" title="NOVA TAREFA" />{" "}
        </Link>
      </div> */}
    </div>
  );
}
export default Dashboard;
