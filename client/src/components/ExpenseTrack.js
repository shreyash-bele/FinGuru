import React from "react";
import Graph from "./Graph";
import Form from "./Form";

export default function ExpenseTrack()
{
    return(
       
        <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
        <h1 className="text-4xl py-8 mb-10 bg-slate-800 text-white rounded">
          {" "}
           FinGuru Expense Tracker
        </h1>

        {/* gird coloums  */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* Graph */}
          <Graph></Graph>
          {/* Form */}
          <Form></Form>
        </div>
      </div>

    );
}