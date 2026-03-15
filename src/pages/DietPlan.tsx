import React, { useState } from "react";

const DietPlan = () => {

  const [goal, setGoal] = useState("");

  const plans: any = {
    weightloss: [
      "Breakfast: Oatmeal + Fruits",
      "Lunch: Grilled Chicken + Salad",
      "Snack: Nuts",
      "Dinner: Soup + Vegetables"
    ],
    musclegain: [
      "Breakfast: Eggs + Whole Wheat Bread",
      "Lunch: Chicken + Brown Rice",
      "Snack: Protein Shake",
      "Dinner: Paneer / Fish + Vegetables"
    ],
    maintenance: [
      "Breakfast: Smoothie + Toast",
      "Lunch: Dal + Rice + Salad",
      "Snack: Fruits",
      "Dinner: Light roti + sabzi"
    ]
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Personalized Diet Plan</h1>

      <select onChange={(e) => setGoal(e.target.value)}>
        <option>Select Goal</option>
        <option value="weightloss">Weight Loss</option>
        <option value="musclegain">Muscle Gain</option>
        <option value="maintenance">Maintenance</option>
      </select>

      <div style={{ marginTop: "20px" }}>
        {goal && (
          <ul>
            {plans[goal].map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DietPlan;