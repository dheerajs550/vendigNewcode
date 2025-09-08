"use client";

import React, { useState } from "react";
// import { getInventoryOverview } from "@/api"; // aapke API file ka path adjust karein
import dayjs from "dayjs"; // date format ke liye
import { getInventoryOverview } from "@/services/ownerService";

const DateRangePicker = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFetchReport = async () => {
    if (!fromDate || !toDate) {
      alert("Please select both dates");
      return;
    }

    try {
      setLoading(true);

      // API me date format: DD-MM-YYYY
      const formattedFrom = dayjs(fromDate).format("DD-MM-YYYY");
      const formattedTo = dayjs(toDate).format("DD-MM-YYYY");

      const res = await getInventoryOverview({
        from: formattedFrom,
        to: formattedTo,
      });

      setReport(res?.items); // aapka API array yahan set ho raha hai
    } catch (err) {
      console.error(err);
      alert("Failed to fetch report");
    } finally {
      setLoading(false);
    }
  };
console.log(report)
  return (
    <div className="p-4">
      <div className="w-full flex flex-wrap justify-start gap-4 items-center p-4 rounded-lg">
        <h1 className="text-teal-700 text-2xl">Select Date</h1>

        <div className="flex items-center border border-teal-600 rounded-full bg-white px-3 py-2">
          <input
            className="outline-none"
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
        </div>

        <span className="text-teal-700 text-1xl mx-2">to</span>

        <div className="flex items-center border border-teal-600 rounded-full bg-white px-3 py-2">
          <input
            className="outline-none"
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />
        </div>

        <button
          className="bg-teal-600 text-white px-4 py-2 rounded-lg"
          onClick={handleFetchReport}
        >
          {loading ? "Loading..." : "Generate Report"}
        </button>
      </div>

      {report && report?.length > 0 && (
        <div className="mt-6 overflow-auto">
          <h2 className="text-xl font-bold mb-2">Inventory Report</h2>
          <table className="min-w-full border border-gray-300">
            <thead className="bg-teal-100">
              <tr>
                <th className="border px-2 py-1">Item Code</th>
                <th className="border px-2 py-1">Name</th>
                <th className="border px-2 py-1">Generic Name</th>
                <th className="border px-2 py-1">Brand Name</th>
                <th className="border px-2 py-1">Manufactured By</th>
                <th className="border px-2 py-1">Current Inventory</th>
              </tr>
            </thead>
            <tbody>
              {report?.map((row, idx) => (
                <tr key={idx} className="text-center">
                  <td className="border px-2 py-1">{row.itemCode}</td>
                  <td className="border px-2 py-1">{row.name}</td>
                  <td className="border px-2 py-1">{row.genericName || "-"}</td>
                  <td className="border px-2 py-1">{row.brandName || "-"}</td>
                  <td className="border px-2 py-1">{row.mfgBy || "-"}</td>
                  <td className="border px-2 py-1">{row.currentInventory || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {report && report.length === 0 && (
        <p className="mt-4 text-red-500">No data found for selected date range.</p>
      )}
    </div>
  );
};

export default DateRangePicker;
