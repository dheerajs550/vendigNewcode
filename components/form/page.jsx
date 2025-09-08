"use client";
import { addInventory } from "@/services/ownerService";
import React, { useState } from "react";

const MedicineForm = () => {
  const [formData, setFormData] = useState({
    itemCode: "",
    name: "",
    batchNo: "",
    quantity: "",
    date: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await addInventory(formData); // API call
      console.log("✅ Inventory Added:", res);

      // Reset form
      setFormData({
        itemCode: "",
        name: "",
        batchNo: "",
        quantity: "",
        date: "",
      });

      alert("Inventory added successfully!");
    } catch (error) {
      console.error("❌ Error adding inventory:", error);
      alert("Failed to add inventory.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 rounded-lg">
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Item Code */}
        <div>
          <label className="block text-gray-800 font-medium mb-1" htmlFor="itemCode">
            Item Code
          </label>
          <input
            type="text"
            id="itemCode"
            value={formData.itemCode}
            onChange={handleChange}
            placeholder="Enter item code"
            className="w-full border border-teal-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
        </div>

        {/* Medicine Name */}
        <div>
          <label className="block text-gray-800 font-medium mb-1" htmlFor="name">
            Medicine Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter medicine name"
            className="w-full border border-teal-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
        </div>

        {/* Batch No */}
        <div>
          <label className="block text-gray-800 font-medium mb-1" htmlFor="batchNo">
            Batch No
          </label>
          <input
            type="text"
            id="batchNo"
            value={formData.batchNo}
            onChange={handleChange}
            placeholder="Enter batch number"
            className="w-full border border-teal-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-gray-800 font-medium mb-1" htmlFor="quantity">
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="Enter quantity"
            className="w-full border border-teal-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
        </div>

        {/* Date */}
        <div>
          <label className="block text-gray-800 font-medium mb-1" htmlFor="date">
            Expiry Date
          </label>
          <input
            type="date"
            id="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border border-teal-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-teal-600 text-white font-medium py-2 px-4 rounded-md hover:bg-teal-700"
        >
          Add Inventory
        </button>
      </form>
    </div>
  );
};

export default MedicineForm;
