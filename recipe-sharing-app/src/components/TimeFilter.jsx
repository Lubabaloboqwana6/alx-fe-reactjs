import React from "react";
import useRecipeStore from "./recipeStore";

const TimeFilter = () => {
  const { timeFilter, setTimeFilter } = useRecipeStore();

  const handleTimeChange = (e) => {
    setTimeFilter(e.target.value);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="number"
        value={timeFilter}
        onChange={handleTimeChange}
        placeholder="Filter by cooking time (minutes)..."
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
};

export default TimeFilter;
