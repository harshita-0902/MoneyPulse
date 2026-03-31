import React, { useState } from 'react'
import Input from '../Inputs/Input';
import EmojiPickerPopup from "../layouts/EmojiPickerPopup"

const AddIncomeForm = ({ onAddIncome }) => {
  const [income, setIncome] = useState({
    source: "",
    amount: "",
    date: "",
    icon: "",
  });

  const handleChange = (key, value) => setIncome({ ...income, [key]: value });

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    onAddIncome(income);
    setIncome({ source: "", amount: "", date: "", icon: "" }); // Clear form
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <EmojiPickerPopup
          icon={income.icon}
          onSelect={(selectedIcon) => handleChange("icon", selectedIcon)}
        />

        <Input
          value={income.source}
          onChange={({ target }) => handleChange("source", target.value)}
          label="Income Source"
          placeholder="Freelance, Salary, etc"
          type="text"
        />

        <Input
          value={income.amount}
          onChange={({ target }) => handleChange("amount", target.value)}
          label="Amount"
          placeholder="Enter amount"
          type="number"
        />

        <Input
          value={income.date}
          onChange={({ target }) => handleChange("date", target.value)}
          label="Date"
          type="date"
        />

        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="add-btn add-btn-fill"
          >
            Add Income
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddIncomeForm;
